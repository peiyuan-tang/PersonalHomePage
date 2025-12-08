import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { SKILL_NETWORK_DATA } from '../constants';
import { SkillNode, SkillLink } from '../types';

const SkillViz: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = 500;
    
    // Clear previous render
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height]);

    // Color scale based on group
    const color = d3.scaleOrdinal<number, string>()
      .domain([1, 2, 3, 4, 5])
      .range(["#2563EB", "#0F172A", "#64748B", "#0891B2", "#4F46E5"]);

    // Simulation setup
    const simulation = d3.forceSimulation<SkillNode>(SKILL_NETWORK_DATA.nodes)
      .force("link", d3.forceLink<SkillNode, SkillLink>(SKILL_NETWORK_DATA.links).id(d => d.id).distance(80))
      .force("charge", d3.forceManyBody().strength(-300))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collide", d3.forceCollide().radius(d => (d.radius || 5) + 10));

    // Draw links
    const link = svg.append("g")
      .attr("stroke", "#cbd5e1")
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(SKILL_NETWORK_DATA.links)
      .join("line")
      .attr("stroke-width", d => Math.sqrt(d.value));

    // Draw nodes
    const node = svg.append("g")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)
      .selectAll("circle")
      .data(SKILL_NETWORK_DATA.nodes)
      .join("circle")
      .attr("r", d => d.radius || 5)
      .attr("fill", d => color(d.group))
      .call(drag(simulation) as any);

    // Labels
    const labels = svg.append("g")
      .attr("class", "labels")
      .selectAll("text")
      .data(SKILL_NETWORK_DATA.nodes)
      .join("text")
      .attr("text-anchor", "middle")
      .attr("dy", d => (d.radius || 5) + 15)
      .text(d => d.id)
      .attr("font-size", "10px")
      .attr("font-family", "sans-serif")
      .attr("fill", "#334155")
      .style("pointer-events", "none");

    // Simulation tick update
    simulation.on("tick", () => {
      link
        .attr("x1", d => (d.source as any).x)
        .attr("y1", d => (d.source as any).y)
        .attr("x2", d => (d.target as any).x)
        .attr("y2", d => (d.target as any).y);

      node
        .attr("cx", d => (d as any).x)
        .attr("cy", d => (d as any).y);

      labels
        .attr("x", d => (d as any).x)
        .attr("y", d => (d as any).y);
    });

    // Cleanup
    return () => {
      simulation.stop();
    };
  }, []);

  // Drag behavior definition
  const drag = (simulation: d3.Simulation<SkillNode, undefined>) => {
    function dragstarted(event: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event: any) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event: any) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    return d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
  };

  return (
    <div ref={containerRef} className="w-full bg-slate-50 rounded-xl shadow-inner border border-slate-200 overflow-hidden">
      <svg ref={svgRef} className="w-full h-full cursor-grab active:cursor-grabbing"></svg>
    </div>
  );
};

export default SkillViz;
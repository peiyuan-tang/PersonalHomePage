import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Experience from './Experience';
import { EXPERIENCE_DATA } from '../constants';

// Mock Recharts and D3 visualization components to focus on data rendering
// This avoids complex D3/Canvas interactions in JSDOM
vi.mock('./SkillViz', () => ({
  default: () => <div data-testid="skill-viz-mock">Skill Visualization Graph</div>
}));

// We can allow Recharts to attempt rendering, but since we mocked ResizeObserver in setup, it should be fine.
// However, verifying the text content is usually sufficient for integration tests of this level.

describe('Experience Component', () => {
  it('renders all job experiences from constants', () => {
    render(<Experience />);
    
    EXPERIENCE_DATA.forEach(job => {
      // Check for job titles (using getAllByText because specific words might appear elsewhere, 
      // but the full title should be present)
      expect(screen.getByText(job.title)).toBeInTheDocument();
      expect(screen.getByText((content) => content.includes(job.company))).toBeInTheDocument();
    });
  });

  it('renders the "Core Competencies" section', () => {
    render(<Experience />);
    expect(screen.getByText('Core Competencies')).toBeInTheDocument();
    expect(screen.getByText('Relative proficiency based on project usage and complexity.')).toBeInTheDocument();
  });

  it('renders the "Skill Network" section with the mocked visualization', () => {
    render(<Experience />);
    expect(screen.getByText('Skill Network')).toBeInTheDocument();
    expect(screen.getByTestId('skill-viz-mock')).toBeInTheDocument();
  });
});
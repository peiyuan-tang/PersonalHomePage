import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from './Hero';
import { SOCIAL_LINKS } from '../constants';

describe('Hero Component', () => {
  it('renders the main heading correctly', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/David Tang/i);
    expect(screen.getByText('(Peiyuan)')).toBeInTheDocument();
  });

  it('renders the role description', () => {
    render(<Hero />);
    expect(screen.getByText(/Staff Software Engineer & Tech Lead at Google/i)).toBeInTheDocument();
  });

  it('renders social links with correct URLs', () => {
    render(<Hero />);
    
    const linkedinLink = screen.getByRole('link', { name: /LinkedIn/i });
    expect(linkedinLink).toHaveAttribute('href', SOCIAL_LINKS.linkedin);

    const personalProjectsLink = screen.getByRole('link', { name: /Personal Projects/i });
    expect(personalProjectsLink).toHaveAttribute('href', SOCIAL_LINKS.personalProjects);
    
    const githubLink = screen.getByRole('link', { name: /College Projects/i });
    expect(githubLink).toHaveAttribute('href', SOCIAL_LINKS.github);
  });
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component', () => {
  it('renders the navigation bar with name', () => {
    render(<App />);
    expect(screen.getByText(/David Tang/i)).toBeInTheDocument();
  });

  it('renders the navigation links', () => {
    render(<App />);
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders the Hero section', () => {
    render(<App />);
    // Check for specific text in Hero
    expect(screen.getByText(/Staff Software Engineer & Tech Lead/i)).toBeInTheDocument();
  });
  
  it('renders the Hire Me button', () => {
      render(<App />);
      expect(screen.getByRole('link', { name: /Hire Me/i })).toBeInTheDocument();
  });
});
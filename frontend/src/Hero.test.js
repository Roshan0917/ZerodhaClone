import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from './landingPage/home/Hero';
import '@testing-library/jest-dom';

// Test Suite
describe('Hero', () => {
  test('renders Hero Image correctly', () => {
    render(<Hero />);
    const heroImage = screen.getByAltText('Hero Image');
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute('src', 'media/images/homeHero.png');
  });
});

import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders hello world title', () => {
    render(<App />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('shows loading state initially', () => {
    render(<App />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('fetches and displays message from server', async () => {
    // Mock the fetch call
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ message: 'Hello from server!' }),
      })
    );

    render(<App />);

    // Wait for the message to be displayed
    await waitFor(() => {
      expect(screen.getByText('Hello from server!')).toBeInTheDocument();
    });
  });

  it('shows error message when fetch fails', async () => {
    // Mock the fetch call to fail
    global.fetch = vi.fn(() => Promise.reject('API Error'));

    render(<App />);

    // Wait for the error message
    await waitFor(() => {
      expect(screen.getByText('Failed to load message')).toBeInTheDocument();
    });
  });
}); 
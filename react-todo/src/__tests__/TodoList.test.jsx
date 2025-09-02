import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

test('renders initial todos', () => {
  render(<TodoList />);
  expect(screen.getByText(/Sample Todo 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Sample Todo 2/i)).toBeInTheDocument();
});

test('can add a new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText(/Add a new todo/i);
  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(screen.getByText(/Add/i));
  expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
});

test('can toggle a todo', () => {
  render(<TodoList />);
  const todo = screen.getByText(/Sample Todo 1/i);
  fireEvent.click(todo);
  expect(todo).toHaveClass('completed');
});

test('can delete a todo', () => {
  render(<TodoList />);
  const deleteButton = screen.getByTestId('delete-Sample Todo 1');
  fireEvent.click(deleteButton);
  expect(screen.queryByText(/Sample Todo 1/i)).toBeNull();
});

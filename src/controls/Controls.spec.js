import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Controls from './Controls';

test('Controls renders without crashing', () => {
    render(<Controls />);
})

test('Provides buttons to toggle the closed and lock states', () => {
    const { getByText } = render(<Controls closed={false} locked={false} />);
    getByText(/close gate/i);
    getByText(/lock gate/i);
})

test('Button text changes to reflect the open or closed gate state when clicked', () => {
    const { getByText, findByText } = render(<Controls closed={false} />);
    const button = getByText(/close gate/i);
    fireEvent.click(button);
    findByText(/open gate/i);
})

test('Button text changes to reflect the locked or unlocked gate state when clicked', () => {
    const { getByText, findByText } = render(<Controls locked={true} />);
    const button = getByText(/unlock gate/i);
    fireEvent.click(button);
    findByText(/lock gate/i);
})

test('The lock gate toggle is disabled if the gate is open', () => {
    const { getByText } = render(<Controls closed={false} locked={false} />);
    expect(getByText(/lock gate/i).disabled).toBe(true);
})

test('The open gate toggle is disabled if the gate is locked', () => {
    const { getByText } = render(<Controls closed={true} locked={true} />);
    expect(getByText(/open gate/i).disabled).toBe(true);
})
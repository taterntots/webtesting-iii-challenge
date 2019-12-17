import React from 'react';
import { render } from '@testing-library/react';

import Display from './Display';

test('Display renders without crashing', () => {
    render(<Display />);
})

test('Display shows gate is open', () => {
    const { getByText } = render(<Display closed={false} />)
    getByText(/open/i);
})

test('Display shows gate is closed', () => {
    const { getByText } = render(<Display closed={true} />)
    getByText(/closed/i);
})

test('Display shows gate is unlocked', () => {
    const { getByText } = render(<Display locked={false} />)
    getByText(/unlocked/i);
})

test('Display shows gate is locked', () => {
    const { getByText } = render(<Display locked={true} />)
    getByText(/^locked$/i);
})

test('Display shows gate is closed and unlocked', () => {
    const { getByText } = render(<Display closed={true} locked={false} />)
    getByText(/closed/i);
    getByText(/unlocked/i);
})

test('Display shows the color red when the gate is both closed and locked', () => {
    const { getByText} = render(<Display closed={true} locked={true} />);
    expect(getByText(/closed/i).classList.contains('red-led')).toBe(true);
    expect(getByText(/^locked$/i).classList.contains('red-led')).toBe(true);
})

test('Display shows the color green when the gate is both open and unlocked', () => {
    const { getByText} = render(<Display closed={false} locked={false} />);
    expect(getByText(/open/i).classList.contains('green-led')).toBe(true);
    expect(getByText(/unlocked/i).classList.contains('green-led')).toBe(true);
})
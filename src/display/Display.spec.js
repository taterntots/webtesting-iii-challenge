import React from 'react';
import { render } from '@testing-library/react';

import Display from './Display';

test('Display renders without crashing', () => {
    render(<Display />);
})

test('Display shows Open if closed set to false', () => {
    const { getByText } = render(<Display closed={false} />)
    getByText(/open/i);
})

test('Display shows Closed if closed set to true', () => {
    const { getByText } = render(<Display closed={true} />)
    getByText(/closed/i);
})

test('Display shows Unlocked if locked set to false', () => {
    const { getByText } = render(<Display locked={false} />)
    getByText(/unlocked/i);
})

test('Display shows Locked if locked set to true', () => {
    const { getByText } = render(<Display locked={true} />)
    getByText(/^locked$/i);
})

// test('displays if gate is open and if it is unlocked', () => {
//     const closed = false;
//     const locked = false;
//     const className = '';
// })
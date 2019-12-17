import React from 'react';
import { render } from '@testing-library/react';

import Dashboard from './Dashboard';

test('Dashboard renders without crashing', () => {
    const { baseElement } = render(<Dashboard />);
    expect(baseElement).toMatchSnapshot();
})
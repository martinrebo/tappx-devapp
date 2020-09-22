import React from 'react'
import ReactDOM from 'react-dom'

import { render, cleanup, fireEvent } from '@testing-library/react';

import Button from './Button'

describe('<Button>', () => {
    afterEach(cleanup);
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({}),
        })
    );

    beforeEach(() => {
        fetch.mockClear();
    });

    it('renders without crasing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Button />, div)
    })
    it('Fetch a new developer when clicked', () => {
        const { getByText } = render(<Button />)

        fireEvent.click(getByText('New Developer'))
        expect(fetch).toHaveBeenCalledTimes(1);
    })
    it('Adds Developer to Table and LocalStorage ', () => {
// TODO: Create Table + ContextAPI. 
    })


})
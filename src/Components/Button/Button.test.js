import React from 'react'
import ReactDOM from 'react-dom'

import { act, render, cleanup, fireEvent, waitForElement } from '@testing-library/react';

import Button from './Button'
import { StateProvider } from '../../store/store'


describe('<Button>', () => {
    afterEach(cleanup);
    /* DISPATCH MOCK */
    const dispatch = jest.fn()

    /* FETCH MOCK */
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({ results: [] }),
        })
    );

    beforeEach(() => {
        fetch.mockClear();
    });

    it('renders without crasing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Button />, div)
    })
    it('Fetch a new developer when clicked', async () => {
        const { getByText } = await render(<StateProvider> <Button /> </StateProvider>)

        const button = await waitForElement( () => getByText('New Developer'))       
        fireEvent.click(button) 
        expect(fetch).toHaveBeenCalledTimes(1);
    })
    it('Adds Developer to Table and LocalStorage ', () => {
        // TODO: Create Table + ContextAPI. 
    })


})
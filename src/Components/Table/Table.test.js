import React from 'react'
import ReactDOM from 'react-dom'

import { render, cleanup, fireEvent } from '@testing-library/react';

import Table from './Table'

describe('<Table>', () => {
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
        ReactDOM.render(<Table />, div)
    })
    // it('Shows name, city, email, cell',  () => {
    //     const { getByText } =  render(<Table />)
    //     expect(getByText('Name')).toBeTruthy();
    //     expect(getByText('City')).toBeTruthy();
    //     expect(getByText('Email')).toBeTruthy();
    //     expect(getByText('Cell')).toBeTruthy();
    // })
    
    // it('Shows extra column with Edit and Delete Button', () => {
    //     const { getByText } = render(<Table />)
    //     expect(getByText('Edit/Delete')).toBeTruthy();
    //     expect(getByText('✏️')).toBeTruthy();
    //     expect(getByText('❌')).toBeTruthy();

    // })


})
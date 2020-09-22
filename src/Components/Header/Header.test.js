import React from 'react'
import ReactDOM from 'react-dom'

import { render, cleanup } from '@testing-library/react';

import Header from './Header'

describe('<Header>', () => {
    afterEach(cleanup);

    it('renders without crasing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Header />, div)
    })
    it('contains the brand Logo image and title', () => {
        const { getByTestId, getByText } = render(<Header />)
        expect(getByTestId('logo')).toBeTruthy()
        expect(getByText('App Developer Manager')).toBeTruthy()
    })


})
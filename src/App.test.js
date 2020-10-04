import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {StateProvider} from './store/store'

test('renders <App />', () => {
render(<StateProvider> <App /> </StateProvider>);
});

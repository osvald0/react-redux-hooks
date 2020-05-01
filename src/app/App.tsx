import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Users from '../users/UsersComponent';
import Footer from './Footer';
import Header from './Header';

import './App.scss';

function App(): ReactElement {
    return (
        <Provider store={store}>
            <div className='App'>
                <Header />
                <Users />
                <Footer />
            </div>
        </Provider>
    );
}

export default App;

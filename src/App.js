import React from 'react'
import MainComponent from './components/MainComponent'
import {Provider} from 'react-redux'
import store from './store/configureStoreProduction'
import 'Helper';
import 'antd/dist/antd.css'

const App = () => {
    return (
        <Provider store={store}>
           <MainComponent />
        </Provider>
    )
};

export default App;


import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import {store, persistor} from './store'
import { PersistGate } from 'redux-persist/integration/react'


ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={<p>Loading...</p>} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>, 
    document.getElementById('root')
)
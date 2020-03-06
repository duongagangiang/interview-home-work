import React from 'react'
import { HashRouter as Router } from 'react-router-dom'

import Header from './Header'
import Content from './Content'
import history from '../history'

const App = () => (
    <Router history={history}>
        <Header />
        <Content />
    </Router>
)

export default App

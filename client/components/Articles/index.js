import React, { Component } from 'react'
import axios from 'axios'

class Articles extends Component {
    
    async componentDidMount() {
        const res = await axios.get('/v1/posts')
        console.log('Articles', res)
    }

    render() {
        return (
            <h1>Articles working</h1>
        )
    }
}

export default Articles

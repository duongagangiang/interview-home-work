import React, { Component } from 'react'
import Article from '../Article'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { connect } from 'react-redux'

class Articles extends Component {

    render() {
        const { posts } = this.props
        console.log(posts.data)
        return posts.data.length > 0 ? 
            posts.data.map(post => (
                <Row key={post.id} style={{marginTop: '1rem'}}>
                    <Col xs={12} sm={12} md={{ span: 6, offset: 3 }} lg={{ span: 6, offset: 3 }}>
                        <Article post={post}/>
                    </Col>
                </Row>
            )) : null
    }
}

const mapStateToProps = state => ({
    posts: state.posts
})

export default connect(mapStateToProps, null)(Articles) 

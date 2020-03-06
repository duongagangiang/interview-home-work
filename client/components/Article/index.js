import React from 'react'
import Card from 'react-bootstrap/Card'
import truncate from 'lodash.truncate'
import moment from 'moment'

const Article = ({ post }) => (
    <Card style={{ width: '100%', margin: '0 auto' }}>
        <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Subtitle style={{color: '#ccc'}} >{moment(post.createtedAt).format("DD/MM/YYYY")}</Card.Subtitle>
            <Card.Text>
            {truncate(post.content, {length: 100, separator: /,? +/})}
            </Card.Text>
            <Card.Link href="#">Read more</Card.Link>
        </Card.Body>
    </Card>
)

export default Article

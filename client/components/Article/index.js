import React from 'react'
import {NavLink} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import truncate from 'lodash.truncate'
import moment from 'moment'

const Article = ({ post }) => {
    return (
        <Card style={{ width: '100%', margin: '0 auto' }}>
            <Card.Body>
                <Card.Title>
                    <NavLink to={`/posts/${post.id}`}>{post.title}</NavLink>
                </Card.Title>
                <Card.Subtitle style={{color: '#ccc'}} >{moment(post.createtedAt).format("DD/MM/YYYY")}</Card.Subtitle>
                <Card.Text dangerouslySetInnerHTML={{__html: truncate(post.content, {length: 100, separator: /,? +/})}}/>
            </Card.Body>
        </Card>
    )
}

export default Article
import React, { Component } from 'react';
import Editor from '../Editor';
import { connect } from 'react-redux'
import { createNewPost } from '../../actions/post'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class ArticleCreator extends Component {

    state = {
        title: "",
        text: "",
        tags: ""
    }
    onChange = e => {
        e.preventDefault()
        this.setState({[e.target.name]: e.target.value})
    }

    onChangeEditorListener = (text) => {
        this.setState({text})
    }

    createArticle = (e, push) => {
        e.preventDefault()
        const { title, text, tags } = this.state
        const {userInfo: { data, loading }} = this.props
        let formatTags = tags
        formatTags = (formatTags.trim()).toString().split(',')
        if (!data) {
            push('/sign-in')
        } else {
            const newPost = {
                owner: data.id,
                title,
                content: text,
                tags: formatTags
            }
            this.props.createPost(newPost, push)
        }
    }

    render() {
        const { push } = this.props.history
        return (
            <div className="mt-3">
                <h1>Create New Post</h1>
                <Form.Group controlId="inputTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="title" 
                        placeholder="Title"
                        onChange={this.onChange}
                        maxLength="300"
                    />
                </Form.Group>
                <Form.Group controlId="formBasicTag">
                    <Form.Label>Tag</Form.Label>
                    <Form.Control type="text" placeholder="Tag" name="tags" onChange={this.onChange}/>
                    <Form.Text className="text-muted">
                        You can add multi tags seperate by comma
                    </Form.Text>
                </Form.Group>
                <Editor onTextChange={this.onChangeEditorListener}/>
                <Button variant="primary" className="mt-3" onClick={(e) => this.createArticle(e, push)}>POST</Button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    userInfo: state.userInfo
})

const mapDispatchFromProps = dispatch => ({
    createPost: (post, push) => dispatch(createNewPost(post, push))
})

export default connect(mapStateToProps, mapDispatchFromProps)(ArticleCreator);

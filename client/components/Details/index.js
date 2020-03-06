import React from 'react'
import { connect } from 'react-redux'
import hljs from "highlight.js/lib/highlight"
import 'highlight.js/styles/atom-one-light.css'
import javascript from "highlight.js/lib/languages/javascript"
import python from "highlight.js/lib/languages/python"
import Jumbotron from 'react-bootstrap/Jumbotron'

hljs.registerLanguage("javascript", javascript)
hljs.registerLanguage("python", python)

class Details extends React.Component {

    constructor(props) {
        super(props)
        this.nodeRef = React.createRef()
    } 

    componentDidMount() {
        this.highlight()
    }

    componentDidUpdate() {
        this.highlight();
    }

    highlight = () => {
        if (this.nodeRef) {
            const nodes = this.nodeRef.current.querySelectorAll('pre');
            nodes.forEach((node) => {
                hljs.highlightBlock(node);
            });
        }
    }

    render() {
        console.log(this.props.match.params.id)
        const { posts: { data, loading } } = this.props
        const post = data.filter(p => p.id == this.props.match.params.id)[0]
        let timeCreatedPost = null;
        if (post && post.createdAt) {
            const dt = new Date(post.createdAt)
            timeCreatedPost = `${
                (dt.getMonth()+1).toString().padStart(2, '0')}/${
                dt.getDate().toString().padStart(2, '0')}/${
                dt.getFullYear().toString().padStart(4, '0')} ${
                dt.getHours().toString().padStart(2, '0')}:${
                dt.getMinutes().toString().padStart(2, '0')}:${
                dt.getSeconds().toString().padStart(2, '0')}`
        }
        console.log(timeCreatedPost, post)
        return (
            <div className="post mt-3">
                <Jumbotron>
                    <h1>{post && post.title}</h1>
                    <p style={{fontStyle: 'italic', color: '#777'}}>{timeCreatedPost}</p>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                    <div 
                        ref={this.nodeRef} 
                        dangerouslySetInnerHTML={{__html: post && post.content}}
                    />
                </Jumbotron>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts
})

const mapDispatchFromProps = dispatch => ({
    getPostById: (id) => dispatch(fetchPostById(id))
})

export default connect(mapStateToProps, mapDispatchFromProps)(Details);
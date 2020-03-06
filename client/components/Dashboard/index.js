import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../../actions/post'
import Articles from '../Articles'

class Dashboard extends Component {

    componentDidMount() {
        this.props.getPosts()
    }

    render() {
        return <Articles />
    }
}
const mapDispatchToProps = dispatch => ({
    getPosts: () => dispatch(getPosts())
})

export default connect(null, mapDispatchToProps)(Dashboard)

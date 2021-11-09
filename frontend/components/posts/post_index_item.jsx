import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import { deletePost } from '../../actions/post_actions';

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            drop: false,
            timeAgo: Date.now() - Date.parse(this.props.post.createdAt),
            commentCount: this.props.post.comments,
            likeCount: this.props.post.likes,
        }

        if (this.state.timeAgo < 3600000) {
            setInterval(() => this.setState({ timeAgo: Date.now() - Date.parse(this.props.post.createdAt)}), 60000);
        };

        this.clicked = this.clicked.bind(this);
        this.leave = this.leave.bind(this);
    }

    componentDidMount() {
        const { post, currentUser } = this.props;
    };

    timeFromNow() {
        const { timeAgo } = this.state; 
        if (timeAgo < 60000) {
            return '<1m'; 
        } else if (timeAgo < 3600000) {
            return Math.floor(timeAgo / 60000) + 'm';
        } else if (timeAgo < 86400000) {
            return Math.floor(timeAgo / 3600000) + 'h';
        }else if (timeAgo < 31536000000) {
            return Math.floor(timeAgo / 86400000) + 'd';
        } else {
            return Math.floor(timeAgo / 31536000000) +'y';
        }
    };

    clicked() {
        this.setState({ drop: true });
    };

    leave() {
        this.setState({ drop: false });
    };

    render() {
        
    }
}

const mSTP = ({ entities: { users }, session: { currentUser }}) => ({
    users,
    currentUser
});

const mDTP = dispatch => ({
    deletePost: postId => dispatch(deletePost(postId)),
    openModal: (modal, id) => dispatch(openModal(modal, id)),
    dispatch
});

const PostIndexItemContainer = connect(mSTP, mDTP)(PostIndexItem);
export default PostIndexItemContainer;
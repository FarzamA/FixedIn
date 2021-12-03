import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteComment } from '../../actions/comment_actions';
import { receiveLike, deleteLike } from '../../actions/like';
import { fetchUser } from '../../actions/session_actions';
import { fetchUserLiked, createLike } from '../../util/like_api';
import EditCommentFormContainer from './edit_comment_form';

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            drop: false, 
            edit: false,
            timeAgo: Date.now() - Date.parse(this.props.comment.createdAt),
            likeCount: this.props.comment.likes,
            liked: false,
            like: null
        };

        if (this.state.timeAgo < 3600000) {
            setInterval(() => this.setState({
                timeAgo: Date.now() - Date.parse(this.props.comment.createdAt)
            }), 60000)
        };

        this.clicked = this.clicked.bind(this);
        this.leave = this.leave.bind(this);
        this.openEdit = this.openEdit.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
        this.toggleLike = this.toggleLike.bind(this);
    };

    componentDidMount() {
        const { fetchUserLiked, comment, currentUser } = this.props;

        fetchUserLiked({
            user_id: currentUser,
            likeable_id: comment.id, 
            likeable_type: 'Comment'
        }).then(like => {
            if (like) {
                this.setState({ liked: true });
                this.setState({ like });
                document.getElementsByClassName(`cmt like-btn ${comment.id}`)[0].classList.add('liked');
            }
        })
    };

    timeFromNow() {
        const { timeAgo } = this.state;

        if (timeAgo < 60000) {
          return '<1m';
        } else if (timeAgo < 3600000) {
          return Math.floor(timeAgo / 60000) + 'm';
        } else if (timeAgo < 86400000) {
          return Math.floor(timeAgo / 3600000) + 'h';
        } else if (timeAgo < 31536000000) {
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

    openEdit() {
        this.setState({ edit: true });
    };

    cancelEdit() {
        this.setState({ edit: false });
    };

    toggleLike() {
        const { comment: { id }, currentUser, createLikeAPI, deleteLike, dispatch } = this.props;
    
        if (this.state.liked) {
          deleteLike(this.state.like.id);
          this.setState({ liked: false });
          this.setState({ likeCount: this.state.likeCount - 1 });
          document.getElementsByClassName(`cmt like-btn ${id}`)[0].classList.remove('liked');
        } else {
          const newLike = {
            user_id: currentUser,
            likeable_id: id,
            likeable_type: 'Comment'
          };
    
          createLikeAPI(newLike).then(like => {
            this.setState({ like });
            dispatch(receiveLike(like));
          });
          this.setState({ liked: true });
          this.setState({ likeCount: this.state.likeCount + 1 });
          document.getElementsByClassName(`cmt like-btn ${id}`)[0].classList.add('liked');
        }
    };

    render() {
        const { commenter, currentUser, deleteComment, comment, postId, comment: { id, body, mediaUrl }, incrComCount } = this.props;
        const { drop, edit, likeCount } = this.state;
        const avatar = commenter.avatarUrl || window.defaultUser;

        let dropdown;
        let name;
        let headline;

        if (commenter) {
            name = `${commenter.firstName} ${commenter.lastName}`;
            headline = commenter.headline;

            if (commenter.id == currentUser) {
                dropdown = (
                    <button onFocus={this.clicked} onBlur={this.leave}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Simple_icon_ellipsis.svg" alt="ellipsis"/>
                        <ul className={'cmt-dropdown ' + (drop ? 'reveal' : 'hide')}>
                            <li onClick={this.openEdit}><i className="far fa-edit"></i>Edit</li>
                            <li onClick={() => deleteComment(id)}><i className="far fa-trash-alt"></i>Delete</li>
                        </ul>
                    </button>
                );
            };
        };

        const editForm = edit ? (
            <EditCommentFormContainer cancelEdit={this.cancelEdit} comment={comment} />
        ) : (
            <p>{body}</p>
        );

        const numLikes = likeCount ? (
            <>
                <i className="far fa-thumbs-up small"></i>{likeCount}
            </>
        ) : null;

        
    }
}

const mSTP = ({ entities: { users }, session: { currentUser } }, ownProps) => ({
    commenter: users[ownProps.comment.userId],
    currentUser
});

const mDTP = dispatch => ({
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    fetchUserLiked: userId => fetchUserLiked(userId),
    createLikeAPI: like => createLike(like),
    receiveLike: like => receiveLike(like),
    deleteLike: likeId => dispatch(deleteLike(likeId)),
    dispatch
});

const CommentIndexItemContainer = connect(mSTP, mDTP)(CommentIndexItem);

export default CommentIndexItemContainer;
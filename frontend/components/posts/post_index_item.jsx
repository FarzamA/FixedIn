import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import { deletePost } from '../../actions/post_actions';
import { deleteLike, receiveLike } from '../../actions/like';
import { createLike, fetchUserLiked } from '../../util/like_api';

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            drop: false,
            timeAgo: Date.now() - Date.parse(this.props.post.createdAt),
            commentCount: this.props.post.comments,
            likeCount: this.props.post.likes,
            liked: false,
            like: null,
        };

        if (this.state.timeAgo < 3600000) {
            setInterval(() => this.setState({ timeAgo: Date.now() - Date.parse(this.props.post.createdAt)}), 60000);
        };

        this.clicked = this.clicked.bind(this);
        this.leave = this.leave.bind(this);
        this.toggleLike = this.toggleLike.bind(this);
    }

    componentDidMount() {
        const { fetchUserLiked, post, currentUser } = this.props;

        fetchUserLiked({
            user_id: currentUser,
            likeable_id: post.id,
            likeable_type: 'Post'
        }).then(like => {
            if (like) {
                this.setState({ liked: true });
                this.setState({ like });
                document.getElementsByClassName(`post like-btn ${post.id}`)[0].classList.add('liked');
            }
        })
    };

    timeFromNow() {
        const { timeAgo } = this.state; 
        if (timeAgo < 60000) {
            return '<1m'; 
        } else if (timeAgo < 3600000) {
            return Math.floor(timeAgo / 60000) + 'm ago';
        } else if (timeAgo < 86400000) {
            return Math.floor(timeAgo / 3600000) + 'h ago';
        }else if (timeAgo < 31536000000) {
            return Math.floor(timeAgo / 86400000) + 'd ago';
        } else {
            return Math.floor(timeAgo / 31536000000) +'y ago';
        }
    };

    clicked() {
        this.setState({ drop: true });
        // const ele = document.getElementById('post-dropdown');
        // ele.style.display = 'block';
    };

    leave() {
        this.setState({ drop: false });
        // const ele = document.getElementById('post-dropdown');
        // ele.style.display = 'none';
    };

    toggleLike() {
        const { post: { id }, currentUser, createLikeAPI, deleteLike, dispatch } = this.props;

        if (this.state.liked) {
            deleteLike(this.state.like.id);
            this.setState({ liked: false });
            this.setState({ likeCount: this.state.likeCount - 1 });
            document.getElementsByClassName(`post like-btn ${id}`)[0].classList.remove('liked');
        } else {
            const newLike = {
                user_id: currentUser,
                likeable_id: id,
                likeable_type: 'Post'
            };

            createLikeAPI(newLike).then(like => {
                this.setState({ like });
                dispatch(receiveLike(like));
            });

            this.setState({ liked: true });
            this.setState({ likeCount: this.state.likeCount + 1 });
            document.getElementsByClassName(`post like-btn ${id}`)[0].classList.add('liked');
        }
    }

    render() {
        const {
            currentUser, openModal, deletePost, users, post: { id, body, mediaUrl, userId }  
        } = this.props
        
        const { likeCount, commentCount, drop } = this.state;
        let postUser;
        let name;
        let dropdown;

        if (users[userId]) {
            postUser = users[userId];
            name = postUser.firstName + ' ' + postUser.lastName;

            if ( userId === currentUser) {
                dropdown = (
                    <button onFocus={this.clicked} onBlur={this.leave}>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/d/d9/Simple_icon_ellipsis.svg' className='ellipsis'></img>
                        <ul className={`post-dropdown-${drop ? 'reveal' : 'hide' }`}>
                        {/* <ul className={`post-dropdown-reveal`}> */}
                            <li onClick={() => {openModal('editPost', id); this.leave();}}><i className="far fa-edit"></i>Edit Post</li>
                            <li onClick={() => deletePost(id)}><i className="far fa-trash-alt"></i>Delete Post</li>
                        </ul>
                    </button>
                );
            } 
        } else {
            postUser = { headline: ''}
        }

        const profile = postUser.avatarUrl || window.defaultUser;

        const numComments = commentCount ? `${commentCount} comment${commentCount > 1 ? 's' : ''}` : null;
        const numLikes = likeCount ? (
            <>
            <i className="far fa-thumbs-up small"></i>{likeCount}{numComments ? ' | ' : null}
            </>
        ) : null;

        return (
            <div ref={this.postItemRef} className='post-item'>
                <header>
                    <div>
                        <Link to={`/users/${userId}`}>
                            <div className='avatar'>
                                <img src={profile} className='pfp'></img>
                            </div>
                        </Link>
                    
                        <div>
                            <Link to={`/users/${userId}`}>
                                <p>{name}</p>
                                <p>{postUser.headline}</p>
                                <p>{this.timeFromNow()}</p>
                            </Link>
                        </div>
                    </div>
                    {dropdown}
                </header>
                <p>{body}</p>
                {mediaUrl ? <div className='post-img-cont'><img src={mediaUrl} alr='' className='post-img' /></div> : null}
                <div className='num-lc'>
                    {numLikes} {numComments}
                </div>
                <div className='like-comment'>
                    <button onClick={this.toggleLike} className={'post like-btn ' + id}>
                        <i className="far fa-thumbs-up"></i>Like
                    </button>
                    <button onClick={this.openComments}>
                        <i className="far fa-comment-dots"></i>Comment
                    </button>
                </div>
            </div>
        )
    }
}

const mSTP = ({ entities: { users }, session: { currentUser }}) => ({
    users,
    currentUser
});

const mDTP = dispatch => ({
    deletePost: postId => dispatch(deletePost(postId)),
    openModal: (modal, id) => dispatch(openModal(modal, id)),
    fetchUserLiked: like => fetchUserLiked(like),
    createLikeAPI: like => createLike(like),
    receiveLike: like => receiveLike(like),
    deleteLike: likeId => dispatch(deleteLike(likeId)),
    dispatch
});

const PostIndexItemContainer = connect(mSTP, mDTP)(PostIndexItem);
export default PostIndexItemContainer;
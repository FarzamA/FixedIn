import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUser } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import PostIndexContainer from '../posts/post_index';

class Feed extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.currentUser.id)
    };

    render() {
        const { currentUser, userConnections, openModal } = this.props;
        const { firstName, lastName, headline, avatarUrl, backgroundUrl } = currentUser;

        return (
            <section className='feed-section'>
                <div>
                    {/* Tip: The <aside> content is often placed as a sidebar in a document. -- w3schools */}
                    <aside className='user-sidebar'>
                        <div className='user-sidebar-bg'>
                            <img src={backgroundUrl || window.defaultBg} alt='bg'/>
                        </div>
                        <div className='user-sidebar-info'>
                            <Link to={`/users/${currentUser.id}`}>
                                <div className='user-sidebar-avatar'>
                                    <img src={avatarUrl || window.defaultUser} alt='pfp'/>
                                </div>
                            </Link>
                            <p>{`${firstName} ${lastName}`}</p>
                            <p>{headline}</p>
                        </div>
                        <div className='user-cons-sidebar'>
                            <div>
                                <p>Connections</p>
                                <p className="user-cons-count">{userConnections}</p>
                            </div>
                        </div>
                    </aside>
                </div>
                <section className='posts-section'>
                <div className='start-post'>
                    <Link to={`/users/${currentUser.id}`}>
                    <div className='avatar'>
                        <img src={avatarUrl || window.defaultUser} alt="Profile Pic" className='pfp'/>
                    </div>
                    </Link>
                    <button onClick={() => openModal('createPost')}>Start a post</button>
                </div>
                <div className='feed-div'>
                    <PostIndexContainer/>
                </div>
                
                </section>
            </section>
        )
    }

}

const mSTP = ({ entities: { users }, session: { currentUser, userConnections } }) => ({
    currentUser: users[currentUser],
    userConnections
});

const mDTP = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    openModal: modal => dispatch(openModal(modal))
});

const FeedContainer = connect(mSTP, mDTP)(Feed);

export default FeedContainer;
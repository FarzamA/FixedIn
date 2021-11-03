import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class UserDetail extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {

        // }
    }

    render() {
        const { user, currentUser, match } = this.props;

        if (currentUser == match.params.id) {
            // separated buttons out to deal w click handlers leading to
            // modals later
            editIntroButton = (
              <button className='edit-intro-btn'>
                <i className="fas fa-pencil-alt"></i>
              </button>
            );

            editSectionButton = (
                <button className='pf-edit-btn'>Edit section 
                    <ul className={`pf-edit-drp ${'reveal'}`}>
                        <li>Intro</li>
                        <li>Experiences</li>
                        <li>Education</li>
                    </ul>
                </button>
            );

            avatarButton = (
                <button className='upload-av-btn'>
                    <i className='fas fa=camera-retro'></i>
                </button>
            );

            backgroundButton = (
                <button className='upload-bg-button'>
                    <i className='fas fa-camera-retro'></i>
                </button>
            )
        };

        return (
            <>
                <div className='user-profile-container'>
                    <div className='user-bg-img'>
                        <img alt='Background Picture' />
                        {backgroundButton}
                    </div>
                    <div className='user-details'>
                        <div className='profile-user-info'>
                            <div className='profile-avatar-container'>
                                <div className='avatar'>
                                    <img alt='Profile Pic' />
                                </div>
                                {avatarButton}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


const mSTP = ({ entities: { users }, session: { currentUser }}, ownProps) => {
    const user = users[ownProps.match.params.id];

    return {
        currentUser,
        user,
    };
};

const mDTP = dispatch => ({

}) ;

const UserDetailContainer = withRouter(connect(mSTP, mDTP)(UserDetail));
export default UserDetailContainer
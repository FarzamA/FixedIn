import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

class UserDetail extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     dropDown: false
        //     // leave: false 
        // }

        this.handleClick = this.handleClick.bind(this);
        this.leave = this.leave.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        const ele = $('.pf-edit-drp');
        // console.log(ele);
        ele[0].style.display = 'block';
        // this.setState({ dropDown: true })

        const button = $('.pf-edit-btn');
        
        // console.log(button[0].style);
        button[0].style.background = '#d8d8d8';
        setTimeout(() => {
            button[0].style.boxShadow = 'inset 0 0 0 2px rgba(0,0,0,0.6)';
            button[0].style.transition = '0.3s';
        }, 100)

    }

    leave() {
        const ele = $('.pf-edit-drp');
        // console.log(ele);
        const button = $('.pf-edit-btn');
        setTimeout(() =>{
            button[0].style.boxShadow = '';
            button[0].style.background = '#eeeeee'
            ele[0].style.display = 'none';
            // this.setState({ dropDown: false });
        }, 100)
    }

    render() {
        // debugger
        const { user, currentUser, match, lastExperience, lastEducation, openModal } = this.props;

        let editIntroButton;
        let editSectionButton;
        // let avatarButton;
        let backgroundButton;
        // == converts variables to same type b4 conversion === does not do this
        if (currentUser == match.params.id) {
            // separated buttons out to deal w click handlers leading to
            // modals later
            editIntroButton = (
              <button className='edit-intro-btn'>
                <i className="fas fa-pencil-alt"></i>
              </button>
            );

            editSectionButton = (
                <div className='dropdown'>
                    <button onFocus={this.handleClick} onBlur={this.leave} className='pf-edit-btn' >Edit section</button> 
                        <ul className={`pf-edit-drp`}>
                            <li >Intro</li>
                            <li >Experiences</li>
                            <li >Education</li>
                        </ul>
                </div>
                
            );

            // avatarButton = (
            //     <button onClick={() => openModal('uploadAvatar')} className='upload-av-btn'>
            //         <i className='fas fa-camera-retro'></i>
            //     </button>
            // );

            backgroundButton = (
                <button onClick={() => openModal('uploadBackground')} className='upload-bg-button'>
                    <i className='fas fa-camera-retro'></i>
                </button>
            )
        };

        // console.log(user);

        return (
            <>
                <div className='user-profile-container'>
                    <div className='user-bg-img'>
                        <img src={user.backgroundUrl || window.defaultBg} alt='Background Picture' />
                        {backgroundButton}
                    </div>
                    <div className='user-details'>
                        <div className='profile-user-info'>
                            <div className='profile-avatar-container'>
                                <div className='avatar'>
                                    <img onClick={() => currentUser == match.params.id ? openModal('uploadAvatar') : null} src={user.avatarUrl || window.defaultUser} alt='Profile Pic' />

                                </div>
                                {/* {avatarButton} */}
                            </div>
                            <div>
                                <h1>{`${user.firstName} ${user.lastName}`}</h1>
                            </div>
                            <div>
                                <h2>{user.headline}</h2>
                            </div>
                            <div>
                                <h3>{user.location}</h3>
                            </div>
                            <div>
                                <span>{user.connections} connection{user.connections > 1 || user.connections == 0 ? 's' : ''}</span>
                            </div>
                            <div className='user-details-buttons'>
                                {editSectionButton}
                            </div>
                        </div>
                            <div className='pf-user-history'>
                                {/* will pass in lastExperience and lastEducation props from the profile */}
                                <p>{lastExperience ? lastExperience.company : null }</p>
                                <p>{lastEducation ? lastEducation.school : null }</p>
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
    openModal: (modal, id) => dispatch(openModal(modal, id)),
    dispatch
});

const UserDetailContainer = withRouter(connect(mSTP, mDTP)(UserDetail));
export default UserDetailContainer
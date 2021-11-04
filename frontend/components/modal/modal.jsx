import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import UploadAvatarContainer from '../profile/upload_avatar_container';

const Modal = ({ modal, closeModal }) => {
    if (!modal) return null;
    let component;

    switch(modal) {
        case 'uploadAvatar':
            // debugger
            component = <UploadAvatarContainer closeModal={closeModal}/>;
            break;
        default:
            return null;
    }

    return (
        <div className='modal-bg' onClick={closeModal}>
            <div className='modal-comp' onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )
}


const mSTP = ({ ui: { modal }}) => ({
    modal 
});

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

const ModalContainer = connect(mSTP, mDTP)(Modal);

export default ModalContainer;
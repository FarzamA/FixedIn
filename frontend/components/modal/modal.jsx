import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';

const Modal = ({ modal }) => {
    if (!modal) return null;
    let component;

    switch(modal) {
        case 'uploadAvatar':
            component = <UploadAvatarContainer closeModal={closeModal}/>;
            break;
        default:
            return null;
    }
}


const mSTP = ({ ui: { modal }}) => ({
    modal 
});

const mDTP = dispatch => ({

});

const ModelContainer = connect(mSTP, mDTP)(Modal);
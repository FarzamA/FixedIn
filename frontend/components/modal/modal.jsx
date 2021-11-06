import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import UploadAvatarContainer from '../profile/upload_avatar_container';
import UploadBackgroundContainer from '../profile/upload_bg_container';
import CreateEducationForm from '../education/create_education_form';
import EditEducationForm from '../education/edit_education_form';

const Modal = ({ modal, closeModal }) => {
    if (!modal) return null;
    let component;

    switch(modal) {
        case 'uploadAvatar':
            // debugger
            component = <UploadAvatarContainer closeModal={closeModal}/>;
            break;
        case 'uploadBackground':
            component = <UploadBackgroundContainer closeModal={closeModal}/>;
            //always remember to break in case statements or it breaks your code ha ha ha
            break;
        case 'createEdu':
            component = <CreateEducationForm closeModal={closeModal}/>
            break;
        case 'editEdu':
            console.log('editing modal')
            component = <EditEducationForm closeModal={closeModal} />
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
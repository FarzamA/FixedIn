import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal';
import { updateUserImg } from '../../actions/session_actions';
import UploadPictureForm from './upload_picture_form';

const mSTP = ({ entities: { users }, session: { currentUser }}) => ({
    user: users[currentUser],
    formType: 'Change profile picture',
    imageType: 'avatar',
    imageUrl: 'avatarUrl'
});

const mDTP = dispatch => ({
    updateUserImg: (formData, id) => dispatch(updateUserImg(formData, id)),
    closeModal: () => dispatch(closeModal())
});

const UploadAvatarContainer = connect(mSTP, mDTP)(UploadPictureForm);
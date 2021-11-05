import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { updateUserImg } from '../../actions/session_actions';
import UploadPictureForm from './upload_picture_form';

const mSTP = ({ entities: { users }, session: { currentUser }}) => ({
    user: users[currentUser],
    formType: 'Change background picture',
    imageType: 'background',
    imageUrl: 'backgroundUrl'
});

const mDTP = dispatch => ({
    updateUserImg: (formData, id) => dispatch(updateUserImg(formData, id)),
    closeModal: () => dispatch(closeModal())
});

const UploadBackgroundContainer = connect(mSTP, mDTP)(UploadPictureForm);

export default UploadBackgroundContainer;
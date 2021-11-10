import { connect } from "react-redux";
import { createPost } from "../../actions/post_actions";
import PostForm from './post_form';

const mSTP = ({ entities: { users }, session: { currentUser }}) => {
    const user = users[currentUser];

    return {
        post: {
            body: '',
            media: null,
            mediaUrl: null,
            userId: currentUser
        },

        formType: 'Create a post',
        name: `${user.firstName} ${user.lastName}`,
        user
    }
};

const mDTP = dispatch => ({
    processForm: post => dispatch(createPost(post))
});

const CreatePostForm = connect(mSTP, mDTP)(PostForm);
export default CreatePostForm;
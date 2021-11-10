import { connect } from 'react-redux';
import { fetchPost, updatePost } from '../../actions/post_actions';
import PostForm from './post_form';

const mSTP = ({ entities: { posts, users}, session: { currentUser }, ui: { filter }}) => {
    const user = users[currentUser];

    return {
        user, 
        name: `${user.firstName} ${user.lastName}`,
        post: posts[filter],
        formType: 'Edit post'
    }
};

const mDTP = dispatch => ({
    fetchPost: postId => dispatch(fetchPost(postId)),
    processForm: post => dispatch(updatePost(post))
});

const EditPostForm = connect(mSTP, mDTP)(PostForm);

export default EditPostForm;
import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';
import CommentForm from './comment_form';

const mapSTP = ({ entities: { users }, session: { currentUser }}) => ({
  user: users[currentUser],
  currentUser,
  formMsg: 'Add a comment...',
  formType: 'cmt'
});

const mapDTP = dispatch => ({
  createComment: comment => dispatch(createComment(comment))
});

const CreateCommentForm = connect(mapSTP, mapDTP)(CommentForm);

export default CreateCommentForm;
import React from "react";
import { connect } from "react-redux";
import { updateComment } from "../../actions/comment_actions";

class EditCommentForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.comment;
        

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.ensureChange = this.ensureChange.bind(this);
    }

    handleInput(e) {
        this.setState({ body: e.target.value });
    }

    handleSubmit() {
        const formData = new FormData();
        if (this.state.media) formData.append('comment[media]', this.state.media);
        
        formData.append('comment[id]', this.state.id);
        formData.append('comment[body]', this.state.body);
        formData.append('comment[user_id]', this.state.userId);

        this.props.updateComment(formData);

        this.setState({
            body: '',
            media: null,
            mediaUrl: null
        });
        this.props.cancelEdit(); 
    }

    ensureChange() {
        return this.state == this.originalComment;
    }

    render() {
        return(
            <div className='edit'>
                <input type='text' value={this.state.body} onChange={this.handleInput} />
                <p className='edit-cmt-btns'>
                    <button className='save-cmt-edit' onClick={this.handleSubmit} disabled={this.ensureChange()} >Save Changes</button>
                    <button className='cancel-cmt-edit' onClick={this.props.cancelEdit}>Cancel</button>
                </p>
            </div>
        )
    }
};

const mDTP = dispatch => ({
    updateComment: comment => dispatch(updateComment(comment))
});

const EditCommentFormContainer = connect(null, mDTP)(EditCommentForm);
export default EditCommentFormContainer;
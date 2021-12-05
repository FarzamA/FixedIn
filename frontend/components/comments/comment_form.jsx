import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: "",
      media: null,
      mediaUrl: null
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.removeFile = this.removeFile.bind(this);
    this.postComment = this.postComment.bind(this);
    this.openFileLoader = this.openFileLoader.bind(this);
  }

  handleInput(e) {
    this.setState({ body: e.target.value });
  }

  handleFile(e) {
    const { formType, postId } = this.props;

    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({ media: file, mediaUrl: fileReader.result });
      document.getElementById(`${formType}-cmt-img-${postId}`).style.display = 'flex';
      document.getElementById(`${formType}-cmt-img-${postId}`).style.justifyContent = 'center';
    }

    if (file) fileReader.readAsDataURL(file); 
  }

  openFileLoader() {
    const { formType, postId, } = this.props;

    document.getElementById(`${formType}-media-input-${postId}`).click();
  }

  removeFile() {
    const { formType, postId, } = this.props;

    this.setState({
      media: null,
      mediaUrl: null
    });
    document.getElementById(`${formType}-media-input-${postId}`).value = null;
    document.getElementById(`${formType}-cmt-img-${postId}`).style.display = 'none';
  }

  ensureContent() {
    const { media, body } = this.state;

    if (media || body.length) {
      return true;
    } else {
      return false
    }
  }

  postComment() {
    const { 
      currentUser, postId,  createComment, incrComCount, formType
    } = this.props;

    const formData = new FormData();
    if (this.state.media) {
      formData.append('comment[media]', this.state.media);
    }
    formData.append('comment[body]', this.state.body);
    formData.append('comment[user_id]', currentUser);
    formData.append('comment[post_id]', postId);
    
    createComment(formData);
    this.setState({
      body: "",
      media: null,
      mediaUrl: null
    });
    document.getElementById(`${formType}-media-input-${postId}`).value = "";
    document.getElementById(`${formType}-cmt-img-${postId}`).style.display = 'none';
    incrComCount();
  }
  
  render() {
    const { user, formMsg, postId, formType, } = this.props;

    const preview = this.state.mediaUrl ? <img src={this.state.mediaUrl}/> : null;
    const closeImageBtn = this.state.media ? (
      <span className='rm-cmt-img' onClick={this.removeFile}>✕</span>
    ) : null;

    return (
      <div className='cmt-form-section'>
        <div className='avatar small'>
          <img src={user.avatarUrl || window.defaultUser} alt="Profile Pic" className='pfp small'/>
        </div>
        <div className='cmt-form-ctnr'>
          <div className='comment-form'>
            <div className='cmt-input-div'>
              <input type="text" placeholder={formMsg} 
              value={this.state.body} onChange={this.handleInput}/>
              {this.state.media ? null : <i className="far fa-image cmt" onClick={this.openFileLoader}></i>}
              <input type="file" id={`${formType}-media-input-${postId}`} accept='image/*' onChange={this.handleFile}/>
            </div>
            <div className='cmt-img-preview'>
              <div id={`${formType}-cmt-img-${postId}`}>
                {closeImageBtn}
                {preview}
              </div>
            </div>
          </div>
          {this.ensureContent() ? <div><button className='post-cmt-btn' onClick={this.postComment}>Post</button></div> : null}
        </div>
      </div>
    )
  }
};

export default CommentForm;
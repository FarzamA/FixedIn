import React from 'react';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props)
        this.state = this.props.post;

        this.removeFile = this.removeFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.openFileLoader = this.openFileLoader.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.ensureContent = this.ensureContent.bind(this);
    }

    removeFile() {
        this.setState({
            media: null,
            mediaUrl: null
        })

        document.getElementById('post-media').value = null;


        //come back to this later for styling

        // const postBodies = document.getElementsByClassName('post-body');

        // for (let i = 0; i < postBodies.length; i++) {
        //     postBodies[i].style.overflow
        // }
    }

    

    handleInput(e) {
        this.setState({ body: e.target.value });
    };

    openFileLoader(){
        // document.getElementById('post-media').click();
        this.modalSwitch(); 
    };

    modalSwitch() {
        $('.post-media-modal').css('display', 'block');
        $('.post-form-modal').css('display', 'none');
    };

    modalSwitchBack() {
        $('.post-media-modal').css('display', 'none');
        $('.post-form-modal').css('display', 'block');
    }

    handleFile(e) {
        const file = e.target.files[0];
        const fileReader = new FileReader();
        
        fileReader.onloadend = () => {
            // debugger
            this.setState({ media: file, mediaUrl: fileReader.result });
            // const postBodies = document.getElementsByClassName('post-body');

            // for (let i = 0; i < postBodies.length; i++) {
            //     postBodies[i].style.overflowY = 'scroll';
            //     postBodies[i].style.height = '400px';
            // }
        };

        if (file) {
            fileReader.readAsDataURL(file)
        };
    };

    ensureContent() {
        const { body, media } = this.state; 

        if (body.length || media) {
            return false; 
        } else {
            return true;
        }
    };

    handleSubmit(e) {
        e.preventDefault();

        let formData = new FormData();
        // formData.append('post', this.state);
        // debugger
        if (this.state.media) {
            formData.append('post[media]', this.state.media)
        };

        if (this.state.id) {
            formData.append('post[id]', this.state.id);
        };

        formData.append('post[body]', this.state.body);
        formData.append('post[user_id]', this.state.userId);
        // formData.append('post', this.state);
        // console.log(this.state);
        this.props.processForm(formData);

        this.setState({ 
            body: "",
            media: null,
            mediaUrl: null
        });

        document.getElementById('post-media').value = '';
        this.props.closeModal();
    };

    render() {
        const preview = (voidPic) => this.state.mediaUrl ? <img src={this.state.mediaUrl} /> : voidPic;

        const selectMedia = (
            <span onClick={() => document.getElementById('post-media').click()}>Select images to share</span>
        );

        const closeImageButton = (
            this.state.media ? <span className='remove-img-btn' onClick={this.removeFile}>✕</span> : null
        );

        return (
            <>
                <div className='modal post-form-modal'>
                    <header>
                        <h2>{this.props.formType}</h2>
                        <span className='close-modal-button' onClick={() => this.props.closeModal()}>✕</span>
                    </header>
                    <form onSubmit={this.handleSubmit} className='post-form'>
                        <div className='post-body'>
                            <div>
                                <div className='avatar'>
                                    <img src={this.props.user.avatarUrl || window.defaultUser} alt='profile pic' />
                                </div>
                                <h2>{this.props.name}</h2>
                            </div>
                            <div className='textarea'>
                                <textarea placeholder='What do you want to talk about?' value={this.state.body} onChange={this.handleInput} ></textarea>
                            </div>
                            <div className='image-body'>
                                {closeImageButton}
                                {preview(null)}
                            </div>
                        </div>
                        <footer className='post-form-footer'>
                            <i className="far fa-image" onClick={this.openFileLoader}></i>
                            <input type="file" id='post-media' accept='image/*' onChange={this.handleFile}/>
                            <button className='form-button' disabled={this.ensureContent()}>Post</button>
                        </footer>
                    </form>
                </div>
                <div className='modal post-media-modal'>
                    <header>
                        <h2>Edit your photo</h2>
                        <span className='close-modal-button' onClick={this.modalSwitchBack()}>✕</span>
                    </header>
                    <div className='post-body image-body'>
                        {preview(selectMedia)}
                    </div>
                    <footer>
                        <div>
                            <button className='back-btn' onClick={() => this.removeFile}>Back</button>
                            <button className='done-btn' onClick={this.modalSwitchBack()}>Done</button>
                        </div>
                    </footer>
                </div>
            </>
        )
    }
};

export default PostForm;
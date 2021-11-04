import React from 'react';

class UploadPictureForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            avatar: '',
            avatarUrl: '',
            bg: '',
            bgUrl: ''
        };

        this.removeFile = this.removeFile.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    removeFile() {
        const { imageType, imageUrl } = this.props;

        this.setState({
            [imageType]: null,
            [imageUrl]: null
        })
    };

    handleFile(e) {
        const file = e.target.files[0];
        // debugger
        const { imageType, imageUrl } = this.props;

        const fileReader = new FileReader();

        fileReader.onloadend = () => {
            this.setState({ [imageType]: file, [imageUrl]: fileReader.result })
        };

        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit() {
        const { imageType, imageUrl, updateUserImg, closeModal, user } = this.props;
        let formData = new FormData();



        formData.append(`user[${imageType}]`, this.state[imageType]);

        debugger
        updateUserImg(formData, user.id);

        this.setState({
            [imageType]: null,
            [imageUrl]: null
        });
        document.getElementById('image-input').value = "";
        closeModal();
    }

    render() {
        const { formType, imageUrl, imageType } = this.props;

        const preview = this.state[imageType] ? (
            <img src={this.state[imageUrl]} alt={imageType} />
        ) : (
            <span id="image-input-btn" onClick={() => document.getElementById('image-input').click()}>Select an image</span>
        )

        const deleteButton = this.state[imageType] ? (
            <button onClick={this.removeFile}>Cancel</button>
        ) : null;

        return (
            <div className='modal upload-image'>
                <header>{formType}</header>
                <div className='upload-img-body'>
                    {preview}
                </div>
                <footer>
                    <input type='file' id='image-input' accept='' onChange={this.handleFile}></input>
                    <button onClick={this.handleSubmit}>Save</button>
                    {deleteButton}
                </footer>
            </div>
        )
    }
};

export default UploadPictureForm;
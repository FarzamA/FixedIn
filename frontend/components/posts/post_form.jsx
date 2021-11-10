import React from 'react';

class PostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.post
    }
};

export default PostForm;
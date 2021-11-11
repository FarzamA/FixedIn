import React from 'react';
import { connect } from 'react-redux';
import { receivePosts } from '../../actions/post_actions';
import { fetchPosts } from '../../util/post_api';
import PostIndexItemContainer from './post_index_item'

class PostIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            offset: 0,
            morePosts: true,
            loading: false 
        };

        this.observer = React.createRef();
        this.lastPostRef = node => {
            this.observer.current = new IntersectionObserver(entries => {
                // console.log(entries);
                if (entries[0].isIntersecting && this.state.morePosts) {
                    console.log(this.state.morePosts, 'morePosts');
                    // deal w loading bar later
                    this.setState({ loading: true }, () => {

                        this.incrementOffset();
                        props.fetchPostsAPI(this.state.offset + 1).then(posts => {
                            props.dispatch(receivePosts(posts));

                            console.log(posts.posts);
                            // magic number here pay attention
                            if (Object.values(posts.posts).length < 10) {
                                 this.setState({ morePosts: false })
                            };

                            this.setState({ loading: false });
                        });
                    });
                };
            });

            if (node) this.observer.current.observe(node);
        }

        this.incrementOffset = this.incrementOffset.bind(this);
    };

    componentDidMount() {
        this.props.fetchPostsAPI(this.state.offset).then(posts => dispatch(receivePosts(posts)));
    }

    incrementOffset() {
        console.log('incremented');
        this.setState({ offset: (this.state.offset + 1) });
        console.log(this.state.offset, 'offset');

    }

    render() {
        const { posts } = this.props;

        return (
            <ul className='posts-index'>
                {posts.map((post, idx) => {
                    if (idx + 1 === posts.length) {
                        // console.log('post', post);
                        // console.log('post id', post.id);
                        return (
                            <div  key={idx}>
                                <PostIndexItemContainer key={`${post.id}`} post={post} />
                                <div ref={this.lastPostRef}></div>
                            </div>
                        )
                    } else {
                        return (
                        <div key={idx}>
                            <PostIndexItemContainer key={`${post.id}`} post={post}/>
                            {/* <div ref={this.lastPostRef}></div> */}
                        </div>)
                    }
                })}
            </ul>
        )
    }
}

const mSTP = ({ entities: { posts }}) => ({
    posts: Object.values(posts).sort((a, b) => Date.parse(a.createdAt) > Date.parse(b.createdAt) ? -1 : 1)
});

const mDTP = dispatch => ({
    fetchPostsAPI: offset => fetchPosts(offset),
    receivePosts: posts => receivePosts(posts),
    dispatch
});

const PostIndexContainer = connect(mSTP, mDTP)(PostIndex);

export default PostIndexContainer;
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
                if (entries[0].isIntersecting && this.state.morePosts) {
                    this.setState({ loading: true }), () => {

                        this.incrementOffset();
                        props.fetchPostsAPI(this.state.offset + 1).then(posts => {
                            props.dispatch(receivePosts(posts));
                            // magic number here pay attention
                            if (Object.values(posts).length < 4) this.setState({ morePosts: false });
                            this.setState({ leading: false });
                        })
                    }
                }
            });

            if (node) this.observer.current.observe(node);
        }

        this.incrementOffset = this.incrementOffset.bind(this);
    };

    componentDidMount() {
        this.props.fetchPostsAPI(this.state.offset).then(posts => dispatch(receivePosts(posts)));
    }

    incrementOffset() {
        this.setState({ offset: this.state.offset + 1 });
    }

    render() {
        const { posts } = this.props;

        return (
            <ul className='posts-index'>
                {posts.map((post, idx) => {
                    // return (<PostIndexItemContainer key={`${post.id}`} post={post} />);
                    if (idx + 1 === posts.length) {
                        // console.log('post', post);
                        // console.log('post id', post.id);
                        return (
                            <div key={idx}>
                                <PostIndexItemContainer key={`${post.id}`} post={post} />
                                <div ref={this.lastPostRef}></div>
                                {/* {this.state.loading ? (
                                    <div className='loading'>
                                        <div className="lds-spinner">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                    </div>
                                ) : null} */}
                            </div>
                        )
                    } else {
                        // console.log('post2', post);
                        // console.log('post2 id', post.id);
                        return (
                        <div key={idx}>
                            <PostIndexItemContainer key={`${post.id}`} post={post}/>
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
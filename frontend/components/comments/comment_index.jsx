import React from 'react';
import { connect } from 'react-redux';
import { fetchCommentCount } from '../../util/comment_api';
import { fetchTwoComments, fetchMoreComments } from '../../actions/comment_actions';
import CommentIndexItemContainer from './comment_index_item';

class CommentIndex extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        offset: 0,
        allComments: true,
        commentNum: null
      };
  
      this.loadMoreComments = this.loadMoreComments.bind(this);
    }
  
    componentDidMount() {
      const { fetchTwoComments, fetchCommentCount, postId } = this.props;
  
      fetchTwoComments(postId);
  
      fetchCommentCount(postId).then(count => { 
        this.setState({ commentNum: count });
        if (count > 2) this.setState({ allComments: false })
      });
    }
  
    loadMoreComments() {
      const { fetchMoreComments, postId, comments } = this.props;
  
      fetchMoreComments(postId, this.state.offset);
      this.setState({ offset: this.state.offset + 1 });
  
      if (this.state.commentNum <= comments.length + 10) {
        this.setState({ allComments: true });
      }
    }
  
    render() {
      const moreCommentsBtn = this.state.allComments ? null : (
        <button className='more-cmts' onClick={this.loadMoreComments}>Load more comments</button>
      );
      
      return (
        <>
          <ul className='comments-index'>
            {this.props.comments.map(comment => (
              <CommentIndexItemContainer key={comment.id} 
                                         comment={comment} 
                                         postId={this.props.postId} 
                                         incrComCount={this.props.incrComCount}/>
            ))}
          </ul>
          {moreCommentsBtn}
        </>
      )
    }
  }
  
const mapSTP = ({ entities: { comments } }, ownProps) => {
    const commentsArr = Object.values(comments)
                                .filter(comment => (comment.postId == ownProps.postId))
                                .sort((a, b) => a.createdAt > b.createdAt ? -1 : 1)

    return {
        comments: commentsArr
    }
};
  
const mapDTP = dispatch => ({
    fetchTwoComments: postId => dispatch(fetchTwoComments(postId)),
    fetchMoreComments: (postId, offset) => dispatch(fetchMoreComments(postId, offset)),
    fetchCommentCount: postId => fetchCommentCount(postId)
});
  
const CommentIndexContainer = connect(mapSTP, mapDTP)(CommentIndex)
  
export default CommentIndexContainer;
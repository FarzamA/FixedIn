export const fetchTwoComments = post_id => (
    $.ajax({
      url: '/api/comments',
      data: { 
        type: 'comment button',
        post_id
      }
    })
);

export const fetchMoreComments = (post_id, offset) => (
    $.ajax({
      url: '/api/comments',
      data: { 
        type: 'more comments',
        post_id,
        offset
      }
    })
);

export const createComment = formData => (
    $.ajax({
      method: 'POST',
      url: '/api/comments',
      data: formData,
      contentType: false,
      processData: false
    })
);

export const updateComment = formData => (
    $.ajax({
        method: 'PATCH',
        url: `/api/comments/${formData.get('comment[id]')}`,
        data: formData,
        contentType: false,
        processData: false
    })
);

export const deleteComment = commentId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/comments/${commentId}`
    })
);

export const fetchCommentCount = post_id => (
    $.ajax({
        url: '/api/comments/comment_count',
        data: { post_id }
    })
)
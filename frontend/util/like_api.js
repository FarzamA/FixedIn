export const fetchUserLiked = like => (
    $.ajax({
      url: '/api/likes/user_liked',
      data: { like }
    })
  )
  
export const createLike = like => (
    $.ajax({
        method: 'POST',
        url: '/api/likes',
        data: { like }
    })
);

export const deleteLike = likeId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/likes/${likeId}`
    })
);
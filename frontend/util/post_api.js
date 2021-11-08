export const fetchPosts = (offset) => (
    $.ajax({
        url: `/api/posts`,
        data: { offset }
    })
);

export const fetchPost = postId => (
    $.ajax({
        url: `/api/posts/${postId}`
    })
);

export const createPost = formData => (
    $.ajax({
        method: 'POST',
        url: `/api/posts`,
        data: formData,
        connectType: false,
        processData: false 
    })
);

export const updatePost = formData => (
    $.ajax({
        method: 'PATCH',
        url: `/api/posts/${formData.get('post[id]')}`,
        data: formData, 
        contentType: false
    })
)
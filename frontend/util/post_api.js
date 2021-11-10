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

export const createPost = formData => {
    for(let pair of formData.entries()) {
        console.log(pair[0]+ ', '+ pair[1]);
    }

    // const post = {
    //     body: formData.get('post[body]'),
    //     user_id: formData.get('post[user_id]')
    // }
    return $.ajax({
        method: 'POST',
        url: `/api/posts`,
        data: formData,
        contentType: false,
        processData: false 
    })
};

export const updatePost = formData => (
    $.ajax({
        method: 'PATCH',
        url: `/api/posts/${formData.get('post[id]')}`,
        data: formData, 
        contentType: false,
        processData: false
    })
);

export const deletePost = postId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/posts/${postId}`
    })
);
export const searchUsers = query => (
    $.ajax({
        url: '/api/users',
        data: { query }
    })
);

export const fetchUser = userId => (
    $.ajax({
        url: `/api/users/${userId}`
    })
);

export const createUser = user => (
    $.ajax({
        method: 'POST',
        url: `/api/users`,
        data: { user }
    })
);

export const updateUser = user => (
    $.ajax({
        method: 'PATCH',
        url: `/api/users/${user.id}`,
        data:  { user }
    })
);

export const updateUserImg = (formData, id) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/users/${id}`,
        data: formData,
        contentType: false,
        processData: false
    })
)

export const loginUser = user => (
    $.ajax({
        method: 'POST',
        url: '/api/session',
        data: { user }
    })
);

export const logoutUser = () => (
    $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
);

export const checkEmail = user => (
    $.ajax({
        url: `api/users/email`,
        data: { user }
    })
)
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
        URL: '/api/session'
    })
);

export const checkEmail = user => (
    $.ajax({
        url: `api/users/email`,
        data: { user }
    })
)
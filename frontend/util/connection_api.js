export const fetchConnections = () => (
    $.ajax({
        url: '/api/connections'
    })
);

export const fetchConnection = (connector_id, connectee_id) => (
    $.ajax({
        url: `/api/connections/connected`,
        data: {
            connector_id,
            connectee_id
        }
    })
);

export const createConnection = connection => (
    $.ajax({
        method: `POST`,
        url: `/api/connections`,
        data: { connection }
    })
);

export const updateConnection = connection => (
    $.ajax({
        method: `PATCH`,
        url: `/api/connection.${connection.id}`,
        data: { connection }
    })
);

export const deleteConnection = connectionId => (
    $.ajax({
        method: `DELETE`,
        url: `/api/connections/${connectionId}`
    })
);
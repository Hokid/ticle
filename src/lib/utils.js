export function isObject(value) {
    return typeof value === 'object' && value !== null;
}

export function createRequest(action, id, args) {
    return {
        action,
        data: {
            ...args, id
        }
    };
}

export function createResponse(action, id, args) {
    return {
        action,
        data: {
            ...args, id
        }
    };
}

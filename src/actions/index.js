export const increment = nr => {
    return{
        type: 'INCREMENT',
        payload: nr
    };
};
export const decrement = nr => {
    return{
        type: 'DECREMENT',
        payload: nr
    };
};
export const logToggle = () => {
    return{
        type: 'SIGN_IN'
    }
};
export const assignUsers = data => {
    return{
        type: 'ASSIGN_USERS',
        payload: data
    }
};
export const assignTrails = data => {
    return{
        type: 'ASSIGN_TRAILS',
        payload: data
    }
};
export const SET_USER = 'SET_USER';
export const SET_ROLES = 'SET_ROLES';
export const SET_THEME = 'SET_THEME';
export const SET_LANGUAGE = 'SET_LANGUAGE';

export const setUser = (user) => ({
    type: 'SET_USER',
    payload: user,
});

export const setRoles = (roles) => ({
    type: 'SET_ROLES',
    payload: roles,
});

export const setTheme = (theme) => ({
    type: 'SET_THEME',
    payload: theme,
});

export const setLanguage = (language) => ({
    type: 'SET_LANGUAGE',
    payload: language,
});

export const fetchRoles = () => {

    return async (dispatch, getState) => {
        const roles = getState().client.roles;
        if (roles.length === 0) {
            try {
                const res = await fetch('https://workintech-fe-ecommerce.onrender.com/roles');
                if (!res.ok) throw new Error('Roles fetch failed');
                const data = await res.json();
                dispatch(setRoles(data));
            } catch (err) {
                console.error('Error fetching roles:', err);
            }
        }
    };
};
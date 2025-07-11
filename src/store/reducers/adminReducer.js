import actionTypes from '../actions/actionTypes';

const initialState = {
    users: [],
    isLoadingGender: false,
    genders: [],
    roles: [],
    positions: [],
    topDoctors: [],
    allDoctors: []

}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            let copyState = { ...state };
            copyState.isLoadingGender = true;
            return {
                ...copyState
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            state.genders = action.data;
            state.isLoadingGender = false;
            return {
                ...state
            }
        case actionTypes.FETCH_GENDER_FAIDlED:
            state.isLoadingGender = false;
            state.genders = [];
            return {
                ...state
            }
        case actionTypes.FETCH_POSITION_SUCCESS:
            state.positions = action.data;
            return {
                ...state
            }
        case actionTypes.FETCH_POSITION_FAIlDED:
            state.genders = [];
            return {
                ...state
            }
        case actionTypes.FETCH_ROLE_SUCCESS:
            state.roles = action.data;
            return {
                ...state
            }
        case actionTypes.FETCH_ROLE_FAIlDED:
            state.roles = action.data;
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_USERS_SUCCESS:
            state.users = action.users;
            return {
                ...state,
                // users: action.users,
            }
        case actionTypes.FETCH_ALL_USERS_FAILED:
            state.users = [];
            return {
                ...state
            }
        case actionTypes.FETCH_TOP_DOCTORS_SUCCESS:
            state.topDoctors = action.dataDoctors;
            return {
                ...state
            }
        case actionTypes.FETCH_TOP_DOCTORS_FAILDED:
            state.topDoctors = [];
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_DOCTORS_SUCCESS:
            state.allDoctors = action.dataDr;
            return {
                ...state
            }
        case actionTypes.FETCH_All_DOCTORS_FAILDED:
            state.allDoctors = [];
            return {
                ...state
            }
        default:
            return state;
    }
}

export default adminReducer;
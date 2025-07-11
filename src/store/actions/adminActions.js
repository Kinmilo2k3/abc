import actionTypes from "./actionTypes";
import {
      getAllCodeService, createNewUserService,
      getAllUser, deleteUserService, editUserService,
      getTopDoctorHomeService, getAllDoctors, saveDetailDoctorService
} from "../../services/userService";
import { toast } from "react-toastify";

export const fetchGenderStart = () => {
      return async (dispatch, getState) => {
            try {
                  dispatch({ type: actionTypes.FETCH_GENDER_START })
                  let res = await getAllCodeService("GENDER");
                  if (res && res.errCode === 0) {
                        dispatch(fetchGenderSuccess(res.data))
                  } else {
                        dispatch(fetchGenderFailed());
                  }
            } catch (e) {
                  dispatch(fetchGenderFailed());
                  console.log('fetchGenderStart error', e)
            }
      }
}

export const fetchGenderSuccess = (genderData) => ({
      type: actionTypes.FETCH_GENDER_SUCCESS,
      data: genderData
})

export const fetchGenderFailed = () => ({
      type: actionTypes.FETCH_GENDER_FAIlDED
})

export const fetchPositionSuccess = (positionData) => ({
      type: actionTypes.FETCH_POSITION_SUCCESS,
      data: positionData
})

export const fetchPositionFailed = () => ({
      type: actionTypes.FETCH_POSITION_FAIlDED

})

export const fetchRoleSuccess = (roleData) => ({
      type: actionTypes.FETCH_ROLE_SUCCESS,
      data: roleData
})

export const fetchRoleFailed = () => ({
      type: actionTypes.FETCH_ROLE_FAIlDED,
})

export const fetchPositionStart = () => {
      return async (dispatch, getState) => {
            try {
                  let res = await getAllCodeService("POSITION");
                  if (res && res.errCode === 0) {
                        dispatch(fetchPositionSuccess(res.data))
                  } else {
                        dispatch(fetchPositionFailed());
                  }
            } catch (e) {
                  dispatch(fetchPositionFailed());
                  console.log('fetchPositionFailed error', e)
            }
      }
}

export const fetchRoleStart = () => {
      return async (dispatch, getState) => {
            try {
                  let res = await getAllCodeService("ROLE");
                  if (res && res.errCode === 0) {
                        dispatch(fetchRoleSuccess(res.data))
                  } else {
                        dispatch(fetchRoleFailed());
                  }
            } catch (e) {
                  dispatch(fetchRoleFailed());
                  console.log('fetchRoleFailed error', e)
            }
      }
}

export const createNewUser = (data) => {
      return async (dispatch, getState) => {
            try {
                  let res = await createNewUserService(data);
                  if (res && res.errCode === 0) {
                        toast.success("Create a new user succeed!");
                        dispatch(saveUserSuccess());
                        dispatch(fetchAllUsersStart());
                  } else {
                        dispatch(saveUserFailed());
                  }
            } catch (e) {
                  dispatch(saveUserFailed());
                  console.log('saveUserFailed error', e)
            }
      }
}

export const saveUserSuccess = () => ({
      type: actionTypes.CREATE_USER_SUCCESS
})

export const saveUserFailed = () => ({
      type: actionTypes.CREATE_USER_FAILDED
})

export const fetchAllUsersStart = () => {
      return async (dispatch, getState) => {
            try {
                  let res = await getAllUser('ALL');
                  if (res && res.errCode !== 0) {
                        toast.success("Fetch all user succeed!");
                        dispatch(fetchAllUsersSuccess(res.users.reverse()));
                  } else {
                        toast.error("Fetch all users error!");
                        dispatch(fetchAllUsersFailed());
                  }
            } catch (e) {
                  toast.error("Fetch all users error!");
                  dispatch(fetchAllUsersFailed());
                  console.log('fetchAllUsersFailed error', e)
            }
      }
}

export const fetchAllUsersSuccess = (data) => ({
      type: actionTypes.FETCH_ALL_USERS_SUCCESS,
      users: data
})

export const fetchAllUsersFailed = () => ({
      type: actionTypes.FETCH_ALL_USERS_FAILED
})

export const deleteAUser = (userId) => {
      return async (dispatch, getState) => {
            try {
                  let res = await deleteUserService(userId);
                  if (res && res.errCode === 0) {
                        toast.success("Delete the user succeed!");
                        dispatch(deleteUserSuccess())
                        dispatch(fetchAllUsersStart());
                  } else {
                        toast.error("Delete the user error!");
                        dispatch(deleteUserFailed());
                  }
            } catch (e) {
                  toast.error("Delete the user error!");
                  dispatch(fetchAllUsersFailed());
                  console.log('saveUserFailed error', e)
            }
      }
}

export const deleteUserSuccess = () => ({
      type: actionTypes.DELETE_USER_SUCCESS
})

export const deleteUserFailed = () => ({
      type: actionTypes.DELETE_USER_FAILDED
})

export const editAUser = (data) => {
      return async (dispatch, getState) => {
            try {
                  let res = await editUserService(data);
                  console.log('API :', data);
                  if (res && res.errCode === 0) {
                        console.log(' Response:', res.data);
                        toast.success("Update the user succeed!");
                        dispatch(editUserSuccess())
                        dispatch(fetchAllUsersStart());
                  } else {
                        toast.error("Update the user error!");
                        dispatch(editUserFailed());
                  }
            } catch (e) {
                  toast.error("Update the user error!");
                  dispatch(editUserFailed());
                  console.log('editUserFailed error', e)
            }
      }
}

export const editUserSuccess = () => ({
      type: actionTypes.EDIT_USER_SUCCESS
})

export const editUserFailed = () => ({
      type: actionTypes.EDIT_USER_FAILDED
})

export const fetchTopDoctor = () => {
      return async (dispatch, getState) => {
            try {
                  let res = await getTopDoctorHomeService('');
                  console.log('check res: ', res)
                  if (res && res.errCode === 0) {
                        dispatch({
                              type: actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
                              dataDoctors: res.data
                        })
                  } else {
                        dispatch({
                              type: actionTypes.FETCH_TOP_DOCTORS_FAILDED
                        });
                  }
            } catch (e) {
                  console.log('fetchFailed error', e)
                  dispatch({
                        type: actionTypes.FETCH_TOP_DOCTORS_FAILDED
                  });
            }
      }
}

export const fetchAllDoctors = () => {
      return async (dispatch, getState) => {
            try {
                  let res = await getAllDoctors();
                  // console.log('check res: ', res)
                  if (res && res.errCode === 0) {
                        dispatch({
                              type: actionTypes.FETCH_ALL_DOCTORS_SUCCESS,
                              dataDr: res.data

                        })
                        // console.log('vd', res.data)
                  } else {
                        dispatch({
                              type: actionTypes.FETCH_ALL_DOCTORS_FAILDED
                        });
                  }
            } catch (e) {
                  console.log('fetchFailed error', e)
                  dispatch({
                        type: actionTypes.FETCH_ALL_DOCTORS_FAILDED
                  });
            }
      }
}

export const saveDetailDoctor = (data) => {
      return async (dispatch, getState) => {
            try {
                  let res = await saveDetailDoctorService(data);
                  // console.log('check res: ', res)
                  if (res && res.errCode === 0) {
                        toast.success("Update the user succeed!");
                        dispatch({
                              type: actionTypes.SAVE_DETAIL_DOCTOR_SUCCESS,
                        })

                  } else {
                        toast.error("Update the user error!");
                        dispatch({
                              type: actionTypes.SAVE_DETAIL_DOCTOR_FAILDED
                        });
                  }
            } catch (e) {
                  toast.error("Update the user error!");
                  // console.log('fetchFailed error', e)
                  dispatch({
                        type: actionTypes.SAVE_DETAIL_DOCTOR_FAILDED
                  });
            }
      }
}
import axios from "../axios";

const handleLoginApi = (userEmail, userPassword) => {
      return axios.post('/api/login', { email: userEmail, password: userPassword });
}

const getAllUser = (inputId) => {
      //template string
      return axios.get(`/api/get-all-users?id=${inputId}`)
}

const createNewUserService = (data) => {
      // console.log('check data from service: ', data)
      return axios.post('/api/create-new-user', data)
}

const deleteUserService = (userID) => {
      return axios.delete('/api/delete-user', {
            data: {
                  id: userID
            }
      })
}

const editUserService = (inputData) => {
      return axios.put('/api/edit-user', inputData);
}

const getAllCodeService = (inputType) => {
      return axios.get(`/api/allcode?type=${inputType}`)
}

const getTopDoctorHomeService = (limit) => {
      return axios.get(`/api/top-doctor-home?limit=${limit}`)
}

const getAllDoctors = () => {
      return axios.get(`/api/get-all-doctors`)
}

const saveDetailDoctorService = (data) => {
      return axios.post('/api/save-info-doctor', data)
}

export {
      handleLoginApi, getAllUser,
      createNewUserService,
      deleteUserService, editUserService,
      getAllCodeService, getTopDoctorHomeService,
      getAllDoctors, saveDetailDoctorService
}


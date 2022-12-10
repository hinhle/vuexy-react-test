import axios from 'axios'

// ** Get data
export const getData = params => {
  return dispatch => {
    axios.get('/apps/contact/contacts', params).then(response => {
      dispatch({
        type: 'GET_DATA',
        allData: response.data.allData,
        data: response.data.contacts,
        totalPages: response.data.total,
        params
      })
    })
  }
};


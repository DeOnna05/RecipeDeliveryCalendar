import axios from 'axios';

const loginAPI = {
    User: function(User){
      return axios.post('/getToken', User)
    }
}

export default loginAPI;
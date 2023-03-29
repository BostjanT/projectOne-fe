import axios from '../api/axios';

const UpdateUser = async () => {
  const accessToken = localStorage.getItem('accessToken');
  const userDataResponse = await axios.get('/me', {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  localStorage.setItem('userData', JSON.stringify(userDataResponse.data));
};

export default UpdateUser

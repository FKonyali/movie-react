import axios from 'axios';
import { get } from 'lodash';
import types from '../types/auth';

const global = {
  login: (payload) =>
    async (dispatch) => {
      dispatch({ type: types.AUTH_REQUEST, key: 'login' });
      try {
        const { data } = await axios.get('auth/oidc/callback', payload);
        axios.defaults.headers['Authorization'] = `JWT ${data.result.token}`;
        axios.defaults.headers['access-token'] = `${data.result.access_token}`;
        localStorage.setItem('token', data.result.token);
        localStorage.setItem('access-token', data.result.access_token);
        /**@todo tokeni al **/
        dispatch({ type: types.AUTH_SUCCESS, key: 'login' });
        dispatch({ type: types.AUTH_SET, key: 'welcome', data: true });
        dispatch({ type: types.AUTH_SET, key: 'account', data: {data} });
        return data;
      } catch (error) {
        dispatch({ type: types.AUTH_ERROR, key: 'login', error: error });
        throw error;
      }
  },
  postData: (payload) =>
    async (dispatch) => {
      try {
        const { data } = await axios.post(payload.url, payload.data, { params: payload.params });
        payload.key && dispatch({ type: types.ADD_DATA, key: payload.key, data });
        return data;
      } catch (error) {
        payload.key && dispatch({ type: types.AUTH_ERROR, key: payload.key, error: error.response.data });

        alert(get(error, 'response.data.message', 'Bilinmeyen bir hata oluştu.'));

        throw error;
      }
    },
  validateCode: (payload) =>
    async () => {
      try {
        const response = await axios.post(payload.url, payload.data);
        return response;
      } catch (error) {
        alert(get(error, 'response.data.message', 'Bilinmeyen bir hata oluştu.'));
        throw error;
      }
    },
  logout: () =>
    async (dispatch) => {
      /**@todo token alınaca **/
      delete axios.defaults.headers['Authorization'];
      dispatch({ type: types.AUTH_SET, key: 'account', data: null });

      return;
    },
  updateState: (payload) =>
    async (dispatch) => {
      dispatch({ type: types.AUTH_SET, ...payload });

      return;
    },
};

export default global;

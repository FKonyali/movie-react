import axios from 'axios';
import { get } from 'lodash';
import types from '../types/global';

const global = {
  getData: ({ url, key, params }) =>
    async (dispatch) => {
      key && dispatch({ type: types.GLOBAL_REQUEST, key: key });
      try {
        const { data } = await axios.get(url, { params });
        key && dispatch({ type: types.GLOBAL_SUCCESS, key, data });
        return data;
      } catch (error) {
        key && dispatch({ type: types.GLOBAL_ERROR, key, error });
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
          alert(get(error, 'response.data.message', 'An unknown error has occurred.'));
        throw error;
      }
    },
  deleteData: (payload) =>
    async () => {
      try {
        const { data } = await axios.delete(payload.url, { params: payload.params });
        return data;
      } catch (error) {
          alert(get(error, 'response.data.message', 'An unknown error has occurred.'));
        throw error;
      }
    },
  putData: (payload) =>
    async () => {
      try {
        const { data } = await axios.put(payload.url, payload.data, { params: payload.params });
        return data;
      } catch (error) {
          alert(error.response.data.message)
        throw error;
      }
    },
  patchData: (payload) =>
    async () => {
      try {
        const { data } = await axios.patch(payload.url, payload.data, { params: payload.params });
        return data;
      } catch (error) {
          alert(get(error, 'response.data.message', 'An unknown error has occurred.'));
        throw error;
      }
    },
  updateState: (payload) =>
    async (dispatch) => {
      dispatch({ type: types.SET_STATE, payload });
      return;
    },
};

export default global;

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../store/actions/global';
import useMounted from './useMounted';
import useUpdated from './useUpdated';

const useGet = ({ url = '', key = '', params = {}, pagination = false, auth = false }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const state = useSelector(state => state.global[key]);
  const [offset, setOffset] = useState(0);
  const account = useSelector(state => state.auth.account);

  const getData = (nextOffset) => {
    if (typeof nextOffset !== 'number') setLoading(true);
    setError(null);
    let _params = { ...params };
    if (pagination) _params = { ..._params, limit: 10, offset: offset };
    if (nextOffset) {
      _params.offset = nextOffset;
      setOffset(nextOffset);
    }
    dispatch(actions.getData({ url, key, params: _params })).then((response) => {
      if (nextOffset) {
        const prev = data ? data.result : [];
        response.result = [...prev, ...response.result];
      }
      setData(response);
      setLoading(false);
    }).catch((e) => {
      setData(null);
      setLoading(false);
      setError(e);
    });
  };

  const refresh = () => {
    getData();
  };

  const next = () => {
    getData(offset + 10);
  };

  useMounted(() => {
    if (url && (!auth || (auth && account))) {
      getData();
    }
  });

  useUpdated(() => {
    getData(0);
  }, [url, params]);

  return state ? { ...state, refresh, next } : { data, loading, error, refresh, next };
};

export default useGet;

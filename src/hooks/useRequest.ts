
import { useEffect, useState } from 'react';

interface RespType<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
}

export function useRequest<T>(
  cb: () => null | Promise<T>,
  args: ReadonlyArray<any>,
): RespType<T> {
  const initialState: RespType<T> = {
    data: null,
    error: null,
    isLoading: true,
  };
  const [state, _setState] = useState<RespType<T>>(initialState);
  let canceled = false;
  const setState: typeof _setState = val => {
    if (!canceled) {
      _setState(val);
    }
  };
  useEffect(
    () => {
      const res = cb();
      if (!res) {
        if (state !== null) {
          setState(initialState);
        }
        return;
      }
      setState({
        ...state,
        data: null,
        isLoading: true,
        error: null,
      });

      res
        .then(data => {
          setState({
            data,
            isLoading: false,
            error: null,
          });
        })
        .catch(err => {
          setState({
            ...state,
            data: null,
            isLoading: false,
            error: err,
          });
        });

      return () => {
        canceled = true;
      };
    },
    [...args],
  );

  return { ...state };
}

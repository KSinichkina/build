/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse, AxiosPromise } from 'axios';
import { OptionValue } from '../components/Form/Form';

export const USERS_URL = 'http://localhost:3000/users';
export const UPDATE_COUNTRY_URL = 'http://localhost:3000/update';

export const requestUsers: () => Promise<AxiosResponse<any>> = () =>
  axios.get(USERS_URL);

export const updateCountry: (
  country: OptionValue,
  value: number
) => AxiosPromise<any> = (country: OptionValue, value: number) =>
  axios({
    method: 'post',
    url: UPDATE_COUNTRY_URL,
    data: {
      id: country && country.value,
      name: country && country.label,
      value,
    },
  });

import axios from 'axios';
import { ValueType } from 'react-select';
import { OptionValue } from '../components/Form/Form';

export const USERS_URL = 'http://localhost:3000/users';
export const UPDATE_COUNTRY_URL = 'http://localhost:3000/update';

export const requestUsers = () => axios.get(USERS_URL);

export const updateCountry = (country: OptionValue, value: number) => axios({
    method: 'post',
    url: UPDATE_COUNTRY_URL,
    data: {
      id: country && country.value,
      name: country && country.label,
      value,
    }
  });
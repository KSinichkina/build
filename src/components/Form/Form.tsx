import * as React from 'react';
import { useEffect, useState, FormEvent } from 'react';

import Select, { ValueType, OptionsType, GroupedOptionsType } from 'react-select';
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
//@ts-ignore
import { updateCountry } from '../../api/api';

import styles from './Form.scss';

export type OptionValue = { 
    value: string;
    label: string
};

const initialState: {
    options: OptionsType<OptionValue> | GroupedOptionsType<OptionValue>;
    value: ValueType<OptionValue>;
} = {
    options: [],
    value: { value: 'UA', label: 'Ukraine' },
};

const Form = () => {
    const [state, setCountrySelectState] = useState(initialState);
    const [count, setUserCountState] = useState('');
    const [isSaved, setIsSavedState] = useState(false);

    useEffect(() => {
        const options = am4geodata_worldLow.features.map(({ properties }) => ({ value: properties.id, label: properties.name }));
        setCountrySelectState({options, value: options[0]});

        return () => {};
      }, []);

    const changeHandler = (value: ValueType<OptionValue>) => {
        setCountrySelectState({ options: state.options, value });
    }

    const saveHandler = async () => {
        if (state.value) {
            const res = await updateCountry(state.value as OptionValue, parseInt(count));
            if (res.status === 200) {
                setIsSavedState(true);
                setUserCountState('');
                // TODO: show some 'Success save' modal
            }
        }
    }

    const inputHandler = (event: FormEvent<HTMLInputElement>) => {
        setUserCountState(event.currentTarget.value);
        setIsSavedState(false);
    }

    // TODO: validation should bbe added
    
    return <div className={styles.form}>
        <Select
            options={state.options}
            value={state.value}
            onChange={changeHandler}
        />
        <input
            type='number'
            pattern='[0-9]*' 
            placeholder='0'
            value={count}
            inputMode='numeric'
            onChange={inputHandler}
        />
         <button disabled={isSaved} onClick={saveHandler}>Save</button>
    </div>;
}

export default Form;
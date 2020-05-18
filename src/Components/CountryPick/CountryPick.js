import React, {useState, useEffect} from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './Country.module.css';
import {fetchCountries} from '../../api/index';

const CountryPick = (props) => {
    const [state, setState] = useState([]);
    
    useEffect(() => {    
        const fetchAPI = async () => {
            setState(await fetchCountries());
        }
        fetchAPI();
    }, []);

    const NS = state.map((each, i) => {
        return (
            <option value={each} key={i}>{each}</option> 
        );
    }); 

    const changeParentState = (event) => {
        props.countryChange(event.target.value);
    }

    return (
        <div>
            <h5>Select a country for detailed view</h5>
            <FormControl className={styles.formControl}>
                <NativeSelect 
                className={styles.nativeSelect} 
                defaultValue="" 
                onChange={changeParentState}
                >
                    {NS}
                </NativeSelect>
            </FormControl>    
        </div>
    )
}

export default CountryPick;
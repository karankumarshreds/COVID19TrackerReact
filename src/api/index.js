import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

const fetchData = async (country) => {
    
    let dynamicURL = url;
    if(country){
        dynamicURL = `${url}/countries/${country}`;
    }

    try {
        const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(dynamicURL);
        return {
            confirmed,
            recovered,
            deaths,   
            lastUpdate
        }
    } catch(err) {
        console.log(err);
    }
}

const fetchDailyData = async () => {
    try{
        const { data } = await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailyData) => {
            return {
                confirmed: dailyData.confirmed.total,
                deaths: dailyData.deaths.total,
                date: dailyData.reportDate
            }
        });
        return modifiedData;
    } catch(err) {
        console.log(err);
    }
}

const fetchCountries = async () => {
    try {
        const { data : { countries } } = await axios.get('https://covid19.mathdro.id/api/countries');
        const countryNames = countries.map(el => el.name);
        // countryNames = countryNames.splice(0, 0, "Choose country");
        console.log(countryNames)
        return countryNames;
    } catch(err) {
        console.log(err);
    }
}
export {fetchData};
export {fetchDailyData};
export {fetchCountries};

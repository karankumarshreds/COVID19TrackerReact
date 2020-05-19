import React from 'react';
import './App.css';
import Cards          from './Components/Cards/Cards';
import Chart          from './Components/Chart/Chart';
import CountryPick    from './Components/CountryPick/CountryPick';
import Footer         from './Components/Footer/Footer'
import {fetchData, fetchDailyData}    from './api'

class App extends React.Component {

  state = {
    data : {},
    country: ''
  }

  async componentDidMount() {
    const response = await fetchData(); 
    this.setState({ data:response });
  }

  handleState = async (data) => {
    //using this to get selected country by the user
    //also to make use of this to get further details of the country

    this.setState(state => {
      return {
        ...state.data, country: data
      }
    })
    //getting further details on country
    const response = await fetchData(data);
    //this will overwrite the global data to only one country
    //state.data is being passed to cards, hence they will be updated
    //as well as soon as the user chooses a country
    this.setState(state => {
      return {
        ...state, data: response
      }
    });
  
  }

  render() {

    const { data, country } = this.state;
    const imgUrl = "http://www.pngmart.com/files/12/COVID-19-Virus-PNG-Transparent-Image.png";
    const heading1 = (
      <h3>COVID-19 Global Data </h3>
    );
    const heading2 = (
      <h3> {country}'s live analysis </h3>
    )

    return (
      <div className="App">
        <body className="App-header">
          <a href="/" ><img src={imgUrl} className="App-logo" alt="logo" /></a>
          <h1>COVID 19</h1>
          <Cards data={data}/>
          <CountryPick 
          countryChange={this.handleState}
          /> 
          { country ?  heading2 : heading1 }      
          <Chart 
          data={data}
          country={country}
          />
          <Footer />
        </body>
      </div>
    );
  }
}

export default App;


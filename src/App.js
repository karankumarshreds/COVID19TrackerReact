import React from 'react';
import './App.css';
import Cards          from './Components/Cards/Cards';
import Chart          from './Components/Chart/Chart';
import CountryPick    from './Components/CountryPick/CountryPick';
import {fetchData}    from './api'

class App extends React.Component {

  state = {
    data : {}
  }

  async componentDidMount() {
    const response = await fetchData();
    this.setState({ data:response });
  }

  render() {

    const { data } = this.state;
    const imgUrl = "http://www.pngmart.com/files/12/COVID-19-Virus-PNG-Transparent-Image.png"
    console.log(data);
    return (

      <div className="App">
        <body className="App-header">
          <img src={imgUrl} className="App-logo" alt="logo" />
          <h1>COVID 19</h1>
          <Cards data={data}/>
          <CountryPick data={data}/>
          <Chart data={data}s/>
        </body>
      </div>
    );

  }
}

export default App;

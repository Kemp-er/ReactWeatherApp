import React, {useState, useEffect} from 'react';
import axios from 'axios'

import Header from './component/base/Header'
import Form from './component/Form'
import Weather from './component/Weather'

import Error from './component/base/Error'

function App() {


  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [error, setError] = useState(false)
  const [response, setResponse] = useState({})

  useEffect(() => {
    //prevent first execution
    if(city === '' || country === '') return

    const queryApi = () => {
      const appId = '6dcfa251bf0484aec8e8943e2b6fa130'
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`
      axios.get(url)
        .then(res => res.data)
        .then(json => setResponse(json))
    }

    queryApi()
  }, [ city, country ])

  const searchData = data => {
    if (data.city === '' || data.country === '') {
      setError(true)
      return
    }

    setCity(data.city)
    setCountry(data.country)
    setError(false)
  }

  

  // Load component conditionally
  let component
  if(error) {
    component = <Error message="Both fields are required"/>
  } else {
    component = <Weather response={response}/>
  }

  return (
    <div className="App">
      <Header 
        title="Weather app!"/>

        <div className="contenedor-form">
          <div className="container">
            <div className="row">
              <div className="col s12 m6">
                <Form 
                  searchData={searchData}/>
              </div>
              <div className="col s12 m6">
                {component}
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;

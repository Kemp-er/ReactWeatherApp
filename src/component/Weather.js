import React from 'react'

const Weather = ({response}) => { 
    const kelvin = 273.75

    const { name, main } = response

    console.log(response)
    if(!name) return null;

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>Today's weather for {name} is:</h2>
                <p className="temperatura">
                    {parseInt(main.temp - kelvin, 10)} <span>&#x2103;</span>
                </p>
                <p>Max. Temp: {parseInt(main.temp_max - kelvin, 10)} &#x2103;</p>
                <p>Min. Temp: {parseInt(main.temp_min - kelvin, 10)} &#x2103;</p>
            </div>
        </div>
    )
}

export default Weather
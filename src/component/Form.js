import React, { useState } from 'react'

const Form = ({searchData}) => { 
    // component's state
    // search = state
    // saveSearch = this.setState({})
    const [ search, saveSearch ] = useState({
        city: '',
        country: ''
    })

    const handleChange = (e) => {
        //[e.target] = e.value

        saveSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const queryWeather = e => {
        e.preventDefault()

        searchData(search)
    }

    return (
        <form
            onSubmit={queryWeather}> 
            <div className="input-field col s12">
                <input 
                    type="text" 
                    name="city" 
                    id="city"
                    onChange={handleChange} />
                <label htmlFor="city">City: </label>
            </div>

            <div className="input-field col s12">
                <select name="country" id="country" onChange={handleChange}>
                    <option value="">Select a country</option>
                    <option value="US">United States</option>
                    <option value="ES">Spain</option>
                    <option value="UK">United Kingdom</option>
                    <option value="FR">France</option>
                    <option value="PT">Portugal</option>
                    <option value="IT">Italy</option>
                    <option value="DE">Germany</option>
                </select>
            </div>

            <div className="input-field col s12">
                <input 
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                    type="submit" 
                    value="Search Weather" />
            </div>
        </form>
    )
}

export default Form
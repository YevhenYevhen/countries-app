import React, { useContext, useEffect, useState } from 'react'
import { Countries } from './Countries'
import getContinentCountries from "../utilities/getContinentCountries"
import { isCollapsedContext } from '../App'


 export const Continent = ({ name, continentCode, toggleIsCollapsed }) => {
     const [countries, setCountries] = useState([])
     
     useEffect(() => {
        getContinentCountries(continentCode).then(res => setCountries(res))
     }, [continentCode])
     
    const [countriesDisplay, toggleCountriesDisplay] = useState(false);
     const isCollapsed = useContext(isCollapsedContext)
     
    const toggle = () => {
        toggleIsCollapsed(false)
        toggleCountriesDisplay(!countriesDisplay)
    }
  
     useEffect(() => {
         if (isCollapsed) {
            toggleCountriesDisplay(false)
        }
    }, [isCollapsed])
     
   

    return (
        <>
            <div className='continent' onClick={toggle}>{name}</div>
            {countriesDisplay && <Countries toggleCountriesDisplay={toggleCountriesDisplay}
                toggleIsCollapsed={toggleIsCollapsed} countries={countries} />}
        </>
    )
}

 





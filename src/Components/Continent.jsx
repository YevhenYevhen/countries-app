import React, { useContext, useEffect, useState } from 'react'
import { Countries } from './Countries'
import getContinentCountries from "../utilities/getContinentCountries"
import { CollapseContext } from "../App"



 export const Continent = ({ name, continentCode }) => {
     const [countries, setCountries] = useState([])
     const {isCollapsed ,toggleIsCollapsed} = useContext(CollapseContext)

     
     useEffect(() => {
        getContinentCountries(continentCode).then(res => setCountries(res))
     }, [continentCode])
     
    const [countriesDisplay, toggleCountriesDisplay] = useState(false);
     
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
            {countriesDisplay && <Countries toggleCountriesDisplay={toggleCountriesDisplay} countries={countries} />}
        </>
    )
}

 





import React from 'react'
import '../App.css'
import { useToggle } from '../utilities/useToggle'

export const Country = ({ name, capital, languages }) => {
    const [infoMode, toggleInfoMode] = useToggle()
    return (
        <>
         <div onClick={toggleInfoMode} className='country'>
            <div>{name}</div>
            </div>
            {infoMode && <div onClick={toggleInfoMode} className='countryInfo'>
                <div><span>Capital:</span><span>{capital}</span></div> 
                <div><span>Languages:</span><span>{languages}</span></div>
            </div>}
        </>
    )
}

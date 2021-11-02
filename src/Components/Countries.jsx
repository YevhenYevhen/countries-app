import React, { useContext } from 'react'
import { isCollapsedContext } from '../App'
import '../App.css'
import { Country } from './Country'


export const Countries = ({ countries, toggleIsCollapsed }) => {
    const isCollapsed = useContext(isCollapsedContext)
    return (
        <>
            {!isCollapsed && <div>
                {countries.map(country => {
                    
                    let languages = country.languages.reduce((langArray, langObj) => {
                        langArray.push(langObj.name)
                        return langArray;
                    }, []).join(', ')
                
                    languages = languages || 'No languages'
                    const capital = country.capital || 'No capital'

                    return <Country key={country.code}
                        name={country.name} isCollapsed={isCollapsed}
                        languages={languages} capital={capital} />
                })}
                <div className='collapser' onClick={toggleIsCollapsed} >Back to continents</div>
            </div>
            }
        </>
    )
}

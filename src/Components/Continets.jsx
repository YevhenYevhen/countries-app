import { useEffect, useState } from "react"
import queryFetch from '../utilities/queryFetch'
import { Continent } from './Continent'


const Continents = ({toggleIsCollapsed}) => {

    const [continents, setContinents] = useState([])

    useEffect(() => {
        queryFetch(`
        query {
            continents {
            name
            code
            }
        }
    `
        )
            .then(data => {
                setContinents(data.data.continents)
            })
    }, [])

    return (
        continents.map(continent => <Continent toggleIsCollapsed={toggleIsCollapsed}
            key={continent.code} continentCode={continent.code} name={continent.name} />)
    )

}
export default Continents;



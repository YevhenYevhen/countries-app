import queryFetch from "./queryFetch"

export default function getContinentCountries(continentCode) {
    return queryFetch(`
     query getCountries($code: ID!) {
         continent(code: $code) {
           countries{
             name
             code
             capital
             languages {
                code
                name
              }
           }
         }
       }
     `, { code: continentCode }).then(data => {
         return data.data.continent.countries
     })
 }
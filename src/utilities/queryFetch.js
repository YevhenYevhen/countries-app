export default function queryFetch(query, variables) {
    return fetch('https://countries.trevorblades.com/', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query: query,
            variables: variables
        })
    }).then(res => res.json())
}
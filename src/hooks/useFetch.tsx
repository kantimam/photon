import { useEffect, useState } from 'react'

const useFetch = (input: RequestInfo, init?: RequestInit | undefined) => {
    const [data, setData] = useState<any>()
    const [error, setError] = useState<Error>()
    useEffect(() => {
        fetch(input, init)
            .then(data => data.json())
            .then(json => setData(json))
            .catch(e => {
                console.log(e)
                setError(e)
            })
    }, [input, init])
    return [data, !(error || data), error]
}

export default useFetch

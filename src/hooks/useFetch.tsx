import { useEffect, useState } from 'react'

function useFetch<T>(input: RequestInfo, init?: RequestInit | undefined): [T | undefined, boolean, Error | undefined] {
    const [data, setData] = useState<T>()
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

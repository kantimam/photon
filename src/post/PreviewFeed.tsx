import { Card } from '@material-ui/core'
import { useRouter } from 'next/router'
import React from 'react'
import useFetch from '../hooks/useFetch';

/* interface Props {
    postID: 
} */

const PreviewFeed = (/* { postID } */) => {
    const { query } = useRouter();
    const [data, loading, error] = useFetch("http://localhost:5600/post/${context?.params?.id}")
    return (
        <Card style={{ width: "12rem", marginLeft: "1rem" }}>
            <pre>
                {(() => {
                    if (loading) return "asd"
                    if (data) return JSON.stringify(data, null, 2)
                    return "error" || "not handled error "
                })()}
            </pre>
        </Card>
    )

}

export default PreviewFeed

import React from 'react'
import { Post } from '../../../types/types'
import useSWR from 'swr'
import { Box, Typography } from '@material-ui/core'



const PostDialogContent = ({ postSelector }: { postSelector: string }) => {
    /* TODO: make this another layout rather than reusing the full page layout :) */
    const { data, error } = useSWR<Post>(`http://localhost:5600/post/${postSelector}`)

    if (error) return <p>error</p>
    if (!data) return <p>loading...</p>
    return (
        <Box>
            <Box flex={1}>
                {/* main content */}
                <Typography variant="h2">
                    {data.title}
                </Typography>
                <Box position="relative">
                    {/* put sticky container here */}
                    <img src={`http://localhost:5600/static/${data.resourceName}`} style={{ width: "100%" }} alt="post image" />

                </Box>
                {/* comments here */}
            </Box>
        </Box>
    )

}



export default PostDialogContent
import { Card } from '@material-ui/core'
import { useRouter } from 'next/router'
import React from 'react'
import { Post, PostPreview } from '../../types/types';
import useFetch from '../hooks/useFetch';
import PostThumbnail from '../preview/PostThumbnail';

interface Props {
    currentPost: Post
}

interface PreviewData {
    prevPost: PostPreview
    nextPost: PostPreview
}

const PreviewFeed = ({ currentPost }: Props) => {
    console.log(currentPost)
    console.log(currentPost.id)
    const [data, loading, error] = useFetch<PreviewData>(`http://localhost:5600/post/preview/${currentPost.id}`)
    if (!data) return (
        <Card style={{ width: "12rem", marginLeft: "1rem" }}>
            {loading ? "loading" : "error"}
        </Card>
    )
    return (
        <Card style={{ width: "12rem", marginLeft: "1rem" }}>
            <PostThumbnail post={data.prevPost} />
            <PostThumbnail post={currentPost} />
            <PostThumbnail post={data.nextPost} />
        </Card>
    )
}


export default PreviewFeed

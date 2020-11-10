import { Card } from '@material-ui/core'
import React from 'react'
import { Post, PostPreview } from '../../types/types';
import PostAspectThumbnail from '../preview/PostAspectThumbnail'
import useSWR from 'swr';

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
    const { data, error } = useSWR<PreviewData>(`http://localhost:5600/post/preview/${currentPost.id}`)

    if (error) return (
        <Card style={{ width: "12rem", marginLeft: "1rem" }}>
            error
        </Card>
    )
    if (!data) return (
        <Card style={{ width: "12rem", marginLeft: "1rem" }}>
            loading
        </Card>
    )
    return (
        <Card style={{ width: "12rem", marginLeft: "1rem" }}>
            <PreviewOrDummy post={data.prevPost} />
            <PreviewOrDummy post={currentPost} />
            <PreviewOrDummy post={data.nextPost} />
        </Card>
    )
}

const PreviewOrDummy = ({ post }: { post: PostPreview }) => {
    if (!post || !post.resourceName) return <Card>none</Card>
    return <PostAspectThumbnail post={post} />
}


export default PreviewFeed

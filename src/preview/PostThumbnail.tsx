import { styled } from '@material-ui/core'
import React from 'react'
import { PostPreview } from '../../types/types'
import Link from '../Link'

interface Props {
    post: PostPreview
}

const ThumbnailLink = styled(Link)({
    display: "block",
    width: "100%",
    "& img": {
        width: "100%",
        /* height: "100%", */
        objectFit: "cover",
        display: "block"
    }
})

const PostThumbnail = ({ post }: Props) => {
    return (
        <ThumbnailLink href={`posts/${post.id}`}>
            <img
                src={`http://localhost:5600/static/${post.resourceName}`}
                alt="post"
                loading="lazy"
            />
        </ThumbnailLink>


    )
}

export default PostThumbnail

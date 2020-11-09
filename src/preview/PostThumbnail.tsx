import { styled } from '@material-ui/core'
import React from 'react'
import { PostPreview } from '../../types/types'
import Link from '../Link'

interface Props {
    post: PostPreview
}

const ThumbnailLink = styled(Link)(({ theme }) => ({
    display: "block",
    width: "100%",
    overflow: "hidden",
    borderRadius: theme.spacing(1)
}))

const ThumbnailImage = styled('img')(({ theme }) => ({
    width: "100%",
    objectFit: "cover",
    display: "block",
    overflow: "hidden",
    borderRadius: theme.spacing(1),
    transition: "0.2s transform",
    "&:hover": {
        transform: "scale(1.04)"
    }

}))

const PostThumbnail = ({ post }: Props) => {
    return (
        <ThumbnailLink href={`posts/${post.id}`}>
            <ThumbnailImage
                src={`http://localhost:5600/static/${post.resourceName}`}
                alt="post"
                loading="lazy"
            />
        </ThumbnailLink>


    )
}

export default PostThumbnail

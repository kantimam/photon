import { makeStyles } from '@material-ui/core'
import React from 'react'
import { PostPreview } from '../../types/types'
import Link from '../Link'
import ThumbnailImg from '../ThumbnailImage'

interface Props {
    post: PostPreview
}

const styles = makeStyles(theme => ({
    thumbnailLink: {
        display: "block",
        width: "100%",
        overflow: "hidden",
        borderRadius: theme.spacing(1)
    },
    thumbnailImg: {
        width: "100%",
        objectFit: "cover",
        display: "block",
        overflow: "hidden",
        borderRadius: theme.spacing(1),
        transition: "0.2s transform",
        "&:hover": {
            transform: "scale(1.04)"
        }
    }
}))

const PostThumbnail = ({ post }: Props) => {
    const { thumbnailLink } = styles()
    return (
        <Link className={thumbnailLink} /* href={'/posts/[id]'} */ href={`/posts/${post.id}`} as={`/posts/${post.id}`}>
            <ThumbnailImg imgSrc={post.resourceName} />
        </Link>


    )
}

export default PostThumbnail

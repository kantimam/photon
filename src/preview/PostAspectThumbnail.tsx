import React from 'react'
import AspectWrapper from '../AspectWrapper'
import { PostPreview } from '../../types/types'
import Link from '../Link'
import ThumbnailImg from '../ThumbnailImage'

interface Props {
    post: PostPreview
}



const PostThumbnail = ({ post }: Props) => {
    return (
        <Link href={`/posts/${post.id}`} as={`/posts/${post.id}`}>
            <AspectWrapper aspectRatio={0.56}>
                <ThumbnailImg imgSrc={post.resourceName} />
            </AspectWrapper>
        </Link>


    )
}

export default PostThumbnail

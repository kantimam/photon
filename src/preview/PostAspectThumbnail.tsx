import React from 'react'
import AspectWrapper from '../AspectWrapper'
import { PostPreview } from '../../types/types'
import Link from '../Link'

interface Props {
    post: PostPreview
}



const PostThumbnail = ({ post }: Props) => {
    return (
        <Link href={`posts/${post.id}`}>
            <AspectWrapper aspectRatio={0.56}>
                <img
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                    }}
                    src={`http://localhost:5600/static/${post.resourceName}`}
                    alt="post"
                    loading="lazy"
                />
            </AspectWrapper>
        </Link>


    )
}

export default PostThumbnail

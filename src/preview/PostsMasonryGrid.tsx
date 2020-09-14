import React from 'react'
import { PostPreview } from '../../types/types'
import Masonry from 'react-masonry-css'
import PostThumbnail from './PostThumbnail'







interface Props {
    posts: PostPreview[]
}

const PostsMasonryGrid = ({ posts = [] }: Props) => {
    return (
        <Masonry
            breakpointCols={{ default: 4 }}
            className="postsMasonryGrid"
            columnClassName="postMasonryGridColumn"
        >
            {posts.map(item => <PostThumbnail post={item} />)}
        </Masonry>
    )
}

export default PostsMasonryGrid

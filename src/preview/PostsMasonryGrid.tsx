import { Box, styled } from '@material-ui/core'
import React from 'react'
import { PostPreview } from '../../types/types'
import PostThumbnail from './PostThumbnail'



const MasonryBox = styled(Box)(({ theme }) => ({
    columnCount: 4,
    columnGap: theme.spacing(0.5),
    "&>a": {
        marginBottom: theme.spacing(0.5)
    }
}))



interface Props {
    posts: PostPreview[]
}

const PostsMasonryGrid = ({ posts = [] }: Props) => {
    return (
        <MasonryBox>
            {posts.map(item => <PostThumbnail key={`${Date.now()}_${item.id}`} post={item} />)}
        </MasonryBox>
    )
}

export default PostsMasonryGrid

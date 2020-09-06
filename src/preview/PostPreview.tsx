import React from 'react'
import { Paper, Typography, styled } from '@material-ui/core'
import AspectWrapper from '../AspectWrapper'
import { PostPreview } from '../../types/types'

interface Props {
    post: PostPreview
}

const ImagePaper=styled(Paper)({
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
})

const PostThumbnail = ({post}: Props) => {
    return (
        <ImagePaper>
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
            
            <Typography>
                {post.title}
            </Typography>
        </ImagePaper>
    )
}

export default PostThumbnail

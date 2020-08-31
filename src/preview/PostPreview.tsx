import React from 'react'
import { Paper, Typography, styled } from '@material-ui/core'
import AspectWrapper from '../AspectWrapper'

interface Props {
    post: any
}

const ImagePaper=styled(Paper)({
    overflow: "hidden"
})

const PostPreview = ({post}: Props) => {
    return (
        <ImagePaper>
            <AspectWrapper aspectRatio={0.56}>
                <img
                    style={{
                        width: "100%", 
                        height: "100%", 
                        objectFit: "cover"
                    }} 
                    src={post.download_url} 
                    alt="post"
                    loading="lazy"
                />
            </AspectWrapper>
            
            <Typography>
                {post.author}
            </Typography>
        </ImagePaper>
    )
}

export default PostPreview

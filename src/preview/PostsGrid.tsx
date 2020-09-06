import React from 'react'
import { styled, Box } from '@material-ui/core'
import PostThumbnail from './PostPreview'



const AutoGrid=styled(Box)(({theme})=>({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(18rem, 1fr))",
    gridGap: theme.spacing(1)
}))
  
  


interface Props {
    posts: any[]    
}

const PostsGrid = ({posts=[]}: Props) => {
    return (
        <AutoGrid>
          {posts.map(item=><PostThumbnail post={item}/>)}
        </AutoGrid>
    )
}

export default PostsGrid

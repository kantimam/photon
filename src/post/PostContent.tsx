import React from 'react'
import { Post } from '../../types/types'
import { Container, Typography, styled, Card, Box } from '@material-ui/core'
import PreviewFeed from './PreviewFeed'

interface Props {
    post: Post

}

const PostFlexContainer = styled(Container)({
    display: "flex",
    justifyContent: "center",
    position: "relative"
})

const PostContent = ({ post }: Props) => {
    return (
        <Box>
            <PostFlexContainer>
                <Box width={"4rem"} paddingRight="8px"
                >
                    <Box
                        top={"20rem"}
                        component="aside"
                        position="sticky"
                        borderRadius={2}
                    >
                        <Card>
                            <Typography>
                                test
                                    </Typography>
                            <Typography>
                                test
                                    </Typography>
                            <Typography>
                                test
                                    </Typography>
                        </Card>
                        <Card>
                            <Typography>
                                test
                                    </Typography>
                            <Typography>
                                test
                                    </Typography>
                            <Typography>
                                test
                                    </Typography>
                        </Card>
                    </Box>
                </Box>
                <Box flex={1}>
                    {/* main content */}
                    <Typography variant="h2">
                        {post.title}
                    </Typography>
                    <Box position="relative">
                        {/* put sticky container here */}
                        <img src={`http://localhost:5600/static/${post.resourceName}`} style={{ width: "100%" }} alt="post image" />

                    </Box>
                    {/* comments here */}
                </Box>
                <PreviewFeed currentPost={post} />
            </PostFlexContainer>
            <Box minHeight="200vh">
                asd
            </Box>
        </Box>
    )
}

export default PostContent

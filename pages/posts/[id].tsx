import React from 'react'
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import Layout from '../../src/Layout'
import Box from '@material-ui/core/Box'
import { PostPreview } from '../../types/types'
import { Container, Typography, styled, Card } from '@material-ui/core'
import PreviewFeed from '../../src/post/PreviewFeed'


interface Props {
    post: PostPreview | null
}

const PostFlexContainer = styled(Container)({
    display: "flex",
    justifyContent: "center",
    position: "relative"
})

const Post: NextPage<Props> = ({ post }) => {
    if (!post) return <Box>
        failed to load post
    </Box>
    return (
        <Layout>
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
                    <PreviewFeed />
                </PostFlexContainer>
                <Box minHeight="200vh">
                    asd
                </Box>
            </Box>
        </Layout>
    )
}


// This function gets called at build time
export const getStaticPaths: GetStaticPaths = async () => {
    // Call an external API endpoint to get posts
    const res = await fetch('http://localhost:5600/posts')
    const posts: PostPreview[] = await res.json()

    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => `/posts/${post.id}`)

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

// This also gets called at build time
export const getStaticProps: GetStaticProps = async (context) => {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    //if(!context.params || typeof context.params.id==="undefined") return {props: {post: }}
    try {
        const res = await fetch(`http://localhost:5600/post/${context?.params?.id}`)
        const post: PostPreview = await res.json()
        // Pass post data to the page via props
        return { props: { post } }
    } catch (error) {
        console.log(error)
        return { props: { post: null } }
    }
}

export default Post

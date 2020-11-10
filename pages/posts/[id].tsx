import React, { useState } from 'react'
import { NextPage, GetStaticPaths, GetStaticProps, GetServerSideProps } from 'next'
import Layout from '../../src/Layout'
import Box from '@material-ui/core/Box'
import { PostPreview } from '../../types/types'
import { Container, Typography, styled, Card } from '@material-ui/core'
import PreviewFeed from '../../src/post/PreviewFeed'



const PostFlexContainer = styled(Container)({
    display: "flex",
    justifyContent: "center",
    position: "relative"
})


export interface IAppProps {
    post: PostPreview | null

}

export interface IAppState {

}

export default class App extends React.Component<IAppProps, IAppState> {

    constructor(props: IAppProps) {
        super(props);

        this.state = {
        }
    }


    public render() {
        const { post } = this.props;
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
                        <PreviewFeed currentPost={post} />
                    </PostFlexContainer>
                    <Box minHeight="200vh">
                        asd
                    </Box>
                </Box>
            </Layout>
        )
    }
}







// This also gets called at build time
export const getServerSideProps: GetServerSideProps = async (context) => {
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




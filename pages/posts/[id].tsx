import React from 'react'
import { GetServerSideProps } from 'next'
import Layout from '../../src/Layout'
import Box from '@material-ui/core/Box'
import { Post } from '../../types/types'
import PostContent from '../../src/post/PostContent'






export interface IAppProps {
    post: Post | null

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
                <PostContent post={post} />
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
        const post: Post = await res.json()
        // Pass post data to the page via props
        return { props: { post } }
    } catch (error) {
        console.log(error)
        return { props: { post: null } }
    }
}




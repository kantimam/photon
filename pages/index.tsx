import React from 'react';
import { GetServerSideProps, NextPage } from 'next'
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Layout from '../src/Layout';
import PostsMasonryGrid from '../src/preview/PostsMasonryGrid';
import { PostPreview } from '../types/types';



interface Props {
  initialPosts: PostPreview[]
}

const Index: NextPage<Props> = ({ initialPosts = [] }) => {

  return (
    <Layout appTitle="hey">
      <Box marginY={0.4}>
        <Container>
          <PostsMasonryGrid posts={initialPosts} />
        </Container>
      </Box>
    </Layout>

  );
}


// This also gets called at build time
export const getServerSideProps: GetServerSideProps = async (context) => {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  //if(!context.params || typeof context.params.id==="undefined") return {props: {post: }}
  try {
    const res = await fetch(
      `http://localhost:5600/posts`
    );
    const initialPosts = await res.json() || [];
    return { props: { initialPosts } }
  } catch (error) {
    return { props: { initialPosts: [] } }
  }
}


export default Index
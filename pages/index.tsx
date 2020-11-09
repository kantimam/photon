import React from 'react';
import { NextPage } from 'next'
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

Index.getInitialProps = async (_ctx) => {
  try {
    const res = await fetch(
      `http://localhost:5600/posts`
    );
    const initialPosts = await res.json() || [];
    return { initialPosts }
  } catch (error) {
    return { initialPosts: [] }
  }

}



export default Index
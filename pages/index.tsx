import React from 'react';
import { NextPage } from 'next'
import Container from '@material-ui/core/Container';
import Link from '../src/Link';
import Layout from '../src/Layout';
import PostsGrid from '../src/preview/PostsGrid';



interface Props {
  initialPosts: any[]
}

const Index: NextPage<Props>=({initialPosts=[]})=> {

  return (
    <Layout appTitle="hey">
      <Container>
        <PostsGrid posts={initialPosts}/>
      </Container>
    </Layout>

  );
}

Index.getInitialProps = async (ctx) =>{
  try {
    const res=await fetch(
      `https://picsum.photos/v2/list?page=2&limit=40`
    );
    const initialPosts=await res.json();
    return {initialPosts}
  } catch (error) {
    return {initialPosts: []}
  }
  
}



export default Index
import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import Layout from '../src/Layout';

export default function About() {
  return (
    <Layout appTitle="about">
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js with TypeScript example
          </Typography>
          <Link href="/">Go to the main page</Link>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </Layout>

  );
}

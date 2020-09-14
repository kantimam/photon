import Head from "next/head";

import Header from "./Header";


const Layout = ({ appTitle = 'photon', children }) => {

  return (
    <div className="Layout">
      <Head>
        <title>{appTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <Header />
      <>{children}</>
    </div>
  );
};


export default Layout;
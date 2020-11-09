import { useState } from "react";
import { Dialog } from "@material-ui/core";
import Head from "next/head";
import CreatePostDialog from "./CreatePostDialog";
import Header from "./Header";


const Layout = ({ appTitle = 'photon', children }) => {
  const [createOpen, setOpen] = useState(false);

  return (
    <div className="Layout">
      <Head>
        <title>{appTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <Header
        openCreatePost={() => setOpen(true)}
      />
      <>{children}</>
      {createOpen && <CreatePostDialog close={() => setOpen(false)} />}
    </div>
  );
};


export default Layout;
import React from 'react'
import { Dialog } from "@material-ui/core"
import PostDialogContent from './PostDialogContent'
import { useRouter } from 'next/router'


const PostDialog = () => {
    const { push, query } = useRouter();
    const postSelector = query.id;
    console.log(query)

    return (
        <Dialog open={!!postSelector} onClose={() => push("/")} maxWidth="lg">
            <PostDialogContent postSelector={postSelector as string} />
        </Dialog>
    )
}



export default PostDialog

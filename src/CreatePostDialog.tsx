import { Card, TextField, Input, Box, styled, Button, Dialog } from '@material-ui/core'
import React, { useState } from 'react'


const FormCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(2, 1),
    "&>form": {
        display: "flex",
        flexDirection: "column",
        "&>*+*": {
            marginTop: theme.spacing(2)
        }
    }
}))
const StyledDialog = styled(Dialog)({
    maxHeight: "100%",
    overflow: "hidden"
})


const CreatePostDialog = ({ close }: { close: () => void }) => {
    const [title, setTitle] = useState("")
    const [files, setFiles] = useState<FileList | null>(null)
    console.dir(files)
    return (
        <StyledDialog onBackdropClick={close} open={true}>
            <FormCard>
                <form
                    onSubmit={
                        async (event) => {
                            event.preventDefault()
                            if (!files || !files.length) return
                            try {
                                const formData = new FormData();
                                formData.append("title", title)
                                formData.append("files", files[0])
                                const res = await fetch("http://localhost:5600/post", {
                                    method: "POST",
                                    body: formData
                                })
                                const json = await res.json();
                                console.log(json)
                            } catch (error) {
                                alert(error)
                            }

                        }
                    }
                >
                    <TextField
                        variant="outlined"
                        label="title"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                    <Input
                        type="file"
                        name="file"
                        /* value={files} */
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFiles(event.target.files)}
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </form>
            </FormCard>
        </StyledDialog>
    )
}

export default CreatePostDialog

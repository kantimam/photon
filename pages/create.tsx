import React, { useState } from 'react'
import Layout from '../src/Layout'
import { Card, TextField, Input, Box, styled, Button } from '@material-ui/core'

interface Props {
    
}

const FormCard=styled(Card)(({theme})=>({
    padding: theme.spacing(2, 1),
    "&>form": {
        display: "flex",
        flexDirection: "column",
        "&>*+*":{
            marginTop: theme.spacing(2)
        }
    }
}))

const create = (props: Props) => {
    const [title, setTitle]=useState("")
    const [files, setFiles]=useState<FileList | null>(null)
    console.dir(files)
    return (
        <Layout>
            <Box 
                display="flex" 
                justifyContent="center"
                alignItems="center"
                minHeight="60vh"
            >
            <FormCard>
                <form
                    onSubmit={
                        async(event)=>{
                            event.preventDefault()
                            if(!files || !files.length) return
                            try {
                                const formData=new FormData();
                                formData.append("title", title)
                                formData.append("files", files[0])
                                const res=await fetch("http://localhost:5600/post", {
                                    method: "POST",
                                    body: formData
                                })
                                const json=await res.json();
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
                        onChange={(event)=>setTitle(event.target.value)}
                    />
                    <Input 
                        type="file" 
                        name="file" 
                        /* value={files} */
                        onChange={(event: React.ChangeEvent<HTMLInputElement>)=>setFiles(event.target.files)}
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </form>
            </FormCard>
            </Box>
            
        </Layout>
        
    )
}

export default create
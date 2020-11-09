import React from 'react'
import { Box, Typography, AppBar, Toolbar, Container } from '@material-ui/core'
import Link from './Link'

interface Props {
    variant?: "dense" | "regular" | undefined;
    openCreatePost(): void;
}

const Header = ({ variant = "dense", openCreatePost }: Props) => {

    return (
        <>
            <AppBar position="fixed">
                <Container>
                    <Toolbar variant={variant}>

                        <Link href="/" color="inherit">
                            home
                        </Link>
                        <ul>
                            <Typography style={{ cursor: "pointer" }} onClick={openCreatePost}>
                                create
                            </Typography>
                        </ul>
                    </Toolbar>
                </Container>
            </AppBar>
            {/* just used as semi dynamic shim so the ToolBar doesnt overlay the content */}
            <Toolbar variant={variant} />
        </>


    )
}

export default Header;
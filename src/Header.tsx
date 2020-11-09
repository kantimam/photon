import React from 'react'
import { Box, Typography, AppBar, Toolbar, Container } from '@material-ui/core'
import Link from './Link'

interface Props {
    variant?: "dense" | "regular" | undefined;
}

const Header = ({ variant = "dense" }: Props) => {

    return (
        <>
            <AppBar position="fixed">
                <Container>
                    <Toolbar variant={variant}>

                        <Link href="/" color="inherit">
                            home
                    </Link>
                        <ul>
                            <Link color="inherit" href="create">
                                create
                        </Link>
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
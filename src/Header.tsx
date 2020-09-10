import React from 'react'
import { Box, Typography, AppBar, Toolbar, Container } from '@material-ui/core'
import Link from './Link'

interface Props {
    
}

const Header = (props: Props) => {
    return (
        <AppBar position="static">
            <Container>
                <Toolbar variant="dense">
                    
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
        
    )
}

export default Header;
import React from 'react'
import { Box, Typography } from '@material-ui/core'

interface Props {
    
}

const Header = (props: Props) => {
    return (
        <header>
            <nav>
                <Box>
                    <Typography>
                        working
                    </Typography>
                </Box>
            </nav>
        </header>
    )
}

export default Header;
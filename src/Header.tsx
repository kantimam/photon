import React from 'react'
import { Box, Typography } from '@material-ui/core'
import Link from './Link'

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
                <ul>
                    <Link href="create">
                        create
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
import { Box, styled, Theme } from '@material-ui/core'

export default styled(Box)((theme: Theme) => ({
    paddingTop: theme?.navBar?.height
}))

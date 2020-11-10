import { makeStyles } from '@material-ui/core'
import React from 'react'

interface Props {
    imgSrc: string
}

const styles = makeStyles(theme => ({
    thumbnailImg: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
        overflow: "hidden",
        borderRadius: theme.spacing(1),
        transition: "0.2s transform",
        "&:hover": {
            transform: "scale(1.04)"
        }
    }
}))

const ThumbnailImg = ({ imgSrc }: Props) => {
    const { thumbnailImg } = styles()
    return (
        <img
            className={thumbnailImg}
            src={`http://localhost:5600/static/${imgSrc}`}
            alt="post"
            loading="lazy"
        />
    )
}

export default ThumbnailImg

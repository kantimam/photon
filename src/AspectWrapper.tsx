import React, { ReactElement } from 'react'

interface Props {
    aspectRatio?: number,
    children?: ReactElement
}

// component that lets you set a height relative to its width.
// useful to wrap images and other content where the width is unknown
// but the container needs to be square or any other aspect ratio

const AspectWrapper = ({aspectRatio=1, children}: Props) => {
    return (
        <div
            style={{
                height: "0",
                width: "100%",
                position: "relative",
                paddingBottom: `${aspectRatio * 100}%`
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    overflow: "hidden"
                }}
            >
                {children}
            </div>
        </div>
    )
}


export default AspectWrapper
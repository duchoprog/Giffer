import React from 'react'

export const GridItem = ({img}) => {
    return (
        <div className="gridItem animate__animated animate__zoomIn">
            <img src={img.url} ></img>
            <h4>{img.title}</h4>
        </div>
    )
}

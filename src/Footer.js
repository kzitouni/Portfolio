import React from 'react'

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <div className="Footer">
            @ {year} Karim Zitouni. All rights reserved.
        </div>
    )
}

export default Footer
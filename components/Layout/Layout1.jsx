import React from 'react'
import Links from './Links'
import Scripts from './Scripts'

function Layout1({children}) {
    return (
        <>
        <Links />
            {children}
        <Scripts />
        </>
    )
}

export default Layout1

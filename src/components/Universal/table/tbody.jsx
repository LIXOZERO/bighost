import React from 'react'

export default function Tbody ( props )
{
    return (
        <tbody  { ...props }>
            { props.children }
        </tbody>
    )
}

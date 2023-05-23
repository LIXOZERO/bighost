import React from 'react'

export default function Card ( props )
{
    return (

        <div { ...props } className={ `p-6 bg-white border border-gray-200 rounded-lg shadow ${ props.className }` }>
            { props.children }
        </div>
    )
}

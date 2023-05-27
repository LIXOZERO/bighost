import React from 'react'

export default function Card ( props )
{
    return (

        <div { ...props } className={ `p-6 bg-white border border-gray-200 rounded-lg shadow ${ props.className }` }>
            <h5 class="text-xl font-medium text-gray-900">{ props.label }</h5>


            { props.children }
        </div>
    )
}

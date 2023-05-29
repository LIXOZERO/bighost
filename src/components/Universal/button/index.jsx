import React from 'react'

import Progress from '../progress';
export default function Button ( props )
{
    return (
        <div className='p-2  '>
            <button { ...props } disabled={ props.loading } type="submit" className={ ` flex justify-center items-center w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ` }>{ props.loading == true ? <Progress size={ 24 } /> : props.label }</button>
        </div>
    )
}

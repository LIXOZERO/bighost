import React from 'react'

export default function Plancard ( { price, duration, children, label } )
{
    return (
        <div className='p-2'>



            <div className="w-full  max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
                <h5 className="mb-4 text-xl font-medium text-gray-500 ">Plano { label }</h5>
                <div className="flex items-baseline text-gray-900 ">

                    <span className="text-5xl font-extrabold tracking-tight">{ price }</span>            <span class="text-3xl font-semibold"> MT</span>
                    <span className="ml-1 text-xl font-normal text-gray-500 ">{ duration }</span>
                </div>
                <ul role="list" className="space-y-5 my-7">
                    { children }

                </ul>
                <button type="button" className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-200  font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Escolher Plano</button>
            </div>

        </div>
    )
}

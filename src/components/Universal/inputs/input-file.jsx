import React from 'react'
import { HiUpload } from 'react-icons/hi'

export default function Inputfile ( props )
{
    return (

        <div className="flex items-center justify-center w-full">
            <label for="select-file-to-bigHost" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 ">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <HiUpload className="w-10 h-10 mb-3 text-gray-400" />
                    <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Clique para carregar</span>ou arraste e soltep</p>
                    <p claclassNamess="text-xs text-gray-500 ">{ props.formatAllowed == undefined ? 'SVG, PNG, JPG ou , MP3 ,GIF' : props.formatAllowed } ({ props.maxSizeSubtitle == undefined ? '50MB' : props.maxSizeSubtitle })</p>
                </div>
                <input { ...props } id="select-file-to-bigHost" type="file" className="hidden" />
            </label>
        </div>
    )
}

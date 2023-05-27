import React from 'react'
import Lottie from "lottie-react";
import Preloader from '../../../../public/33744-loading-dots-white.json'

export default function Progress ( { size } )
{
    var s = size == undefined ? 30 : size
    return (

        <div className=' flex justify-center items-center' style={ { width: s, height: s } }>
            <Lottie animationData={ Preloader } loop={ true } />

        </div>
    )
}

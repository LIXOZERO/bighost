import { useState } from 'react'
import Link from 'next/link'
import { BsFacebook } from 'react-icons/bs'
import { HiMail } from 'react-icons/hi'
import { IoArrowBack, IoLockClosed } from 'react-icons/io5'
import Button from '@/components/Universal/button'
import Card from '@/components/Universal/cards'
import InputIcon from '@/components/Universal/inputs/input-icon'
import Google from '@/components/svg-icons/google'
import { Alert } from '@/components/alerts/alert'



export default function Login ()
{
    const [ loading, setLoading ] = useState( false )
    const [ email, setEmail ] = useState( '' )


    const handleSubmit = async ( event ) =>
    {
        event.preventDefault();
        setLoading( true )

        setLoading( false )
    }
    return (
        <div className=' h-screen bg-gradient-to-r from-cyan-500 to-green-500' >

            <div className='flex justify-center w-full pt-6'>
                <Card className='max-w-sm w-full ' label=''>
                    <Link href={ '/signin' }>          <IoArrowBack className='h-7 w-7' /></Link>
                    <h5 class="text-3xl font-medium text-gray-900">Login</h5>
                    <span className=' text-gray-600'>Digite seu e-mail para obter um link de redefinição de senha.</span>
                    <br />     <br />
                    <form onSubmit={ handleSubmit }>
                        < InputIcon required label='E-mail' type='email' placeholder='nome' icon={ <HiMail /> } />
                        <Button onClick={ () => Alert( 'Email enviado para seu@email.com' ) } loading={ loading } label='Entrar' />

                    </form>
                </Card >

            </div>
        </div>


    )
}

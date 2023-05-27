import { useState } from 'react'
import Link from 'next/link'
import { BsFacebook } from 'react-icons/bs'
import { HiMail } from 'react-icons/hi'
import { IoArrowBack, IoLockClosed } from 'react-icons/io5'
import Button from '@/components/Universal/button'
import Card from '@/components/Universal/cards'
import InputIcon from '@/components/Universal/inputs/input-icon'
import Google from '@/components/svg-icons/google'



export default function Login ()
{
    const [ loading, setLoading ] = useState( false )
    const [ email, setEmail ] = useState( '' )
    const [ password, setPassword ] = useState( '' )


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
                    <Link href={ '/' }>          <IoArrowBack /></Link>
                    <h5 class="text-xl font-medium text-gray-900">Login</h5>

                    <form onSubmit={ handleSubmit }>
                        <div className=' flex  flex-col w-full items-center'>
                            <div className='flex'>
                                <div className=' border rounded  w-10 m-1 h-10 flex justify-center items-center'>
                                    <Google />
                                </div>
                                <div className='rounded  border m-1 w-10 h-10 flex justify-center items-center'>
                                    <BsFacebook className='text-blue-600 h-7 w-7' />
                                </div>
                            </div>
                            <div className='p-2'>
                                <label>OU</label>
                            </div>
                        </div>
                        < InputIcon required label='E-mail' type='email' placeholder='nome' icon={ <HiMail /> } />
                        < InputIcon required label='Senha' type='password' placeholder='nome' icon={ <IoLockClosed /> } />
                        <div className="flex items-start">
                            <Link href="/recovery" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Senha perdida?</Link>
                        </div>
                        <Button loading={ loading } label='Entrar' />
                        <div className="text-sm font-medium text-gray-500 ">
                            Não registrado? <Link href="/signup" className="text-blue-700 hover:underline dark:text-blue-500">Criar Conta</Link>
                        </div>
                    </form>
                </Card >

            </div>
        </div>


    )
}

import { useState } from 'react'
import Link from 'next/link'
import { BsFacebook } from 'react-icons/bs'
import { HiMail } from 'react-icons/hi'
import { IoArrowBack, IoLockClosed } from 'react-icons/io5'
import Button from '@/components/Universal/button'
import Card from '@/components/Universal/cards'
import InputIcon from '@/components/Universal/inputs/input-icon'
import Google from '@/components/svg-icons/google'



export default function Signup ()
{
    const [ loading, setLoading ] = useState( false )
    const [ email, setEmail ] = useState( '' )
    const [ password, setPassword ] = useState( '' )
    const [ passwordConfirm, setPasswordConfirm ] = useState( '' )


    const handleSubmit = async ( event ) =>
    {
        event.preventDefault();
        setLoading( true )

        setLoading( false )
    }
    return (
        <div className=' h-screen bg-gradient-to-r from-cyan-500 to-green-500' >

            <div className='flex justify-center w-full pt-6'>
                <Card className='max-w-sm w-full ' label='Criar Conta'>

                    <form onSubmit={ handleSubmit }>
                        <div className=' flex  flex-col w-full items-center p-2'>
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
                        < InputIcon name='nome' required label='Nome' type='text' placeholder='Nome' />
                        < InputIcon name='email' required label='E-mail' type='email' placeholder='seunome@gmail.com' icon={ <HiMail /> } />
                        < InputIcon name='senha' required label='Senha' type='password' placeholder='#######' icon={ <IoLockClosed /> } />
                        <div class="flex items-start p-2">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                </div>
                                <label className="ml-2 text-sm font-medium text-gray-900 ">Aceitar os termos |  <Link href={ '#' } className=' ' style={ { fontSize: '9pt', textDecoration: 'underline' } }>Ver os termos</Link></label>
                            </div>
                        </div>
                        <Button loading={ loading } label='Entrar' />
                        <div className="text-sm font-medium text-gray-500 ">
                            Tens Conta? <Link href="/signin" className="text-blue-700 hover:underline dark:text-blue-500">Login</Link>
                        </div>
                    </form>
                </Card >

            </div>
        </div>


    )
}

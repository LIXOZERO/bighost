import Header from '@/components/Universal/Header'
import HeroMain from '@/components/Universal/HeroMain'

import { useContext } from 'react'
import MyContext from '@/context/MyContext'
import LoadingFullScreen from '@/components/Universal/LoadingFullScreen'
import { Able, Disabled, Plancard } from '@/components/Universal/plans'
import Wrapper from '@/components/Reusable/Wrapper'
import solution from '../../public/28784-businessmen-at-the-table.json'
import Lottie from 'lottie-react'
import { AiOutlineCheck } from 'react-icons/ai'

export default function Home ()
{
  const { loadingFullScreen } = useContext( MyContext )
  return (
    <>
      { loadingFullScreen ? (
        <LoadingFullScreen />
      ) : (
        <>
          <Header />
          <HeroMain />

          <div className=' w-full grid sm:grid-cols-2 lg:grid-cols-3 justify-center'>
            <Plancard price={ 100 } label={ 'Premium' } >
              <Able label={ '100 sites' } />
              <Able label={ 'Armazenamento SSD de 100 GB' } />
              <Able label={ 'Backups semanais' } />
              <Able label={ 'SSL Gratuito Ilimitado' } />
              <Able label={ 'largura de banda ilimitada' } />
              <Able label={ 'E-mail grátis' } />
              <Disabled label={ 'CDN grátis' } />
              <Disabled label={ 'Endereço IP Dedicado' } />


            </Plancard>

            <Plancard price={ 100 } label={ 'Business' } >
              <Able label={ '200 sites' } />
              <Able label={ 'Armazenamento SSD de 200 GB' } />
              <Able label={ 'Backups Diarios' } />
              <Able label={ 'SSL Gratuito Ilimitado' } />
              <Able label={ 'largura de banda ilimitada' } />
              <Able label={ 'E-mail grátis' } />
              <Able label={ 'CDN grátis' } />
              <Disabled label={ 'Endereço IP Dedicado' } />
            </Plancard>

            <Plancard price={ 100 } label={ 'Cloud Startup' } >
              <Able label={ '300 sites' } />
              <Able label={ 'Armazenamento SSD de 300 GB' } />
              <Able label={ 'Backups Diarios' } />
              <Able label={ 'SSL Gratuito Ilimitado' } />
              <Able label={ 'largura de banda ilimitada' } />
              <Able label={ 'E-mail grátis' } />
              <Able label={ 'CDN grátis' } />
              <Able label={ 'Endereço IP Dedicado' } />
            </Plancard>
          </div>


          <div className=' '>
            <Wrapper>
              <div>
                <div className='py-3'>
                  <h5 className=' text-3xl font-bold text-center'>Centros de dados em todo o mundo</h5>
                  <p className=' text-justify  md:text-center'> Nossos planos de hospedagem na web, hospedagem WordPress e hospedagem na nuvem oferecem localizações de servidores em: EUA, Reino Unido, França, Índia, Cingapura, Brasil, Lituânia e Holanda.</p>
                </div>
                <img src={ '/region-server.webp' } className='w-full' width={ 100 } height={ 100 } />



                <div className='w-full lg:flex'>
                  <div className=' lg:w-2/4'>
                    <h5 className=' text-3xl font-bold'>Solução de site tudo-em-um</h5>
                    <ul className=''>
                      <li className='flex items-center'><AiOutlineCheck className=' text-primary' /> <span>Gerencie até 100 sites.</span></li>
                      <li className='flex items-center'><AiOutlineCheck className=' text-primary' /> <span>Registre um nome de domínio gratuitamente.</span></li>

                      <li className='flex items-center'><AiOutlineCheck className=' text-primary' /> <span>Configure um endereço de e-mail comercial profissional.</span></li>
                      <li className='flex items-center'><AiOutlineCheck className=' text-primary' /> <span>Otimize seu fluxo de trabalho com hospedagem gerenciada do WordPress.</span></li>
                      <li className='flex items-center'><AiOutlineCheck className=' text-primary' /> <span>     Lance sites rapidamente com nosso Construtor de Sites.</span></li>



                    </ul>
                  </div>
                  <Lottie animationData={ solution } />
                </div>



              </div>

            </Wrapper>
          </div>

        </>
      )
      }
    </>
  )
}

import { Navbar } from '../components/Navbar';
import { Footer} from '../components/Footer';
import './page.css'

export default function Page() {
  return (
    <main className='bg-gray-800 text-gray-400 flex flex-col'>

      <Navbar /> 

      <div className='h-screen p-3 main'>
        <h1 className='text-3xl font-bold text-white'>Welcome</h1>
        <h2 className='text-white'>Hi I'm Tim!</h2>
      </div>

      <Footer />

    </main>
  )
}

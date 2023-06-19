import { FacebookLogo } from './components/FacebookLogo'
import { Form } from './components/Form'
import { NavBar } from './components/NavBar'

function App() {
  return (
    <div className='sm:bg-bgcolor'>
      <NavBar />
      <div className='mx-auto items-center sm:flex sm:h-screen sm:max-w-5xl sm:justify-around'>
        <FacebookLogo />
        <Form />
      </div>
    </div>
  )
}

export default App

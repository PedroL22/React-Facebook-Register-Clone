import { GrLinkedinOption } from 'react-icons/gr'
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'

export const NavBar = () => {
  return (
    <nav className='relative flex w-screen justify-center sm:fixed sm:justify-between'>
      <div />
      <ul className='m-5 flex'>
        <li>
          <a
            href='https://www.linkedin.com/in/pedrolucena22/'
            target='_blank'
            rel='noreferrer'
          >
            <GrLinkedinOption
              className='mx-3 text-[#00639c]'
              size={50}
            />
          </a>
        </li>
        <li>
          <a
            href='https://github.com/PedroL22/'
            target='_blank'
            rel='noreferrer'
          >
            <AiFillGithub
              className='mx-3 text-black'
              size={50}
            />
          </a>
        </li>
        <li>
          <a
            href='https://twitter.com/lucena_l22/'
            target='_blank'
            rel='noreferrer'
          >
            <AiOutlineTwitter
              className='mx-3 text-[#1d9bf0]'
              size={50}
            />
          </a>
        </li>
      </ul>
    </nav>
  )
}

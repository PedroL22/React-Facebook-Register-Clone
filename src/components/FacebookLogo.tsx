import Logo from '../assets/images/facebook-logo.png'

export const FacebookLogo = () => {
  return (
    <div className='sm:-mt-40'>
      <img
        src={Logo}
        alt='facebook logo'
        className='mx-auto w-32 sm:mx-0 sm:w-64'
      />
      <h1 className='-mt-10 hidden text-2xl sm:flex'>
        Connect with friends and the world <br /> around you on Facebook.
      </h1>
    </div>
  )
}

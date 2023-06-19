export const Form = () => {
  return (
    <div>
      <div className='rounded-lg bg-white px-4 py-4 sm:max-w-sm sm:shadow-xl'>
        <form>
          <input
            type='text'
            placeholder='Email or phone number'
            className='focus:border-primary mx-auto mb-4 flex w-full rounded-md border border-gray-300 py-3 pl-4 pr-36 focus:shadow-sm focus:outline-none focus:placeholder:text-gray-300'
          />
          <input
            type='text'
            placeholder='Password'
            className='focus:border-primary mx-auto my-4 flex w-full rounded-md border border-gray-300 py-3 pl-4 pr-36 focus:shadow-sm focus:outline-none focus:placeholder:text-gray-300'
          />
          <button
            type='submit'
            className='bg-primary hover:bg-primaryhover mx-auto my-4 flex w-full whitespace-nowrap rounded-md px-40 py-3 text-xl font-medium text-white transition-all duration-100 ease-in sm:px-36'
          >
            Log In
          </button>
        </form>
        <p className='text-primary cursor-pointer text-center hover:underline'>
          Forgot password?
        </p>
        <hr className='mx-3 my-5 w-auto' />
        <button className='bg-secondary hover:bg-secondaryhover mx-auto my-4 flex rounded-md px-4 py-2 text-lg font-medium text-white transition-all duration-100 ease-in'>
          Create new account
        </button>
      </div>
      <p className='hidden pt-5 text-center sm:block'>
        <span className='cursor-pointer font-medium hover:underline'>
          Create a Page
        </span>{' '}
        for a celebrity, brand or business.
      </p>
    </div>
  )
}

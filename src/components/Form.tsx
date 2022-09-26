export default function Form() {
	return (
		<div>
			<div className="sm:shadow-lg bg-white rounded-lg sm:max-w-sm py-4 px-4">
				<form>
					<input
						type="text"
						placeholder="Email or phone number"
						className="flex mx-auto py-3 pl-4 pr-36 w-full mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-primary focus:shadow-sm focus:placeholder:text-gray-300"
					/>
					<input
						type="text"
						placeholder="Password"
						className="flex mx-auto py-3 pl-4 pr-36 w-full my-4 border border-gray-300 rounded-md focus:outline-none focus:border-primary focus:shadow-sm focus:placeholder:text-gray-300"
					/>
					<button
						type="submit"
						className="flex mx-auto py-3 px-40 w-full sm:px-36 my-4 whitespace-nowrap rounded-md bg-primary text-xl text-white font-medium hover:bg-primaryhover transition-all duration-100 ease-in"
					>
						Log In
					</button>
				</form>
				<p className="text-center text-primary hover:underline cursor-pointer">
					Forgot password?
				</p>
				<hr className="w-auto mx-3 my-5" />
				<button className="flex mx-auto py-2 px-4 my-4 rounded-md bg-secondary text-lg text-white font-medium hover:bg-secondaryhover transition-all duration-100 ease-in">
					Create new account
				</button>
			</div>
			<p className="sm:block hidden text-center pt-5">
				<span className="font-medium hover:underline cursor-pointer">
					Create a Page
				</span>{" "}
				for a celebrity, brand or business.
			</p>
		</div>
	);
}

export default function Form() {
	return (
		<div>
			<div className="shadow-lg sm:max-w-sm pb-12">
				<form action="">
					<input
						type="text"
						placeholder="Email or phone number"
						className="flex mx-auto py-3 pl-4 pr-40 my-4 border border-gray-300 rounded-md focus:outline-none focus:border-primary focus:shadow-sm focus:placeholder:text-gray-300"
					/>
					<input
						type="text"
						placeholder="Password"
						className="flex mx-auto py-3 pl-4 pr-40 my-4 border border-gray-300 rounded-md focus:outline-none focus:border-primary focus:shadow-sm focus:placeholder:text-gray-300"
					/>
					<button
						type="submit"
						className="flex mx-auto py-3 px-[9.5rem] my-4 rounded-md bg-primary text-xl text-white font-medium hover:bg-primaryhover transition-all duration-100 ease-in"
					>
						Log In
					</button>
				</form>
				<p className="text-center text-primary hover:underline cursor-pointer">
					Forgot password?
				</p>
				<hr className="w-auto mx-3 my-3" />
			</div>
		</div>
	);
}

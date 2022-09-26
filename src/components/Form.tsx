export default function Form() {
	return (
		<div>
			<div className="shadow-lg sm:max-w-sm pb-12">
				<form action="">
					<input
						type="text"
						placeholder="Email or phone number"
						className="flex mx-auto py-3 pl-4 pr-40 my-4 border border-gray-300 rounded-md"
					/>
					<input
						type="text"
						placeholder="Password"
						className="flex mx-auto py-3 pl-4 pr-40 my-4 border border-gray-300 rounded-md"
					/>
					<button
						type="submit"
						className="flex mx-auto py-3 px-[9.5rem] my-4 rounded-md bg-primary text-xl text-white font-medium"
					>
						Log In
					</button>
				</form>
			</div>
		</div>
	);
}

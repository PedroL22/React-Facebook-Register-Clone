import Logo from "../assets/images/facebook-logo.png";

export default function FacebookLogo() {
	return (
		<div className="sm:-mt-40">
			<img
				src={Logo}
				alt="facebook logo"
				className="sm:w-64 w-32 sm:mx-0 mx-auto"
			/>
			<h1 className="sm:flex hidden text-2xl -mt-10">
				Connect with friends and the world <br /> around you on Facebook.
			</h1>
		</div>
	);
}

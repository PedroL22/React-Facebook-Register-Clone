import FacebookLogo from "./components/FacebookLogo";
import Form from "./components/Form";

function App() {
	return (
		<div className="sm:bg-bgcolor">
			<div className="sm:max-w-5xl sm:h-[45rem] mx-auto sm:flex sm:justify-around items-center">
				<FacebookLogo />
				<Form />
			</div>
		</div>
	);
}

export default App;

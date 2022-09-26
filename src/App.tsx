import FacebookLogo from "./components/FacebookLogo";
import Form from "./components/Form";

function App() {
	return (
		<div className="bg-bgcolor">
			<div className="max-w-5xl h-screen mx-auto flex justify-around">
				<FacebookLogo />
				<Form />
			</div>
		</div>
	);
}

export default App;

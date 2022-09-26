import FacebookLogo from "./components/FacebookLogo";
import Form from "./components/Form";
import NavBar from "./components/NavBar";

function App() {
	return (
		<div className="sm:bg-bgcolor">
			<NavBar />
			<div className="sm:max-w-5xl sm:h-screen mx-auto sm:flex sm:justify-around items-center">
				<FacebookLogo />
				<Form />
			</div>
		</div>
	);
}

export default App;

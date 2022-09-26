import { GrLinkedinOption } from "react-icons/gr";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";

export default function NavBar() {
	return (
		<nav className="sm:fixed relative flex sm:justify-between justify-center w-screen">
			<div />
			<ul className="flex m-5">
				<li>
					<a
						href="https://www.linkedin.com/in/pedrolucena22/"
						target="_blank"
						rel="noreferrer"
					>
						<GrLinkedinOption className="text-[#00639c] mx-3" size={50} />
					</a>
				</li>
				<li>
					<a
						href="https://github.com/PedroL22/"
						target="_blank"
						rel="noreferrer"
					>
						<AiFillGithub className="text-black mx-3" size={50} />
					</a>
				</li>
				<li>
					<a
						href="https://twitter.com/lucena_l22/"
						target="_blank"
						rel="noreferrer"
					>
						<AiOutlineTwitter className="text-[#1d9bf0] mx-3" size={50} />
					</a>
				</li>
			</ul>
		</nav>
	);
}

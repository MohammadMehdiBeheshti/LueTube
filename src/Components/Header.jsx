import { useState } from "preact/hooks";
import { Logo, SearchIcon, DarkIcon, LightIcon } from "./Icons";
import isMobile from "../utilities/isMobile";

export default function Header({ setOpenInputPrompt, handleSearch }) {
	const [theme, setTheme] = useState(0);

	const themeSchemeToggle = () => {
		const bodyStyle = document.body.style;
		document.documentElement.classList.toggle("dark");
		bodyStyle.backgroundColor = theme ? "#322653" : "#121212";
		setTheme((t) => (t ? 0 : 1));
	};

	return (
		<header className="mb-8 bg-lightPurple dark:bg-blackGray">
			<nav className="contain h-10 flex justify-between items-center">
				<Logo w={180} />
				<div className="flex items-center">
					<section className="w-35 h-5 pl-1 rounded-def flex items-center bg-darkGray">
						<SearchIcon />
						<input
							type="search"
							name="searchBar"
							placeholder="Search..."
							className="input"
							onInput={handleSearch}
						/>
					</section>
					<button
						type="button"
						className="btn ml-2 w-12 h-5"
						onClick={() => setOpenInputPrompt(true)}
					>
						Add item
					</button>
					<button
						type="button"
						className="btn ml-2 w-5 h-5"
						onClick={themeSchemeToggle}
					>
						{theme ? <LightIcon /> : <DarkIcon />}
					</button>
				</div>
			</nav>
		</header>
	);
}

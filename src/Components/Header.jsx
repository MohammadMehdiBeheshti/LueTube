import { useState } from "preact/hooks";
import { Logo, SearchIcon, DarkIcon, LightIcon } from "./Icons";
import isMobile from "../utilities/isMobile";

export default function Header({ setOpenInputPrompt, handleSearch }) {
	const [theme, setTheme] = useState(0);
	const [hamMenu, setHamMenu] = useState(false);

	const themeSchemeToggle = () => {
		const bodyStyle = document.body.style;
		document.documentElement.classList.toggle("dark");
		bodyStyle.backgroundColor = theme ? "#322653" : "#121212";
		setTheme((t) => (t ? 0 : 1));
	};

	if (isMobile())
		return (
			<header className="mb-8 bg-lightPurple dark:bg-blackGray">
				<nav className="contain h-10 flex justify-between items-center">
					<Logo className="w-12" />
					<div
						role="button"
						className="w-3 h-2.5 flex flex-col justify-between items-center"
						onClick={() => setHamMenu((h) => !h)}
					>
						<span className="w-full h-0.4 rounded-def bg-white"></span>
						<span className="w-full h-0.4 rounded-def bg-white"></span>
						<span className="w-full h-0.4 rounded-def bg-white"></span>
					</div>
					<section
						className={`flex items-center flex-col w-[80%] px-2 absolute top-0 bottom-0 left-0 z-20 bg-blackPurple ${
							!hamMenu && "hidden"
						}`}
					>
						<Logo className="w-15 mt-3" />
						<section
							role="search"
							className="w-full h-3.5 pl-1 mt-4 rounded-def flex items-center bg-darkGray"
						>
							<SearchIcon />
							<input
								type="search"
								name="searchBar"
								placeholder="Search..."
								className="input"
								onInput={handleSearch}
							/>
						</section>
						<div className="w-full mt-2 flex items-center">
							<button
								type="button"
								className="btn w-full h-3.5"
								onClick={() => setOpenInputPrompt(true)}
							>
								Add items
							</button>
							<button
								type="button"
								className="btn ml-2 w-5 h-3.5"
								onClick={themeSchemeToggle}
							>
								{theme ? <LightIcon /> : <DarkIcon />}
							</button>
						</div>
					</section>
				</nav>
			</header>
		);

	return (
		<header className="mb-8 bg-lightPurple dark:bg-blackGray">
			<nav className="contain h-10 flex justify-between items-center">
				<Logo className="lg:w-15 md:w-10" />
				<div className="flex items-center">
					<section
						role="search"
						className="w-35 h-5 pl-1 ml-2 rounded-def flex items-center bg-darkGray lg:w-full lg:h-4"
					>
						<SearchIcon />
						<input
							type="search"
							name="searchBar"
							placeholder="Search..."
							className="input lg:text-sm"
							onInput={handleSearch}
						/>
					</section>
					<button
						type="button"
						className="btn ml-2 w-12 h-5 lg:w-12 lg:h-4 lg:text-sm"
						onClick={() => setOpenInputPrompt(true)}
					>
						Add item
					</button>
					<button
						type="button"
						className="btn ml-2 w-5 h-5 lg:w-6.4 lg:h-4"
						onClick={themeSchemeToggle}
					>
						{theme ? <LightIcon /> : <DarkIcon />}
					</button>
				</div>
			</nav>
		</header>
	);
}

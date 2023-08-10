import { Logo, SearchIcon } from "./Icons";

export default function Header() {
	return (
		<header className="mb-8 bg-lightPurple">
			<nav className="contain h-10 flex justify-between items-center">
				<Logo w={180} />
				<div className="flex items-center">
					<section className="w-35 h-5 pl-1 rounded-def flex items-center bg-darkGray">
						<SearchIcon />
						<input type="search" placeholder="Search..." className="input" />
					</section>
					<button type="button" className="btn ml-2 h-5">
						Add item
					</button>
				</div>
			</nav>
		</header>
	);
}

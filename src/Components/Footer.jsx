import { Logo } from "./Icons.jsx";

export default function Footer({ cards }) {
	return cards.length ? (
		<footer className="h-7 flex items-center mt-8 bg-lightPurple dark:bg-blackGray">
			<div className="contain flex justify-between items-center">
				<span className="text-md font-fontSB">All rights reserved :(</span>
				<Logo className="w-15" />
			</div>
		</footer>
	) : null;
}

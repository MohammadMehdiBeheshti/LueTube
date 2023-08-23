import { Logo } from "./Icons.jsx";

export default function Footer({ cards }) {
	return cards.length ? (
		<footer className="contain h-7 mt-8 flex justify-between items-center rounded-def bg-lightPurple">
			<span className="text-md font-fontSB">All rights reserved :(</span>
			<Logo w={150} />
		</footer>
	) : null;
}

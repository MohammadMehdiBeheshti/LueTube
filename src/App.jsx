import { useState } from "preact/hooks";
import InputPrompt from "./Components/InputPrompt.jsx";
import Header from "./Components/Header.jsx";
import Main from "./Components/Main.jsx";
import Footer from "./Components/Footer.jsx";

export default function App() {
	const [cards, setCards] = useState([]);
	const [filteredCards, setFilteredCards] = useState([]);
	const [openInputPrompt, setOpenInputPrompt] = useState(false);

	const handleSearch = (e) => {
		const value = e.currentTarget.value.toLowerCase();

		if (value) {
			const filteredData = cards.filter((each) =>
				each.title.toLowerCase().includes(value)
			);
			setFilteredCards(filteredData);
		} else {
			setFilteredCards(cards);
		}
	};

	return (
		<>
			<div className={openInputPrompt ? "blur-md pointer-events-none" : null}>
				<Header
					setOpenInputPrompt={setOpenInputPrompt}
					handleSearch={handleSearch}
				/>
				<Main cards={filteredCards} />
				<Footer cards={cards} />
			</div>
			<InputPrompt
				hidden={openInputPrompt}
				setOpenInputPrompt={setOpenInputPrompt}
				setFilteredCards={setFilteredCards}
				setCards={setCards}
			/>
		</>
	);
}

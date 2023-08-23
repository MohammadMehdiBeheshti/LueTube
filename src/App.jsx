import { useState } from "preact/hooks";
import InputPrompt from "./Components/InputPrompt.jsx";
import Header from "./Components/Header.jsx";
import Main from "./Components/Main.jsx";
import Footer from "./Components/Footer.jsx";

export default function App() {
	const [cards, setCards] = useState([]);
	const [openInputPrompt, setOpenInputPrompt] = useState(false);
	const previousData = structuredClone(data);

	const handleSearch = (e) => {
		const value = e.currentTarget.value;
		if (value) {
			const filteredData = previousData.filter((each) =>
				each.title.toLowerCase().includes(value.toLowerCase())
			);
			setCards(filteredData);
		} else {
			setCards(dummyData);
		}
	};

	return (
		<>
			<div className={openInputPrompt && "blur-md pointer-events-none"}>
				<Header
					setOpenInputPrompt={setOpenInputPrompt}
					handleSearch={handleSearch}
				/>
				<Main cards={cards} />
				<Footer cards={cards} />
			</div>
			<InputPrompt
				hidden={openInputPrompt}
				setOpenInputPrompt={setOpenInputPrompt}
				setCards={setCards}
			/>
		</>
	);
}

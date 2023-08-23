export default function Main({ cards }) {
	return (
		<main className="contain flex justify-center items-center flex-wrap gap-5">
			{cards.length ? cards.map((eachCard) => <Card data={eachCard} />) : null}
		</main>
	);
}

function Card({ data }) {
	const { title, imgURL, link, description, date } = data;

	const openLinks = (url) => {
		window.open(url, "_blank");
	};

	return (
		<div className="w-35 rounded-def bg-black overflow-hidden">
			<img
				src={imgURL}
				alt="Card"
				loading="lazy"
				className="w-full h-20 object-cover"
			/>
			<h2 className="text-lg font-fontBold m-2">{title}</h2>
			<p className="text-sm mx-2">{description}</p>
			<section className="flex justify-between items-center mx-2 mt-3 mb-2">
				<span className="font-fontSB">{date}</span>
				<button type="button" className="btn" onClick={() => openLinks(link)}>
					View
				</button>
			</section>
		</div>
	);
}

export default function Main({ cards }) {
	return (
		<main className="contain flex justify-center items-center flex-wrap gap-5">
			{cards.length ? cards.map((eachCard) => <Card data={eachCard} />) : null}
		</main>
	);
}

function Card({ data }) {
	const { title, imgURL, link, description, date } = data;

	return (
		<div className="w-35 rounded-def bg-blackPurple overflow-hidden">
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
				<a className="btn w-12 flex justify-center items-center" href={link}>
					View
				</a>
			</section>
		</div>
	);
}

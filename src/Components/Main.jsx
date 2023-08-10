export default function Main() {
	return (
		<main className="contain">
			<Card />
		</main>
	);
}

function Card() {
	return (
		<div className="w-35 rounded-def bg-black overflow-hidden">
			<img
				src="https://melchettmike.files.wordpress.com/2011/12/charedim-2.jpg"
				alt="Card"
				loading="lazy"
				className="w-full h-20 object-cover"
			/>
			<h2 className="text-lg font-fontBold m-2">Disgusting Jew</h2>
			<p className="text-sm mx-2">
				This impressive paella is a perfect party dish and a fun meal to cook
				together with your guests. Add 1 cup of frozen peas along with the
				mussels, if you like.
			</p>
			<section className="flex justify-between items-center mx-2 mt-3 mb-2">
				<span className="font-fontSB">September 14, 2013</span>
				<button type="button" className="btn">
					View
				</button>
			</section>
		</div>
	);
}

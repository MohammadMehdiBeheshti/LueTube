import { HeadingIcon, ImgIcon, LinkIcon } from "./Icons";

export default function InputPrompt({ hidden }) {
	{
		return (
			hidden && (
				<form className="center w-35 p-2 rounded-def z-10 bg-lightPurple">
					<section className="h-5 pl-1 mb-2 rounded-def flex items-center bg-darkGray">
						<HeadingIcon />
						<input type="text" placeholder="Heading..." className="input" />
					</section>

					<section className="h-5 pl-1 mb-2 rounded-def flex items-center bg-darkGray">
						<ImgIcon />
						<input type="text" placeholder="Image URL..." className="input" />
					</section>

					<section className="h-5 pl-1 mb-2 rounded-def flex items-center bg-darkGray">
						<LinkIcon />
						<input type="text" placeholder="Direct link..." className="input" />
					</section>

					<textarea
						cols="31"
						placeholder="Description..."
						className="textArea mb-1.5"
					></textarea>

					<button type="submit" className="btn w-full h-5 text-mdp">
						Add
					</button>
				</form>
			)
		);
	}
}

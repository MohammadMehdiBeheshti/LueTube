import { useState } from "preact/hooks";
import { HeadingIcon, ImgIcon, LinkIcon, XIcon } from "./Icons";

export default function InputPrompt({
	hidden,
	setOpenInputPrompt,
	setFilteredCards,
	setCards,
}) {
	const [form, setForm] = useState({
		title: "",
		imgURL: "",
		link: "",
		description: "",
		date: new Date().toDateString(),
	});

	const useForm = (e) => {
		const target = e.currentTarget;
		setForm((f) => ({
			...f,
			[target.name]: target.value,
		}));
	};

	const handleForm = (e) => {
		e.preventDefault();
		setOpenInputPrompt(false);
		if (Object.values(form).every((each) => each) === false) return;
		setCards((c) => [...c, form]);
		setFilteredCards((c) => [...c, form]);
		setForm({
			title: "",
			imgURL: "",
			link: "",
			description: "",
			date: new Date().toDateString(),
		});
	};

	return (
		hidden && (
			<form
				className="form center w-35 p-2 rounded-def z-10 bg-lightPurple dark:bg-blackGray"
				onSubmit={handleForm}
			>
				<h2 className="text-center text-xlg font-bold mb-2">Add new item</h2>
				<section className="h-5 pl-1 mb-2 rounded-def flex items-center bg-darkGray">
					<HeadingIcon />
					<input
						type="text"
						name="title"
						placeholder="Heading..."
						className="input"
						onChange={useForm}
						value={form.title}
						required
					/>
				</section>

				<section className="h-5 pl-1 mb-2 rounded-def flex items-center bg-darkGray">
					<ImgIcon />
					<input
						type="text"
						name="imgURL"
						placeholder="Image URL..."
						className="input"
						onChange={useForm}
						value={form.imgURL}
						required
					/>
				</section>

				<section className="h-5 pl-1 mb-2 rounded-def flex items-center bg-darkGray">
					<LinkIcon />
					<input
						type="text"
						name="link"
						placeholder="Direct link..."
						className="input"
						onChange={useForm}
						value={form.link}
						required
					/>
				</section>

				<textarea
					cols="31"
					name="description"
					placeholder="Description..."
					className="textArea mb-1.5"
					onChange={useForm}
					value={form.description}
					required
				></textarea>

				<button type="submit" className="btn w-full h-5 text-mdp">
					Add
				</button>

				<button
					type="button"
					className="absolute z-10 top-0 right-0"
					onClick={() => setOpenInputPrompt(false)}
				>
					<XIcon />
				</button>
			</form>
		)
	);
}

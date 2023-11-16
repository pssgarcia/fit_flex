export function Contact() {
	return (
		<section id="contact" className="bg-lightGold flex justify-center py-10">
			<form className="bg-white w-[87%] md:w-full max-w-screen-md p-8 flex flex-col gap-y-5">
				<h2 className="text-center font-bold text-3xl md:text-5xl">
					Contact Us
				</h2>
				<section className="grid grid-cols-1 md:grid-cols-2 gap-5">
					<aside className="flex flex-col gap-y-2 text-grayBg">
						<label htmlFor="address" className="md:text-xl">
							Address:
						</label>
						<input
							className="h-10 md:h-12 bg-gray-100 w-full border border-gray-400"
							type="text"
							name="address"
							id="address"
						/>
					</aside>
					<aside className="flex flex-col gap-y-2 text-grayBg">
						<label htmlFor="name" className="md:text-xl">
							Name:
						</label>
						<input
							className="h-10 md:h-12 bg-gray-100 w-full border border-gray-400"
							type="text"
							name="name"
							id="name"
						/>
					</aside>
				</section>
				<section className="grid grid-cols-1 md:grid-cols-2 gap-5">
					<aside className="flex flex-col gap-y-2 text-grayBg">
						<label htmlFor="phone" className="md:text-xl">
							Phone:
						</label>
						<input
							className="h-10 md:h-12 bg-gray-100 w-full border border-gray-400"
							type="number"
							name="phone"
							id="phone"
						/>
					</aside>
					<aside className="flex flex-col gap-y-2 text-grayBg">
						<label htmlFor="date" className="md:text-xl">
							Date:
						</label>
						<input
							className="h-10 md:h-12 bg-gray-100 w-full border border-gray-400"
							type="date"
							name="date"
							id="date"
						/>
					</aside>
				</section>
				<aside className="flex flex-col gap-y-2 text-grayBg">
					<label htmlFor="message">Message:</label>
					<textarea
						name="message"
						id="message"
						placeholder="Enter your message"
						rows={5}
						className="p-2 border bg-gray-100 border-gray-400 resize-none"
					></textarea>
				</aside>
				<button
					type="submit"
					className="uppercase bg-grayBg text-white p-3 font-semibold tracking-wide md:text-xl"
				>
					Submit
				</button>
			</form>
		</section>
	);
}

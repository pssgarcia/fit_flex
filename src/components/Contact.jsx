export function Contact() {
	return (
		<section className="bg-lightGold flex justify-center py-10">
			<form className="bg-white w-80 p-8 flex flex-col gap-y-5">
				<h2 className="text-center font-bold text-3xl">Contact Us</h2>
				<aside className="flex flex-col gap-y-2 text-grayBg">
					<label htmlFor="address">Address:</label>
					<input
						className="p-2 border border-gray-400"
						type="text"
						name="address"
						id="address"
					/>
				</aside>
				<aside className="flex flex-col gap-y-2 text-grayBg">
					<label htmlFor="name">Name:</label>
					<input
						className="p-2 border border-gray-400"
						type="text"
						name="name"
						id="name"
					/>
				</aside>
				<aside className="flex flex-col gap-y-2 text-grayBg">
					<label htmlFor="phone">Phone:</label>
					<input
						className="p-2 border border-gray-400"
						type="number"
						name="phone"
						id="phone"
					/>
				</aside>
				<aside className="flex flex-col gap-y-2 text-grayBg">
					<label htmlFor="date">Date:</label>
					<input
						className="p-2 border border-gray-400"
						type="date"
						name="date"
						id="date"
					/>
				</aside>
				<aside className="flex flex-col gap-y-2 text-grayBg">
					<label htmlFor="message">Message:</label>
					<textarea
						name="message"
						id="message"
						placeholder="Enter your message"
                  rows={5}
                  className="p-2 border border-gray-400"
					></textarea>
				</aside>
            <button type="submit" className="uppercase bg-grayBg text-white p-3 font-semibold tracking-wide">Submit</button>
			</form>
		</section>
	);
}

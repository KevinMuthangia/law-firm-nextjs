const Contact = () => {
	return (
		<section className="bg-slate-200 padding-x py-6 lg:py-12 grid grid-cols-1 lg:grid-cols-2 gap-4">
			<div className="flex-1">
				<h2 className="text-slate-800">Secure <br className="hidden lg:block" /> Free Consultation</h2>
				<p className="my-2 lg:my-4 text-lg text-slate-600">
					Legal matters are intricate and overlooking them can lead to significant challenges. Let us guide you through. Reach out today!
				</p>
				<p className="text-lg text-slate-600"><span className="uppercase font-medium">Phone: </span><a className="hover:text-blue-400" href="tel:+1 712- 332- 6543">+1 712- 332- 6543</a></p>
				<p className=" my-2 text-lg text-slate-600"><span className="uppercase font-medium">email: </span><a className="hover:text-blue-400" href="mailto:info@jurispro.com">info@jurispro.com</a></p>
				<p className="text-lg text-slate-600"><span className="uppercase font-medium">ADDRESS: </span>282 N. glenwood street, levittown, ny</p>
			</div>
			<div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-3">
				<div>
					<label className="text-slate-600" htmlFor="firstName">First Name</label>
					<input
						className="w-full py-2 px-4 rounded outline-none"
						type="text"
						name="firstName"
						id="firstName"
						placeholder="John*"
					/>
				</div>
				<div>
					<label className="text-slate-600" htmlFor="lastName">Last Name</label>
					<input
						className="w-full py-2 px-4 rounded outline-none"
						type="text"
						name="lastName"
						id="lastName"
						placeholder="Doe*"
					/>
				</div>
				<div>
					<label className="text-slate-600" htmlFor="email">Email</label>
					<input
						className="w-full py-2 px-4 rounded outline-none"
						type="email"
						name="email"
						id="email"
						placeholder="johndoe@gmail.com*"
					/>
				</div>
				<div>
					<label className="text-slate-600" htmlFor="phoneNumber">Phone Number</label>
					<input
						className="w-full py-2 px-4 rounded outline-none"
						type="phoneNumber"
						name="phoneNumber"
						id="phoneNumber"
						placeholder="johndoe@gmail.com*"
					/>
				</div>
				<div className="lg:col-span-2">
					<label className="text-slate-600" htmlFor="departmentEmail">Department Email</label>
					<select id="departmentEmail" className="capitalize w-full py-2 px-4 text-lg rounded outline-none">
						<option>Corporate Law</option>
						<option>Tax Law</option>
						<option>insurance Law</option>
						<option>health Law</option>
					</select>
				</div>
				<div className="lg:col-span-2">
					<label className="text-slate-600" htmlFor="message">Message</label>
					<textarea  className="w-full py-2 px-4 rounded outline-none resize-none" name="message" id="message" rows={8} placeholder="Write something..." />
				</div>
				<button className="py-2 px-4 rounded bg-blue-400 text-lg text-[#fcfcfc]">Submit</button>
			</div>
		</section>
	);
};

export default Contact;
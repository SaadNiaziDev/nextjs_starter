import Link from "next/link";
import { users } from "../../db.json";
export default function Users() {
	return (
		<>
			<Link className='underline' href={`/`}>
				Back
			</Link>
			<div className='container mx-auto w-full'>
				{users.map((item, i) => (
					<div key={i} class='card card-bordered card-normal bg-stone-700'>
						<div class='card-body'>
							<h2 class='card-title'>{item.name}</h2>
							<p>
								<strong>Username:</strong> {item.username}
							</p>
							<p>
								<strong>Email:</strong> {item.email}
							</p>
							<p>
								<strong>Address:</strong> {item.address.street + "," + item.address.suite + "," + item.address.city}
							</p>
							<p>
								<strong>Phone:</strong> {item.phone}
							</p>
							<p>
								<strong>Website:</strong> <a href={`http://${item.website}}`}>{item.website}</a>
							</p>
							<p>
								<strong>Company:</strong> {item.company.name}
							</p>
							<p>
								<strong>Catchphrase:</strong> {item.company.catchPhrase}
							</p>
							<p>
								<strong>Business:</strong> {item.company.bs}
							</p>
						</div>
					</div>

					// 	<div className='w-96 rounded-2xl'></div>
					// 	<div className='card-title'>{item.name}</div>
					// 	<div></div>
					// 	<div>{item.email}</div>
					// 	<div>{item.username}</div>
					// </div>
				))}
			</div>
		</>
	);
}

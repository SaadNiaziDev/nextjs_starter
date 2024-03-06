import { users } from "../../../db.json";

export default function UserID({ params }) {
	const userData = users[params.userId];
	return (
		<div className='card'>
			<div className='text-bold'>{userData?.name}</div>
		</div>
	);
}

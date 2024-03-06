import Image from "next/image";
import { users } from "../db.json";
import Link from "next/link";

const Post = ({ data }) => {
	return (
		<div className='card bg-stone-700 text-primary-content '>
			<div className='card-body'>
				<div className='flex justify-start gap-2'>
					<div className='avatar flex items-center'>
						<div className='w-8 rounded-full border-solid border border-black'>
							<Image src='/static/avatar.svg' width={24} height={24} alt='avatar' />
						</div>
					</div>
					<Link className='font-bold text-blue-900 self-baseline' href={`/users/${data.userId}`}>
						{users[data.userId]?.username}
					</Link>
				</div>
				<div className='text-xl'>{data.title}</div>
				<div className='text-lg'>{data.body}</div>
				<div className='flex justify-start gap-5 align-middle'>
					<div className='text-sm hover:text-blue-700 cursor-pointer'>Likes</div>
					<div className='text-sm hover:text-blue-700 cursor-pointer'>Comments</div>
					<div className='text-sm hover:text-blue-700 cursor-pointer'>Share</div>
				</div>
			</div>
		</div>
	);
};

export default Post;

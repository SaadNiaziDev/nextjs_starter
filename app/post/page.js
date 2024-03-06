import Post from "@/components/Post";
import db from "../../db.json";

export default function PostId({ params }) {
	return (
		<div className='container mx-auto'>
			<div className='grid grid-cols-4 gap-2'>
				{db.post.map((item, i) => (
					<Post data={item} key={i} />
				))}
			</div>
		</div>
	);
}

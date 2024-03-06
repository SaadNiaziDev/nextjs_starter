export async function GET() {
	let response = await fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json());
	return Response.json({ data: response });
}

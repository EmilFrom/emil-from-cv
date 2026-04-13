export async function GET(context) {
	return Response.redirect(new URL('/', context.url), 302);
}

export async function BlogPage() {
  return (
    <>
      <title>Blog Page</title>
      <meta name="description" content="This is the blog page." />
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-xl font-bold uppercase">Blog Page</h2>
        <p className="my-2 text-sm text-gray-300">
          lorem ipsum dolor sit amet, <b>consectetur</b> adipiscing elit, sed do
        </p>

        <a href="/">+ home</a>
      </div>
    </>
  );
}

export async function HomePage() {
  return (
    <>
      <title>Home Page</title>
      <meta name="description" content="This is the home page." />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-bold uppercase">Home Page</h2>
        <p className="my-2 text-sm text-gray-300">
          lorem ipsum dolor sit amet, <b>consectetur</b> adipiscing elit, sed do
        </p>
        <a href="/blog">+ blog</a> <a href="/contact">+ contact</a>
      </div>
    </>
  );
}

export async function HomePage() {
  return (
    <>
      <title>Home Page</title>
      <meta name="description" content="This is the home page." />
      <div className="m-6">
        <h2 className="text-xl font-bold">Home Page</h2>
        <p className="my-2">
          lorem ipsum dolor sit amet, <b>consectetur</b> adipiscing elit, sed do
        </p>
        <a href="/blog">+ blog</a> <a href="/contact">+ contact</a>
      </div>
    </>
  );
}

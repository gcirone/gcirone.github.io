export async function AboutPage() {
  return (
    <>
      <title>About Page</title>
      <meta name="description" content="This is the about page." />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-bold uppercase">About Page</h2>

        <p className="my-2 text-sm text-gray-300">
          lorem ipsum dolor sit amet, <b>consectetur</b> adipiscing elit, sed do
        </p>

        <a href="/">+ home</a>
      </div>
    </>
  );
}

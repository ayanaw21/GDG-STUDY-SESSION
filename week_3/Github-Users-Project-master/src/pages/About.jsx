const About = () => {
  return (
    <section className="flex justify-center items-center bg-gradient-to-r from-green-100 via-green-200 to-green-100 min-h-screen">
      <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-md text-center transform transition-transform duration-300 hover:scale-105">
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          About GitHub Explorer
        </h1>
        <p className="text-gray-700 mb-6">
          GitHub Explorer is a simple and elegant way to explore GitHub users.
          Whether you're a programmer, developer, or just curious, this platform
          is for everyone. Discover profiles, followers, repositories, and more!
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 text-white bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
        >
          Back to Home
        </a>
      </div>
    </section>
  );
};

export default About;

import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col justify-center items-center text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl mb-6">"Welcome to my world of code and creativity—exploring front-end development, algorithms, and the journey of a Software Engineer."</p>
        <a
          href="#about"
          className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-blue-100 transition duration-300"
        >
          Learn More About Me
        </a>
      </div>
    </div>
  );
};

export default Home;


// app/about/page.tsx
import React from 'react';
import Header from '../components/Header';

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
      {/* Header Section */}
      <Header title="About Me" subtitle="A dedicated and passionate learner" />
      
      {/* Content Section */}
      <div className="max-w-3xl p-6 mt-8 bg-blue rounded-lg shadow-lg text-black-800">
        <p className="text-center text-lg mb-4">
          Hello Everyone, I'm Amna!Currently a Software Engineering student at Hamdard University, specializing in Data Structures and Algorithms in Java. Alongside my academic journey, I am also pursuing web development at Governor House, where I am focusing on TypeScript and web technologies. I have a passion for both backend and frontend development, and I'm eager to build impactful solutions. I am always excited to learn and improve my skills in programming and web development.
        </p>
      </div>
    </div>
  );
};

export default About;



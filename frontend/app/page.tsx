import React from 'react';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to Train5D</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Target Audience</h2>
          <p>Description of the target audience for Train5D wellness coaching.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">5 Core Concepts</h2>
          <ul className="list-disc pl-5">
            <li>Concept 1</li>
            <li>Concept 2</li>
            <li>Concept 3</li>
            <li>Concept 4</li>
            <li>Concept 5</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Locations</h2>
          <div>
            <p>Gym</p>
            <p>Pool</p>
            <p>Online</p>
          </div>
        </div>
      </div>
    </div>
  );
}
import React, { useState } from "react";
import NeonButton from "./components/NeonButton";
import "./styles/neon.css";

function App() {
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = () => {
    setClickCount((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Neon Button Showcase
        </h1>
        <p className="text-gray-400 max-w-lg mx-auto">
          Customizable neon-themed buttons with glow effects and hover animations
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-gray-900 p-6 rounded-lg flex flex-col items-center">
          <h3 className="text-white mb-4">Default Blue</h3>
          <NeonButton text="Click Me" onClick={handleButtonClick} />
        </div>
        
        <div className="bg-gray-900 p-6 rounded-lg flex flex-col items-center">
          <h3 className="text-white mb-4">Green - Small</h3>
          <NeonButton 
            text="Accept" 
            color="green" 
            size="sm"
            onClick={handleButtonClick} 
          />
        </div>
        
        <div className="bg-gray-900 p-6 rounded-lg flex flex-col items-center">
          <h3 className="text-white mb-4">Purple - Large</h3>
          <NeonButton 
            text="Explore" 
            color="purple" 
            size="lg"
            onClick={handleButtonClick} 
          />
        </div>
        
        <div className="bg-gray-900 p-6 rounded-lg flex flex-col items-center">
          <h3 className="text-white mb-4">Pink</h3>
          <NeonButton 
            text="Subscribe" 
            color="pink"
            onClick={handleButtonClick} 
          />
        </div>
        
        <div className="bg-gray-900 p-6 rounded-lg flex flex-col items-center">
          <h3 className="text-white mb-4">Orange</h3>
          <NeonButton 
            text="Notify Me" 
            color="orange"
            onClick={handleButtonClick} 
          />
        </div>
        
        <div className="bg-gray-900 p-6 rounded-lg flex flex-col items-center">
          <h3 className="text-white mb-4">Red</h3>
          <NeonButton 
            text="Delete" 
            color="red"
            onClick={handleButtonClick} 
          />
        </div>
      </div>

      <div className="flex flex-col items-center mb-8">
        <p className="text-white mb-4">
          Button clicked <span className="text-cyan-400 font-bold">{clickCount}</span> times
        </p>
        <NeonButton 
          text="Reset Counter" 
          color="#ff00ff" 
          onClick={() => setClickCount(0)} 
        />
      </div>

      <footer className="text-center text-gray-500 mt-auto pt-8">
        <p>Hover over any button to see the enhanced glow effect</p>
        <p className="text-sm mt-2">© 2023 Neon Button Component</p>
      </footer>
    </div>
  );
}

export default App;
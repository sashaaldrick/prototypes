import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    // Main container with layout, spacing, and text alignment
    <div className="
      max-w-5xl mx-auto p-8 
      text-center
    ">

      {/* Logo container with bottom margin */}
      <div className="mb-8">

        {/* Vite logo with hover effects */}
        <a
          href="https://vite.dev"
          target="_blank"
          className="inline-block"
        >
          <img
            src={viteLogo}
            className="
              h-24 p-6 
              transition-all duration-300 
              hover:drop-shadow-[0_0_2em_#646cffaa]
            "
            alt="Vite logo"
          />
        </a>

        {/* React logo with hover effects and animation */}
        <a
          href="https://react.dev"
          target="_blank"
          className="inline-block"
        >
          <img
            src={reactLogo}
            className="
              h-24 p-6 
              transition-all duration-300 
              hover:drop-shadow-[0_0_2em_#61dafbaa] 
              motion-safe:animate-spin 
              [animation-duration:20s]
            "
            alt="React logo"
          />
        </a>
      </div>

      {/* Main heading with typography and spacing */}
      <h1 className="
        text-5xl font-bold 
        leading-tight mb-8
      ">
        Vite + React
      </h1>

      {/* Card section with padding */}
      <div className="p-8">

        {/* Interactive counter button with styling and states */}
        <button
          onClick={() => setCount((count) => count + 1)}
          className="
            rounded-lg border border-transparent 
            px-5 py-3 
            text-base font-medium 
            bg-gray-100 dark:bg-gray-800 
            cursor-pointer 
            transition-colors duration-250 
            hover:border-blue-500 
            focus:outline-4 focus:outline-blue-500
          "
        >
          count is {count}
        </button>

        {/* Instruction text with top margin */}
        <p className="mt-4">
          Edit <code className="font-mono">src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {/* Footer text with muted color */}
      <p className="text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App

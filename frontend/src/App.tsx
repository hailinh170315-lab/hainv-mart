import { Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-2xl">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500 rounded-2xl shadow-lg transform hover:scale-110 transition-transform duration-300">
          <Sparkles className="w-10 h-10 text-white" />
        </div>

        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Hello World
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
          Welcome to your React + Vite + TypeScript + Tailwind CSS project
        </p>

        <div className="flex flex-wrap gap-3 justify-center pt-4">
          <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-200">
            React 18
          </span>
          <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-200">
            Vite
          </span>
          <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-200">
            TypeScript
          </span>
          <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-200">
            Tailwind CSS
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;

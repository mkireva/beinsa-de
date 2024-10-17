import { Github, HardHat } from "lucide-react";

export function UnderConstruction() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800">
      <main className="flex-grow flex flex-col items-center justify-center p-5 text-center">
        <div className="mb-8">
          <HardHat className="w-24 h-24 text-yellow-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Under Construction</h1>
          <p className="text-xl mb-8 max-w-md mx-auto">
            We&apos;re working hard to bring you something amazing. Stay tuned!
          </p>
        </div>
      </main>

      <footer className="p-5 flex justify-center items-center space-x-4">
        <a
          href="https://github.com/mkireva"
          className="text-gray-600 hover:text-blue-600"
        >
          <Github className="w-6 h-6" />
        </a>
      </footer>
    </div>
  );
}

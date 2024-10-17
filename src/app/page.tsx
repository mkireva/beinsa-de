import { Github } from "lucide-react";
import { Quote } from "./Quote";
import Image from "next/image";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800">
      <main className="flex-grow flex flex-col items-center justify-center p-5 text-center">
        <div className="mt-20 ">
          <Image
            className="rounded-lg shadow-lg"
            src="/beinsa-duno.jpg"
            width={800}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-orange-500 mb-4 mt-6">The Website is under construction.</h1>
          <p className="text-xl mb-8 max-w-md mx-auto">
            We&apos;re working hard to bring you something amazing. Stay tuned!
          </p>
          <Quote />
        </div>
      </main>

      <footer className="p-5 flex justify-center items-center space-x-4">
        <a
          href="https://github.com/mkireva"
          className="text-gray-600 hover:text-sky-600"
        >
          <Github className="w-6 h-6" />
        </a>
      </footer>
    </div>
  );
}

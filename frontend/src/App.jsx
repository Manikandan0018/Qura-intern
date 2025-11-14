import {Notes} from "./components/Notes";
import "./App.css";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
     <Header/>
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Notes />
      </main>

      <footer className="max-w-4xl mx-auto px-4 py-4 text-center text-xs text-gray-400">
        © 2025 Qura Docs - Built with React & Tailwind CSS
      </footer>
    </div>
  );
}

import { useEffect, useState } from "react";

const STORAGE_KEY = "qura_docs_notes_v1";

export function Notes() {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("My Note");
  const [savedAt, setSavedAt] = useState(null);
  const [message, setMessage] = useState("");

  // Load state from localStorage on mount
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        setText(parsed.text || "");
        setTitle(parsed.title || "My Note");
        setSavedAt(parsed.savedAt || null);
      } catch (e) {
        console.error("Could not parse notes", e);
      }
    }
  }, []);

  const saveNotes = () => {
    const payload = {
      title,
      text,
      savedAt: new Date().toISOString(),
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    setSavedAt(payload.savedAt);
    setMessage("Saved!");
    setTimeout(() => setMessage(""), 1500);
  };

  const clearNotes = () => {
    if (!confirm("Clear all notes?")) return;
    localStorage.removeItem(STORAGE_KEY);
    setText("");
    setTitle("My Note");
    setSavedAt(null);
    setMessage("Cleared");
    setTimeout(() => setMessage(""), 1500);
  };

  const downloadTxt = () => {
    const blob = new Blob([text], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${title}.txt`;
    a.click();
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-gray-100 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 border-b pb-3 gap-2">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800">
            📝 Notes Editor
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Build, save, and download your notes.
          </p>
        </div>

        <div className="text-right text-xs">
          <p className="text-gray-500">
            {savedAt
              ? `Last saved: ${new Date(savedAt).toLocaleString()}`
              : "Not yet saved"}
          </p>

          {message && (
            <p
              className={`mt-1 font-semibold ${
                message === "Saved!" ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </div>

      {/* Title Input */}
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-4 text-xl sm:text-2xl font-semibold border-b border-gray-300 
                   focus:border-blue-500 outline-none px-0 py-1 transition duration-200"
        placeholder="Enter Note Title"
      />

      {/* Textarea */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full min-h-[250px] sm:min-h-[300px] border border-gray-200 
                   focus:border-blue-400 p-3 sm:p-4 rounded-lg text-gray-700 
                   resize-none transition duration-200 outline-none"
        placeholder="Write your notes here..."
      />

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-5">
        <button
          onClick={saveNotes}
          disabled={!text.trim()}
          className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium 
                     shadow hover:bg-blue-700 disabled:opacity-50 transition"
        >
          💾 Save
        </button>

        <button
          onClick={downloadTxt}
          className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-medium 
                     border border-gray-200 hover:bg-gray-200 transition"
        >
          ⬇️ Download (.txt)
        </button>

        <button
          onClick={clearNotes}
          className="px-6 py-2 bg-red-50 text-red-600 rounded-full font-medium 
                     hover:bg-red-100 transition"
        >
          🗑️ Clear
        </button>
      </div>
    </div>
  );
}

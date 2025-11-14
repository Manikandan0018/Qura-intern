// 2. Home Component (Enhanced UI/UX for clarity)
export function Home() {
  return (
    <div className="bg-white rounded-xl shadow-2xl p-8 border border-gray-100">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-3 leading-tight">
        ✨ Welcome to Qura Docs
      </h2>

      <p className="text-lg text-gray-600 mb-6 border-b pb-4">
        Your simple, local, and distraction-free note-taking companion.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-5 bg-blue-50 border-l-4 border-blue-500 rounded-md">
          <h3 className="text-xl font-bold text-blue-800 mb-2">
            1. Offline-First
          </h3>
          <p className="text-sm text-gray-700">
            Notes are saved directly in your browser's **localStorage**—no
            server connection needed.
          </p>
        </div>

        <div className="p-5 bg-green-50 border-l-4 border-green-500 rounded-md">
          <h3 className="text-xl font-bold text-green-800 mb-2">
            2. Easy Download
          </h3>
          <p className="text-sm text-gray-700">
            Export your drafts instantly as a **clean `.txt` file** for backup
            or sharing.
          </p>
        </div>

        <div className="p-5 bg-purple-50 border-l-4 border-purple-500 rounded-md">
          <h3 className="text-xl font-bold text-purple-800 mb-2">
            3. Clean UI
          </h3>
          <p className="text-sm text-gray-700">
            A minimalist design ensures you focus only on what you're writing.
          </p>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          How to Use:
        </h3>
        <ol className="list-disc list-inside space-y-2 text-gray-700 ml-4">
          <li>Navigate to the **Notes** tab in the header.</li>
          <li>Write your title and content in the editor.</li>
          <li>Click **Save** to persist the note in your browser.</li>
          <li>Click **Download** to get the text file.</li>
        </ol>
      </div>
    </div>
  );
}

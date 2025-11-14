// 3. Header Component (Active state indication added for better UI/UX)
export function Header ({ setPage, currentPage }) {
  const getButtonClass = (pageName) => {
    const baseClass =
      "px-4 py-2 rounded-full font-medium text-sm transition duration-200";
    if (currentPage === pageName) {
      // Active state class
      return `${baseClass} bg-blue-600 text-white shadow-lg`;
    }
    // Inactive state class
    return `${baseClass} text-gray-700 hover:bg-gray-100`;
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo and Branding */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-500 flex items-center justify-center text-white font-extrabold text-xl shadow-md">
            Q
          </div>

          <div>
            <h1 className="text-xl font-bold text-gray-800">Qura Docs</h1>
            <p className="text-xs text-gray-500">Simple Notes for the Web</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-x-2">
          <button
            onClick={() => setPage("notes")}
            className={getButtonClass("notes")}
          >
            ✏️ Notes
          </button>
        </nav>
      </div>
    </header>
  );
}

export function Header() {
  return (
    <header className="h-24 bg-blue-600 text-white p-8">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6">
        <h1 className="text-2xl font-bold text-gray-800">Furniro</h1>
        <ul className="flex space-x-8 text-gray-700 font-medium">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="flex space-x-4 text-gray-700 text-xl">
          <span>👤</span>
          <span>🔍</span>
          <span>🛒</span>
        </div>
      </nav>
    </header>
  );
}
export default Header;

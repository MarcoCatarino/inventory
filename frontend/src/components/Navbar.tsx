// Navbar.tsx

const Navbar: React.FC = () => {
  return (
    <div className="bg-white flex justify-between items-center p-4 shadow-md">
      <div className="font-bold text-xl text-black">Le Blanc Resort</div>
      <input
        type="text"
        placeholder="Buscar producto..."
        className="w-1/2 bg-gray-200 p-2 rounded-md text-black"
      />
    </div>
  );
};

export default Navbar;

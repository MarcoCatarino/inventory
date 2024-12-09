import React, { useState } from "react";

const Sidebar: React.FC = () => {
  const products = [
    { id: 1, type: "Teléfono", brand: "Apple", hotel: "Beach Palace" },
    { id: 2, type: "Computadora", brand: "Dell", hotel: "Sun Palace" },
    { id: 3, type: "Teléfono", brand: "Samsung", hotel: "Le Blanc" },
    { id: 4, type: "Monitor", brand: "LG", hotel: "Beach Palace" },
  ];

  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const getUniqueOptions = (key: keyof (typeof products)[0]) => {
    return Array.from(new Set(products.map((product) => product[key])));
  };

  const types = getUniqueOptions("type");
  const brands = getUniqueOptions("brand");
  const hotels = getUniqueOptions("hotel");

  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedHotel, setSelectedHotel] = useState<string | null>(null);

  return (
    <div className="relative flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-[#AF7B39] text-white p-4 transition-transform duration-300 ease-in-out ${
          isSidebarVisible ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "250px" }}
      >
        <h2 className="text-lg font-bold mb-4">Filtros</h2>

        {/* Filtro por Tipo */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Tipo:</label>
          <select
            value={selectedType || ""}
            onChange={(e) => setSelectedType(e.target.value || null)}
            className="w-full p-2 text-black rounded"
          >
            <option value="">Todos</option>
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Filtro por Marca */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Marca:</label>
          <select
            value={selectedBrand || ""}
            onChange={(e) => setSelectedBrand(e.target.value || null)}
            className="w-full p-2 text-black rounded"
          >
            <option value="">Todas</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        {/* Filtro por Hotel */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Hotel:</label>
          <select
            value={selectedHotel || ""}
            onChange={(e) => setSelectedHotel(e.target.value || null)}
            className="w-full p-2 text-black rounded"
          >
            <option value="">Todos</option>
            {hotels.map((hotel) => (
              <option key={hotel} value={hotel}>
                {hotel}
              </option>
            ))}
          </select>
        </div>

        {/* Botón para reiniciar filtros */}
        <button
          onClick={() => {
            setSelectedType(null);
            setSelectedBrand(null);
            setSelectedHotel(null);
          }}
          className="bg-black text-white py-2 px-4 rounded w-full mt-4"
        >
          Reiniciar Filtros
        </button>
      </div>

      {/* Botón para mostrar/ocultar el Sidebar */}
      <button
        onClick={() => setIsSidebarVisible(!isSidebarVisible)}
        className={`fixed top-4 ${
          isSidebarVisible ? "left-[260px]" : "left-4"
        } bg-black text-white p-2 rounded-full transition-all duration-300 z-10`}
      >
        {isSidebarVisible ? "⬅" : "➡"}
      </button>
    </div>
  );
};

export default Sidebar;

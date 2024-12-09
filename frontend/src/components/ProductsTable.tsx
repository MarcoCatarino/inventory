import React from "react";
import { Product } from "../types/Product";

interface ProductsTableProps {
  products: Product[];
  onViewProduct: (product: Product) => void;
  onEditProduct: (product: Product) => void;
  onDeleteProduct: (product: Product) => void;
  onCreateProduct: () => void; // Prop para manejar la creación
}

const ProductsTable: React.FC<ProductsTableProps> = ({
  products,
  onViewProduct,
  onEditProduct,
  onDeleteProduct,
  onCreateProduct,
}) => {
  return (
    <div className="overflow-x-auto shadow-md rounded-lg mt-4">
      {/* Header con el botón de Crear */}
      <div className="flex justify-between items-center p-4 bg-white border-b">
        <h1 className="text-xl font-semibold">Inventario</h1>
        <button
          onClick={onCreateProduct}
          className="bg-[#AF7B39] text-white px-4 py-2 rounded-md hover:bg-opacity-90"
        >
          Crear Producto
        </button>
      </div>

      {/* Tabla */}
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-[#AF7B39] text-white">
            <th className="p-3 text-left">Tipo</th>
            <th className="p-3 text-left">Marca</th>
            <th className="p-3 text-left">Modelo</th>
            <th className="p-3 text-left">Estado</th>
            <th className="p-3 text-left">Hotel</th>
            <th className="p-3 text-left">Stock</th>
            <th className="p-3 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b hover:bg-gray-50">
              <td className="p-3 text-[#000000]">{product.type}</td>
              <td className="p-3 text-[#000000]">{product.brand}</td>
              <td className="p-3 text-[#000000]">{product.model}</td>
              <td className="p-3 text-[#000000]">{product.state}</td>
              <td className="p-3 text-[#000000]">{product.hotel}</td>
              <td className="p-3 text-[#000000]">{product.stock}</td>
              <td className="p-3 flex justify-start space-x-2">
                {/* Botones de acciones */}
                <button
                  onClick={() => onViewProduct(product)}
                  className="bg-[#000000] text-white px-4 py-2 rounded-md"
                >
                  Ver
                </button>
                <button
                  onClick={() => onEditProduct(product)}
                  className="bg-[#000000] text-white px-4 py-2 rounded-md"
                >
                  Editar
                </button>
                <button
                  onClick={() => onDeleteProduct(product)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;

import React, { useState } from "react";
import ProductsTable from "../components/ProductsTable";
import CreateProductModal from "../components/Modals/CreateProductModal";
import { Product } from "../types/Product";

const MainView: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    // Tus productos iniciales
  ]);

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false); // Estado del modal

  // Abre el modal de creación
  const handleOpenCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  // Agrega un producto nuevo a la lista
  const handleAddProduct = (newProduct: Product) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    setIsCreateModalOpen(false); // Cierra el modal después de guardar
  };

  return (
    <div className="p-4">
      {/* Tabla de productos */}
      <ProductsTable
        products={products}
        onViewProduct={() => {
          /* lógica de ver producto */
        }}
        onEditProduct={() => {
          /* lógica de editar producto */
        }}
        onDeleteProduct={() => {
          /* lógica de eliminar producto */
        }}
        onCreateProduct={handleOpenCreateModal} // Vinculamos el botón de Crear Producto
      />

      {/* Modal de Crear Producto */}
      <CreateProductModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSave={handleAddProduct}
      />
    </div>
  );
};

export default MainView;

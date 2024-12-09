import React from "react";
import Modal from "./Modal";

interface Product {
  id: string;
  brand: string;
  model: string;
  hotel: string;
  state: string;
}

interface ViewProductModalProps {
  isOpen: boolean;
  product: Product | null; // Producto seleccionado para visualización
  onClose: () => void;
}

const ViewProductModal: React.FC<ViewProductModalProps> = ({
  isOpen,
  product,
  onClose,
}) => {
  if (!product) return null;

  return (
    <Modal isOpen={isOpen} title="Detalles del Producto" onClose={onClose}>
      <div className="space-y-4">
        <p>
          <strong>ID:</strong> {product.id}
        </p>
        <p>
          <strong>Marca:</strong> {product.brand}
        </p>
        <p>
          <strong>Modelo:</strong> {product.model}
        </p>
        <p>
          <strong>Hotel:</strong> {product.hotel}
        </p>
        <p>
          <strong>Estado:</strong> {product.state}
        </p>
      </div>
      <button
        onClick={onClose}
        className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
      >
        Cerrar
      </button>
    </Modal>
  );
};

export default ViewProductModal;

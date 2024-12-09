// EditProductModal.tsx
import { Product } from "../../types/Product";

interface EditProductModalProps {
  isOpen: boolean;
  product: Product | null;
  onClose: () => void;
  onSave: (updatedProduct: Product) => void;
}

const EditProductModal: React.FC<EditProductModalProps> = ({
  isOpen,
  onClose,
  onSave,
  product,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-1/3">
        <h2 className="text-xl font-semibold mb-4">Editar Producto</h2>
        <div>
          <label className="block mb-2">Marca</label>
          <input
            type="text"
            value={product?.brand}
            onChange={(e) => {
              if (product) {
                product.brand = e.target.value;
              }
            }}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block mb-2">Modelo</label>
          <input
            type="text"
            value={product?.model}
            onChange={(e) => {
              if (product) {
                product.model = e.target.value;
              }
            }}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex justify-between mt-4">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
          >
            Cancelar
          </button>
          <button
            onClick={() => onSave(product)}
            className="bg-black text-white px-4 py-2 rounded-md"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProductModal;

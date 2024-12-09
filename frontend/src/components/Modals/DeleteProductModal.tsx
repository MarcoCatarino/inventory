// DeleteProductModal.tsx
interface DeleteProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const DeleteProductModal: React.FC<DeleteProductModalProps> = ({
  isOpen,
  onClose,
  onDelete,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-1/3">
        <h2 className="text-xl font-semibold mb-4">
          ¿Estás seguro de que deseas eliminar este producto?
        </h2>

        <div className="flex justify-between">
          <button
            onClick={onDelete}
            className="bg-red-500 text-white px-4 py-2 rounded mr-2"
          >
            Eliminar
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteProductModal;

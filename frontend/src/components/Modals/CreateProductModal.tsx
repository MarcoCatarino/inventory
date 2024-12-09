import { useState } from "react";
import { Product } from "../../types/Product";

interface CreateProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newProduct: Product) => void;
}

const CreateProductModal: React.FC<CreateProductModalProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const [formData, setFormData] = useState<Product>({
    id: "",
    type: "",
    brand: "",
    model: "",
    hotel: "",
    state: "",
    stock: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const newProduct: Product = {
      ...formData,
      id: new Date().getTime().toString(), // Genera un ID único
    };
    onSave(newProduct); // Llama a la función de guardado
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
      <div
        className="bg-white p-6 rounded shadow-lg w-1/2 max-h-[90vh] overflow-y-auto" // Cambios aquí
      >
        <h2 className="text-xl font-semibold mb-4">Crear Producto</h2>

        {/* Formulario */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Tipo</label>
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="border rounded px-2 py-1 w-full"
          />
        </div>

        {/* Campos adicionales */}
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-[#AF7B39] text-white px-4 py-2 rounded-md"
          >
            Guardar
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded-md ml-2"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProductModal

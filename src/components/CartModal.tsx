import React from 'react';
import { X } from 'lucide-react';
import { CartItem } from '../types';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

export const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  if (!isOpen) return null;

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Shopping Cart</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500 py-8">Your cart is empty</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4 py-4 border-b">
                <img
                  src={item.coverImage}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-600">₹{item.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    className="px-2 py-1 border rounded"
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 border rounded"
                    disabled={item.quantity >= item.stock}
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="mt-6">
              <div className="flex justify-between text-xl font-bold mb-4">
                <span>Total:</span>
                <span>₹{total}</span>
              </div>
              <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
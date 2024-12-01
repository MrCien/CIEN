import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Book } from '../types';

interface BookCardProps {
  book: Book;
  onAddToCart: (book: Book) => void;
}

export const BookCard: React.FC<BookCardProps> = ({ book, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        src={book.coverImage}
        alt={book.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">{book.title}</h3>
          <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
            {book.category}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-2">{book.author}</p>
        <div className="flex items-center mb-2">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="text-sm ml-1">{book.rating}</span>
        </div>
        <p className="text-gray-700 font-bold mb-2">₹{book.price}</p>
        <p className="text-sm text-gray-500 mb-3">
          {book.stock > 0 ? `${book.stock} in stock` : 'Out of stock'}
        </p>
        <button
          onClick={() => onAddToCart(book)}
          disabled={book.stock === 0}
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          <ShoppingCart className="h-4 w-4" />
          {book.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};
export const books = [
  {
    id: '1',
    title: 'The White Tiger',
    author: 'Aravind Adiga',
    price: 399,
    coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
    category: 'Fiction',
    rating: 4.5,
    description: 'A darkly humorous perspective of Indias class struggle in a globalized world.',
    stock: 15
  },
  {
    id: '2',
    title: 'A Suitable Boy',
    author: 'Vikram Seth',
    price: 599,
    coverImage: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=800',
    category: 'Fiction',
    rating: 4.8,
    description: 'A classic tale set in post-independence India.',
    stock: 8
  },
  {
    id: '3',
    title: 'The God of Small Things',
    author: 'Arundhati Roy',
    price: 449,
    coverImage: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800',
    category: 'Literary Fiction',
    rating: 4.7,
    description: 'A story that explores how small things affect peoples behavior and their lives.',
    stock: 12
  },
  {
    id: '4',
    title: 'Train to Pakistan',
    author: 'Khushwant Singh',
    price: 299,
    coverImage: 'https://images.unsplash.com/photo-1544947987-f6d69de0b8f4?auto=format&fit=crop&q=80&w=800',
    category: 'Historical Fiction',
    rating: 4.6,
    description: 'A historical novel about the partition of India in 1947.',
    stock: 20
  },
  {
    id: '5',
    title: 'The Guide',
    author: 'R.K. Narayan',
    price: 349,
    coverImage: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=800',
    category: 'Classic',
    rating: 4.4,
    description: 'A classic tale of transformation and spiritual awakening.',
    stock: 6
  }
];

export const categories = [...new Set(books.map(book => book.category))];
import React from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Button } from '../ui/Button';

// Productos ficticios
const fakeBakeryProducts = [
  {
    id: 1,
    name: 'Pan francés',
    description: 'Crujiente por fuera, suave por dentro.',
    price: 0.5,
    originalPrice: 0.7,
    stock: 100,
    category: 'panes',
    image: 'https://cdn.pixabay.com/photo/2015/09/18/19/03/bread-944017_960_720.jpg',
    rating: 4.8,
    reviews: 120,
    tags: ['artesanal', 'fresco'],
    featured: true,
  },
  {
    id: 2,
    name: 'Croissant de chocolate',
    description: 'Relleno con chocolate derretido, ideal para el desayuno.',
    price: 1.5,
    originalPrice: 2.0,
    stock: 50,
    category: 'pastelería',
    image: 'https://cdn.pixabay.com/photo/2018/04/29/19/27/croissant-3366436_960_720.jpg',
    rating: 4.9,
    reviews: 85,
    tags: ['dulce', 'popular'],
    featured: true,
  },
];

export const ProductCard: React.FC = () => {
  const { dispatch } = useCart();

  const handleAddToCart = (e: React.MouseEvent, product: any) => {
    e.stopPropagation();
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-PE', {
      style: 'currency',
      currency: 'PEN',
    }).format(price);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {fakeBakeryProducts.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden border border-gray-200"
          >
            {/* Imagen */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3 flex gap-2">
                {product.featured && (
                  <span className="bg-yellow-300 text-black text-xs font-semibold px-2 py-1 rounded">
                    Destacado
                  </span>
                )}
                {product.originalPrice > product.price && (
                  <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    Oferta
                  </span>
                )}
              </div>
              <button className="absolute top-3 right-3 bg-white/80 rounded-full p-2 hover:bg-white transition-opacity">
                <Heart className="h-4 w-4 text-red-500" />
              </button>
              <div className="absolute bottom-3 right-3">
                <Button
                  size="sm"
                  onClick={(e) => handleAddToCart(e, product)}
                  className="bg-primary-600 text-white"
                >
                  <ShoppingCart className="h-4 w-4 mr-1" />
                  Agregar
                </Button>
              </div>
            </div>

            {/* Info */}
            <div className="p-4 space-y-2">
              <div className="flex justify-between text-sm text-gray-500">
                <span className="uppercase font-semibold">{product.category}</span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>{product.rating} ({product.reviews})</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.description}</p>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 pt-2">
                <span className="text-xl font-bold text-green-700">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice > product.price && (
                  <span className="line-through text-sm text-gray-400">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

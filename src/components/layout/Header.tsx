import React, { useState } from 'react';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../ui/Button';
import { AuthModal } from '../auth/AuthModal';
import { CartModal } from '../cart/CartModal';

export const Header: React.FC = () => {
  const { state } = useCart();
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-serif font-semibold text-secondary-900">
                La Sinfonía del Pan
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-secondary-700 hover:text-primary-600 transition-colors">
              Inicio
            </a>
            <a href="#about" className="text-secondary-700 hover:text-primary-600 transition-colors">
              Nosotros
            </a>
            <a href="#contact" className="text-secondary-700 hover:text-primary-600 transition-colors">
              Contacto
            </a>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Cart Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsCartModalOpen(true)}
              className="relative"
            >
              <ShoppingCart className="h-6 w-6" />
              {state.itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-500 text-secondary-900 text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {state.itemCount}
                </span>
              )}
            </Button>

            {/* User Menu */}
            {user ? (
              <div className="relative group">
                <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                  <User className="h-6 w-6" />
                  <span className="hidden sm:block">{user.name}</span>
                </Button>
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <a href="#profile" className="block px-4 py-2 text-sm text-secondary-700 hover:bg-primary-50">
                      Mi Perfil
                    </a>
                    <a href="#orders" className="block px-4 py-2 text-sm text-secondary-700 hover:bg-primary-50">
                      Mis Pedidos
                    </a>
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-sm text-secondary-700 hover:bg-primary-50"
                    >
                      Cerrar Sesión
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsAuthModalOpen(true)}
              >
                Ingresar
              </Button>
            )}

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-secondary-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-secondary-700 hover:text-primary-600">
                Inicio
              </a>
              <a href="#about" className="block px-3 py-2 text-secondary-700 hover:text-primary-600">
                Nosotros
              </a>
              <a href="#contact" className="block px-3 py-2 text-secondary-700 hover:text-primary-600">
                Contacto
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Modals */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
      <CartModal
        isOpen={isCartModalOpen}
        onClose={() => setIsCartModalOpen(false)}
      />
    </header>
  );
};

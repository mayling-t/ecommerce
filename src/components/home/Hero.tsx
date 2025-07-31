import React from 'react';
import { ArrowRight, Star, Shield, Truck } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative py-16 sm:py-24 lg:py-32">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Título centrado */}
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-secondary-900 leading-tight">
                La Sinfonía del <span className="text-primary-600">PAN</span>
              </h1>
              <p className="text-lg sm:text-xl text-secondary-600 leading-relaxed">
                Los mejores panes, pasteles y productos horneados frescos todos los días. Tradición familiar desde 1985.
              </p>
            </div>

            {/* Características centradas */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 max-w-4xl">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <Star className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900">Premium Quality</h3>
                  <p className="text-sm text-secondary-600">Calidad garantizada</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <Shield className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900">100% Natural</h3>
                  <p className="text-sm text-secondary-600">Sin aditivos</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <Truck className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900">Envío Gratis</h3>
                  <p className="text-sm text-secondary-600">Compras sobre $25.000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

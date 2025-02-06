"use client";

import { ChevronRight } from "lucide-react";

interface Product {
  title: string;
  image: string;
  discount: number;
  price: number;
  originalPrice: number;
  quantity: string;
  deliveryTime: string;
}

interface DealsSectionProps {
  title: string;
  products: Product[];
  showSeeAll?: boolean;
}

export function DealsSection({
  title,
  products,
  showSeeAll = false,
}: DealsSectionProps) {
  return (
    <div className="px-4 py-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-[var(--text-primary)]">
          {title}
        </h2>
        {showSeeAll && (
          <button className="text-[var(--brand-purple)] font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
            View all <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
      <div className="flex gap-4 overflow-x-auto -mx-4 px-4 scrollbar-hide">
        {products.map((product, index) => (
          <div
            key={product.title}
            className="product-card flex-shrink-0 w-[170px]"
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <div className="relative aspect-square float-animation">
              <img
                src={product.image || "/image2.png"}
                alt={product.title}
                className="w-full h-full object-contain"
              />
              <div className="absolute top-0 left-0 premium-gradient text-white px-3 py-1 text-sm font-medium rounded-br-xl rounded-tl-xl">
                {product.discount}% OFF
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)] mb-2">
              {/* <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                <span className="font-medium">{product.deliveryTime} mins</span>
              </div> */}
            </div>
            <h3 className="font-medium text-[var(--text-primary)] mb-1 line-clamp-2">
              {product.title}
            </h3>
            <p className="text-xs text-[var(--text-secondary)] mb-3">
              {product.quantity}
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-lg text-[var(--text-primary)]">
                  ₹{product.price}
                </p>
                <p className="text-xs text-[var(--text-secondary)] line-through">
                  ₹{product.originalPrice}
                </p>
              </div>
              <button className="premium-button text-sm">ADD</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

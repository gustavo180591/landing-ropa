// products.ts
export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | '3XL' | '28' | '30' | '32' | '34' | '36' | '38';

export interface ProductSize {
  size: Size;
  inStock: boolean;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
  sizes: ProductSize[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Saco de Lana',
    description: 'Saco de lana merino 100% de la más alta calidad, ideal para los días fríos de invierno',
    price: 129.99,
    image: '/images/products/saco-lana.png',
    category: 'abrigos',
    featured: true,
    sizes: [
      { size: 'S', inStock: true },
      { size: 'M', inStock: true },
      { size: 'L', inStock: true },
      { size: 'XL', inStock: false },
      { size: 'XXL', inStock: true }
    ]
  },
  {
    id: '2',
    name: 'Vestido Floral',
    description: 'Vestido de verano con estampado floral',
    price: 89.99,
    image: '/images/products/vestido-floral.png',
    category: 'vestidos',
    featured: true,
    sizes: [
      { size: 'XS', inStock: true },
      { size: 'S', inStock: true },
      { size: 'M', inStock: true },
      { size: 'L', inStock: true },
      { size: 'XL', inStock: true }
    ]
  },
  {
    id: '3',
    name: 'Jeans Slim Fit',
    description: 'Jeans ajustados de corte moderno y cómodo',
    price: 69.99,
    image: '/images/products/jeans-slim.png',
    category: 'pantalones',
    featured: true,
    sizes: [
      { size: '28', inStock: true },
      { size: '30', inStock: true },
      { size: '32', inStock: true },
      { size: '34', inStock: true },
      { size: '36', inStock: false }
    ]
  },
  {
    id: '4',
    name: 'Blusa de Seda',
    description: 'Blusa elegante de seda 100% natural',
    price: 59.99,
    image: '/images/products/blusa-seda.png',
    category: 'blusas',
    featured: true,
    sizes: [
      { size: 'XS', inStock: true },
      { size: 'S', inStock: true },
      { size: 'M', inStock: true },
      { size: 'L', inStock: false },
      { size: 'XL', inStock: true }
    ]
  }
];

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured);
}

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'todos' || !category) return [...products];
  return products.filter(product => product.category === category);
}

export function getAllCategories(): string[] {
  const categories = new Set(products.map(product => product.category));
  return ['todos', ...Array.from(categories)];
}

export function getProductCountByCategory(category: string): number {
  if (category === 'todos') return products.length;
  return products.filter(product => product.category === category).length;
}

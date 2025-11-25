// products.ts
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Camiseta Básica',
    description: 'Camiseta de algodón 100% suave y cómoda',
    price: 24.99,
    image: '/images/products/camiseta-basica.jpg',
    category: 'camisetas',
    featured: true
  },
  {
    id: '2',
    name: 'Jeans Clásicos',
    description: 'Jeans ajustados de corte clásico',
    price: 59.99,
    image: '/images/products/jeans-clasicos.jpg',
    category: 'pantalones'
  },
  {
    id: '3',
    name: 'Vestido Floral',
    description: 'Vestido de verano con estampado floral',
    price: 45.99,
    image: '/images/products/vestido-floral.jpg',
    category: 'vestidos',
    featured: true
  }
];

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured);
}

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'todos') return [...products];
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

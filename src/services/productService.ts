import { Product } from '../types/product';

const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Cardify',
    description: 'Célébrez ensemble avec des cartes de voeux collaboratives',
    image: '/cardify.png',
    link: 'https://cardify.nodalforge.cloud/',
    status: 'new'
  },
  {
    id: '2',
    title: 'NodalCV',
    description: 'Transformez votre CV en profil web moderne',
    image: '/NodalCV_icon.png',
    link: '#',
    status: 'new'
  },
  {
    id: '3',
    title: 'Locapub',
    description: 'Création de support de communication pour les professionnels',
    image: '/locapub.png',
    link: '#',
    status: 'coming_soon'
  }
];

export class ProductService {
  private static instance: ProductService;
  private apiUrl = 'https://your-n8n-webhook-url.com/products'; // À configurer

  private constructor() {}

  static getInstance(): ProductService {
    if (!ProductService.instance) {
      ProductService.instance = new ProductService();
    }
    return ProductService.instance;
  }

  async getProducts(): Promise<Product[]> {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.warn('Using mock data due to API error:', error);
      return MOCK_PRODUCTS;
    }
  }

  async getProductById(id: string): Promise<Product | null> {
    const products = await this.getProducts();
    return products.find(p => p.id === id) || null;
  }
}

export const productService = ProductService.getInstance();

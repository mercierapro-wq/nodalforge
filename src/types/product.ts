export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  status?: 'new' | 'popular' | 'updated' | 'coming_soon';
}

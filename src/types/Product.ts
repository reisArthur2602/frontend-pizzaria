export type ProductRequest = {
  name: string;
  category_id: string;
  description: string;
  price: number;
  image_url: File | null;
};

export type ProductResponse = {
  id: string;
  name: string;
  category_id: string;
  description: string;
  image_url: string;
  price: number;
  created_at: string;
  category: {
    name: string;
    id: string;
    created_at: Date;
  };
};

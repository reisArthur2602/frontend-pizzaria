export type CategoryRequest = {
  name: string;
};

export type CategoryResponse = {
  id: string;
  name: string;
  created_at: string;
  Product: {
    id: string;
    name: string;
    category_id: string;
    description: string;
    image_url: string;
    price: number;
    created_at: string;
  }[];
};

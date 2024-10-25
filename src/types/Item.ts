export type ItemRequest = {
  order_id: string;
  product_id: string;
  quantity: number;
};

export type ItemResponse = {
  id: string;
  order_id: string;
  product_id: string;
  quantity: number;
  created_at: string;
  product: {
    id: string;
    name: string;
    category_id: string;
    description: string;
    image_url: string;
    price: number;
    created_at: string;
  };
};

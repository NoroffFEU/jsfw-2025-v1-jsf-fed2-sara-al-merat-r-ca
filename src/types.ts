/*
  Centralized TypeScript definitions for the Aurora Shop application.
  This file contains the data contracts for the Noroff API responses 
  (Products, Reviews, and Pagination Meta-data), as well as the 
  internal data structures used for the global Shopping Cart state.
 */
export interface Image {
  url: string;
  alt: string;
}

export interface Review {
  id: string;
  username: string;
  rating: number;
  description: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  image: Image;
  rating: number;
  tags: string[];
  reviews: Review[];
}

export interface ApiResponse {
  data: Product[];
  meta: {
    isFirstPage: boolean;
    isLastPage: boolean;
    currentPage: number;
    previousPage: number | null;
    nextPage: number | null;
    pageCount: number;
    totalCount: number;
  };
}

export interface SingleProductResponse {
  data: Product;
  meta: Record<string, unknown>;
}

export interface CartItem extends Product {
  quantity: number;
}
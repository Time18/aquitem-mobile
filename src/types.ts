export interface Store {
  id: number;
  name: string;
  shortName: string;
  avatar: string;
  description: string;
  address: string;
  departament: string;
  rating: number;
  latitude: number;
  longitude: number;
  whatsappBotNumber: number;
  chatBotLink: string;
  products: Product[];
}

export interface Product {
  id: number;
  name: string;
}

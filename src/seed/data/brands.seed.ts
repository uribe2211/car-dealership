import { Brand } from "src/brands/entities/brand.entity";
import { v4 as uuid } from "uuid";	

export const BRAND_SEED:Brand[] = [
  {
    id: uuid(),
    name: "BMW",
    createdAt: new Date(),
  },
  {
    id: uuid(),
    name: "Audi",
    createdAt: new Date(),
  },
  {
    id: uuid(),
    name: "Mercedez",
    createdAt: new Date(),
  },
  {
    id: uuid(),
    name: "Subaru",
    createdAt: new Date(),
  },
  {
    id: uuid(),
    name: "Volkswagen",
    createdAt: new Date(),
  }
];
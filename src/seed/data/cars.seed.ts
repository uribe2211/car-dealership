import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuid } from "uuid";	

export const CARS_SEEDS:Car[] = [
    { id: uuid(), name: "Mini", price: 400000 },
    { id: uuid(), name: "Civic", price: 500000 },
    { id: uuid(), name: "Corolla", price: 300000 },
    { id: uuid(), name: "Yaris", price: 200000 },
    { id: uuid(), name: "Aventador", price: 600000 },
    { id: uuid(), name: "A8", price: 1000000 },
    { id: uuid(), name: "A4", price: 700000 },
    { id: uuid(), name: "A6", price: 800000 },
    { id: uuid(), name: "A3", price: 900000 },
    { id: uuid(), name: "A2", price: 1100000 },
]
import { BadRequestException, Injectable } from '@nestjs/common';
import { Car } from './Interfaces/car.interface';
import { v4 as uuid } from 'uuid'
import { CreateCarDto, UpdateCarDto } from './DTO';


@Injectable()
export class CarsService {

    private cars: Car[] = [
        { id: uuid(), name: 'BMW', price: 100000 },
        { id: uuid(), name: 'Audi', price: 200000 },
        { id: uuid(), name: 'Mercedes', price: 300000 },
        { id: uuid(), name: 'Mini', price: 400000 },
    ];

    getAll() {
        return this.cars;
    }

    getCarById(id: string) {
        return this.cars.find(car => car.id === id);
    }

    createCar({name, price}: CreateCarDto) {

        const newCar:Car = {
            id: uuid(),
            name,
            price
        };

        this.cars.push(newCar);
        return this.cars;
    }

    update(id:string,UpdateCarDto: UpdateCarDto) {

    if(UpdateCarDto.id && UpdateCarDto.id!==id){
        throw new BadRequestException('id no puede ser modificado');}    

        let carDB= this.getCarById(id);
        
        this.cars=this.cars.map(car => {
            if(car.id===id){
                carDB={...carDB,...UpdateCarDto,id}
                return carDB
            }

            return car;

        })

        return carDB;
    }

    
}


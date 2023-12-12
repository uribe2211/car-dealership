import { BadRequestException, Injectable } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid'
import { CreateCarDto, UpdateCarDto } from './dto';


@Injectable()
export class CarsService {

    private cars: Car[] = [
        // { id: uuid(), name: 'Mini', price: 400000 },
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


    delete(id:string) {
        const car= this.getCarById(id);
        this.cars=this.cars.filter(car => car.id!==id);        
       return;
    }

    fillCarsSeedData(cars: Car[]){
        this.cars=cars;
    }
}


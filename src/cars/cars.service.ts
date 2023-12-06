import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars=[
        {id:1,name:'BMW',price:100000},
        {id:2,name:'Audi',price:200000},
        {id:3,name:'Mercedes',price:300000},
        {id:4,name:'Mini',price:400000},
    ]

    getAll(){
        return this.cars
    }

    getCarById(id:number){
        return this.cars.find(car=>car.id==id)
    }
}

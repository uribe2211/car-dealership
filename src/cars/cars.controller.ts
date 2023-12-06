import { Controller, Get, HttpException, Param,ParseIntPipe, Post,Body,Patch,Delete } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

  constructor(private readonly carService: CarsService) { }

  @Get()
  getAllCars() {
    return this.carService.getAll()
  }

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    const car = this.carService.getCarById(id);
    if (!car) {
      throw new HttpException(`No se encontro el id ${id}`, 404);
    }
    return car;
  }

  @Post()
  createCar(@Body() body:any) {
    return body
  }

  @Patch(':id')
    updateCar(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return body;
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return id;
  }
}
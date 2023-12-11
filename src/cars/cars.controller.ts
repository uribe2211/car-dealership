import { Controller, Get, HttpException, Param,ParseIntPipe, Post,Body,Patch,Delete, ParseUUIDPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './DTO/create-car.dto';
import { create } from 'domain';
import { UpdateCarDto } from './DTO/update-car.dto';

@Controller('cars')
export class CarsController {

  constructor(private readonly carService: CarsService) { }

  @Get()
  getAllCars() {
    return this.carService.getAll()
  }

  @Get(':id')
  getCarById(@Param('id',ParseUUIDPipe) id: string) {
    const car = this.carService.getCarById(id);
    if (!car) {
      throw new HttpException(`No se encontro el id ${id}`, 404);
    }
    return car;
  }

  @Post()  
  createCar(@Body() createCarDTO:CreateCarDto) {
    return this.carService.createCar(createCarDTO);
  }

  @Patch(':id')
    updateCar(@Param('id', ParseUUIDPipe) id: string, 
    @Body() UpdateCarDto: UpdateCarDto) {
      
    return this.carService.update(id, UpdateCarDto);
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return id;
  }
}
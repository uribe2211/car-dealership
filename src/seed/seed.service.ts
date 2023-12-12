import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { CARS_SEEDS } from './data/cars.seed';
import { BrandsService } from 'src/brands/brands.service';
import { BRAND_SEED } from './data/brands.seed';

@Injectable()
export class SeedService {

  constructor(
    private readonly carservice:CarsService, 
    private readonly brandService:BrandsService) {}
  
  populateDB() {
    this.carservice.fillCarsSeedData( CARS_SEEDS );
    this.brandService.fillDataSeed(BRAND_SEED);
  }
}
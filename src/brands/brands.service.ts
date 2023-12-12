import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {

  private brands: Brand[] = [

    // { id: uuid(), name: 'BMW', createdAt: new Date() },
    // { id: uuid(), name: 'Audi', createdAt: new Date() },
    // { id: uuid(), name: 'Mercedez', createdAt: new Date() },
    // { id: uuid(), name: 'Subaru', createdAt: new Date() },
  ];

  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = {
      id: uuid(),
      ...createBrandDto,
      createdAt: new Date()
    }
    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id === id);
    if (!brand)
      throw new NotFoundException('Brand not found');
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    const brand = this.findOne(id);
    const index = this.brands.indexOf(brand);
    this.brands[index] = {
     ...brand,
     ...updateBrandDto,
      updatedAt: new Date()
    }
    return this.brands[index];
  }

  remove(id: string) {
    this.brands = this.brands.filter(brand => brand.id!== id);
  }

  fillDataSeed(brands:Brand[]){
    this.brands = brands;
  }
}


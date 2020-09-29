import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pricelist } from '../pricelist.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class PricelistsService {
  constructor(
    @InjectRepository(Pricelist)
    private pricelistRepository: Repository<Pricelist>,
  ) {}
  async GetAllPrice(): Promise<Pricelist[]> {
    return await this.pricelistRepository.find();
  }

  async AddPrice(pricelist: Pricelist): Promise<Pricelist> {
    return await this.pricelistRepository.save(pricelist);
  }

  async update(pricelist: Pricelist): Promise<UpdateResult> {
    return await this.pricelistRepository.update(pricelist.id, pricelist);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.pricelistRepository.delete(id);
  }
}

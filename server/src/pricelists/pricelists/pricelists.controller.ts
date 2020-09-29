import { Controller, Get } from '@nestjs/common';
import { Pricelist } from '../pricelist.entity';
import { PricelistsService } from '../pricelists/pricelists.service';
import { Post, Put, Delete, Body, Param } from '@nestjs/common';

@Controller('pricelists')
export class PricelistsController {
  constructor(private pricelistsService: PricelistsService) {}

  //Display all Price table
  @Get()
  GetAllPrice(): Promise<Pricelist[]> {
    return this.pricelistsService.GetAllPrice();
  }
  //Add Price index
  @Post('create')
  async AddPrice(@Body() priceData: Pricelist): Promise<any> {
    return this.pricelistsService.AddPrice(priceData);
  }

  // Edit Price Index
  @Put(':id/update')
  async update(
    @Param('id') id,
    @Body() pricelistData: Pricelist,
  ): Promise<any> {
    pricelistData.id = Number(id);
    console.log('Update #' + pricelistData.id);
    return this.pricelistsService.update(pricelistData);
  }
  //Delete Price
  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.pricelistsService.delete(id);
  }
}

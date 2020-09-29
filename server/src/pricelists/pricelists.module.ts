import { Module } from '@nestjs/common';
import { PricelistsService } from './pricelists/pricelists.service';
import { PricelistsController } from './pricelists/pricelists.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pricelist } from './pricelist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pricelist])],
  providers: [PricelistsService],
  controllers: [PricelistsController],
})
export class PricelistsModule {}

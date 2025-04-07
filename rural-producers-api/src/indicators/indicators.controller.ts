import { Controller, Get } from '@nestjs/common';
import { IndicatorsService } from './indicators.service';

@Controller('indicators')
export class IndicatorsController {
  constructor(private readonly service: IndicatorsService) {}

  @Get('total-farms')
  getTotalFarms() {
    return this.service.getTotalFarms();
  }

  @Get('total-area')
  getTotalArea() {
    return this.service.getTotalArea();
  }

  @Get('crops-by-state')
  getCropsByState() {
    return this.service.getCropsByState();
  }
}

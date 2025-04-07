import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Producer } from '../producer/entities/producer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class IndicatorsService {
  constructor(
    @InjectRepository(Producer)
    private readonly producerRepo: Repository<Producer>,
  ) {}

  async getTotalFarms(): Promise<number> {
    return this.producerRepo.count();
  }

  async getTotalArea(): Promise<number> {
    const { sum } = await this.producerRepo
      .createQueryBuilder('p')
      .select('SUM(p.totalArea)', 'sum')
      .getRawOne();

    return parseFloat(sum) || 0;
  }

  async getCropsByState(): Promise<Record<string, Record<string, number>>> {
    const all = await this.producerRepo.find();

    const result: Record<string, Record<string, number>> = {};

    for (const producer of all) {
      const state = producer.state;
      if (!result[state]) result[state] = {};

      for (const crop of producer.crops) {
        if (!result[state][crop]) {
          result[state][crop] = 0;
        }
        result[state][crop] += 1;
      }
    }

    return result;
  }
}

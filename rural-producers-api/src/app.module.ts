import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProducerModule } from './producer/producer.module';
import { IndicatorsModule } from './indicators/indicators.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_DATABASE || 'rural_db',
      autoLoadEntities: true,
      synchronize: true, // usar apenas em desenvolvimento
    }),
    ProducerModule,
    IndicatorsModule,
  ],
})
export class AppModule {}
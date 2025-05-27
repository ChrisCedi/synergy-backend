import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

export const typeOrmConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: configService.get('PGHOST'),
  port: configService.get('PGPORT'),
  username: configService.get('PGUSER'),
  password: configService.get('PGPASSWORD'),
  database: configService.get('PGDATABASE'),
  ssl: true,
  logging: true,
  entities: [join(__dirname, '../**/*.entity.{js,ts}')],
  synchronize: true,
});

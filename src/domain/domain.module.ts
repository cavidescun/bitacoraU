import { Module } from '@nestjs/common';
import { getPostgreSQLConfig } from 'src/infrastructure/interface/database/database.config';
import { CupsRepository } from './cups/repository/cups.repository';
import { Cie10Repository } from './cie10/repository/cie10.repository';
@Module({
  exports:[

  ]
})

export class DomainModule {}
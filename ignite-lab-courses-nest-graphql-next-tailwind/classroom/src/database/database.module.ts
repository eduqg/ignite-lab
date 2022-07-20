import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ConfigModule.forRoot()], // para acessar variaveis de ambiente
  providers: [PrismaService],
  exports: [PrismaService],
})
export class DatabaseModule {}

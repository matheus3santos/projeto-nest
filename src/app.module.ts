import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './models/user.models';
import { UserModule } from './modules/user.module';
import { QueixaModel } from './models/queixa.models';
import { QueixaModule } from './modules/queixa.module';




@Module({
  imports: [

    UserModule,
    QueixaModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'matheus',
      password: '12345',
      database: 'projetoWeb',
      entities: [ UserModel, QueixaModel ],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

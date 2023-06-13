import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './models/user.models';
import { PersonModule } from './modules/person.module';
import { PersonModel } from './models/person.models'
import { UserModule } from './modules/user.module';



@Module({
  imports: [
    PersonModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'matheus',
      password: '12345',
      database: 'projetoWeb',
      entities: [ PersonModel, UserModel ],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

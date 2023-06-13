import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersController } from "src/controllers/user.controller";
import { UserModel } from "src/models/user.models";


@Module({
    imports: [TypeOrmModule.forFeature([UserModel])],
    controllers: [UsersController],
})

export class UserModule {}
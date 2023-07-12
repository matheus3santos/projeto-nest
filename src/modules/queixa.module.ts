import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { QueixaController } from "src/controllers/queixa.controller"
import { QueixaModel } from "src/models/queixa.models";






@Module({
    imports: [TypeOrmModule.forFeature([QueixaModel])],
    controllers:[QueixaController],
})

export class QueixaModule {}
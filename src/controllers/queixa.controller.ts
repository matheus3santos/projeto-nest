import { Body, Controller, Get, Post } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { QueixaModel } from "src/models/queixa.models";
import { Repository } from "typeorm";
import { QueixaSchema } from "src/schemas/queixa.schema";

@Controller('/queixa')
export class QueixaController{
    constructor(@InjectRepository(QueixaModel) private model: Repository<QueixaModel>,
    ) {}

    @Post() //Adicionar nova queixa
    public async create(@Body() body: QueixaSchema,
    ): Promise<{ data: QueixaModel }> {
        const queixaCreated =  await this.model.save(body);
        return { data: queixaCreated };
    }

    @Get()
    public async getAll(): Promise<{ data:QueixaModel[] }>{
        const list = await this.model.find();
        return { data: list };
    }














}
import { Body, Controller, Get, Post,Delete,Param,Put } from "@nestjs/common";
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

    @Delete(':id') //Deleter queixa
    public async delete(
        @Param('id') id: number,
    ): Promise<{ data: string}> {
        const person = await this.model.findOne({where: {id}});

        await this.model.delete(id);

        return { data: `A queixa com ${id} foi deletado do sistema.`};
    }

    @Put(':id')//Editar entidades
    public async update(
        @Param('id') id: number, 
        @Body() body: QueixaSchema): Promise<{ data: QueixaModel }> {
      const person = await this.model.findOne({where: { id }} );
        
      await this.model.update({id}, body);
      
      return { data: await this.model.findOne({where: { id } }) }    
    }












}
import { Controller,Get,Post,Put,Delete, Body,Param } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { PersonModel } from "src/models/person.models"
import { Repository } from "typeorm"
import { PersonSchema } from "src/schemas/person.schema"





@Controller('/person')
export class PersonController{
    constructor(@InjectRepository(PersonModel) private model: Repository<PersonModel>,
    ) {}

    @Post() //Adicionar nova entidade
    public async create(@Body() body: PersonSchema,
    ): Promise<{ data: PersonModel }> {
        const personCreated = await this.model.save(body);
        return { data: personCreated };
    }

    @Get(':id') //Listar apenas uma entidade
    public async getOne(@Param('id') id: number,): Promise<{ data: PersonModel }> {
        const person = await this.model.findOne({ where: { id }});
        return { data: person};
    }

    @Get()//Listar todas as entidades
    public async getAll(): Promise<{ data: PersonModel[]}> {
        const list = await this.model.find();
        return { data: list }; 
    }

    @Put(':id')//Editar entidades
    public async update(
        @Param('id') id: number, 
        @Body() body: PersonSchema): Promise<{ data: PersonModel }> {
      const person = await this.model.findOne({where: { id }} );
        
      await this.model.update({id}, body);
      
      return { data: await this.model.findOne({where: { id } }) }    
    }

    @Delete(':id')
    public async delete(
        @Param('id') id: number,
    ): Promise<{ data: string}> {
        const person = await this.model.findOne({where: {id}});

        await this.model.delete(id);

        return { data: `A pessoa com ${id} foi deletado do sistema.`};
    }
}
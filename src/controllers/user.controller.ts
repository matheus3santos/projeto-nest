import { Controller,Post,Get,Put,Delete,Body,Param } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { UserModel } from "src/models/user.models"
import { Repository } from "typeorm"
import { UserSchema } from "src/schemas/user.schema"

@Controller('/user')
export class UsersController{
    constructor(@InjectRepository(UserModel) private model: Repository<UserModel>,
    ){}

    
    @Post() //Adicionar nova entidade
    public async create(@Body() body: UserSchema,
    ): Promise<{ data: UserModel }> {
        const personCreated = await this.model.save(body);
        return { data: personCreated };
    }

    @Get(':id') //Listar apenas uma entidade
    public async getOne(@Param('id') id: number,): Promise<{ data: UserModel }> {
        const person = await this.model.findOne({ where: { id }});
        return { data: person};
    }

    @Get()//Listar todas as entidades
    public async getAll(): Promise<{ data: UserModel[]}> {
        const list = await this.model.find();
        return { data: list }; 
    }

    @Put(':id')//Editar entidades
    public async update(
        @Param('id') id: number, 
        @Body() body: UserSchema): Promise<{ data: UserModel }> {
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
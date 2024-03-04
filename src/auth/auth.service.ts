import { Injectable, HttpException, HttpStatus, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inscriptos } from '../inscriptos/inscriptos.entity';
import { UserLoginDto } from '../inscriptos/dto/createinscriptos.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(@InjectRepository(Inscriptos) private inscriptosRepository: Repository<Inscriptos>,
                private jwtService: JwtService){ }  

    async login(loginDto: UserLoginDto){

        const biker = await this.inscriptosRepository
            .createQueryBuilder("biker")
            .select(["i.doc_numero", "i.email"])
            .from(Inscriptos, "i")
            .where('i.doc_numero = :doc_numero && i.email = :email', {doc_numero: loginDto.doc_numero, email: loginDto.email})
            .getOne();

        if(!biker){
            throw new UnauthorizedException('Sin Credenciales para Ingresar');
        } else {
            const token = this.jwtService.signAsync({
                  email: biker.email,
                  doc_numero: biker.doc_numero
            })
            return {token, biker};
        }
    }
}
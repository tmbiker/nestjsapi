import { IsNotEmpty, IsNumber, IsNumberString, IsOptional } from "class-validator";

export class CreateInscriptosDto {
    idregistro: number;
    @IsOptional()
    idcorredor: number;
    @IsNumber()
    @IsNotEmpty()
    doc_numero: number;
    @IsOptional()
    tipo_doc: string;
    @IsNotEmpty()
    nombre: string;
    @IsNotEmpty()
    apellido: string;
    domicilio: string;
    localidad: string;
    @IsNotEmpty()
    provincia: string;
    codigo_postal: string;
    @IsNumber()
    c_celular: number;
    @IsNotEmpty()
    celular: number;
    @IsNotEmpty()
    genero: string;
    @IsNotEmpty()
    fecha_nacimiento: Date;
    @IsNotEmpty()
    email: string;
    @IsOptional()
    otros: string;
    pais: string;
}

export class UserLoginDto{
    @IsNumberString()
    @IsNotEmpty()
    doc_numero: number;
    @IsNotEmpty()
    email: string;
}
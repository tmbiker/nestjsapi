import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class InscripcionNuevoCorredorDto {
    @IsNumber()
    idcorredor: number
    @IsNumber()
    @IsNotEmpty()
    doc_numero: number
    @IsNotEmpty()
    nombre: string
    @IsNotEmpty()
    apellido: string
    @IsOptional()
    domicilio: string
    @IsOptional()
    localidad: string
    @IsNotEmpty()
    provincia: string
    @IsOptional()
    codigo_postal: string
    @IsNotEmpty()
    celular: string
    @IsNotEmpty()
    email: string
    @IsNotEmpty()
    genero: string
    @IsOptional()
    idequipo: number
    @IsNotEmpty()
    fecha_nacimiento: Date
}
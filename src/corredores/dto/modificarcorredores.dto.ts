import { IsNotEmpty, IsNumber, IsNumberString, IsOptional } from "class-validator";

export class ModificarCorredoresDto {
    @IsNumber()
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
    email: string
    @IsNotEmpty()
    celular: string
    @IsOptional()
    equipo: string
    @IsNotEmpty()
    genero: string
    @IsNotEmpty()
    fecha_nacimiento: Date
}
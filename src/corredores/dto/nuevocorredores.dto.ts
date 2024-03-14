import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class NuevoCorredoresDto {
    @IsOptional()
    idcorredor: number;    
    @IsNumber()
    @IsNotEmpty()
    doc_numero: number
    @IsOptional()
    tipo_doc: string;
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
    @IsOptional()
    c_telefono: string;
    @IsOptional()
    telefono: string;
    @IsNotEmpty()
    email: string
    @IsOptional()
    c_celular: string;
    @IsNotEmpty()
    celular: string
    @IsOptional()
    pais: string
    @IsOptional()
    imagen: string
    @IsNotEmpty()
    idequipo: number
    @IsNotEmpty()
    genero: string
    @IsNotEmpty()
    fecha_nacimiento: Date;
    @IsOptional()
    trofeo_mayor: number;
    @IsOptional()
    medallas_general: number;
    @IsOptional()
    medallas_categorias: number;
}
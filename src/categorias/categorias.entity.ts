import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";
import { Inscripciones } from '../inscripciones/inscripciones.entity';
import { Resultados } from '../resultados/resultados.entity';

@Entity({name: 'categorias'})
export class Categorias {
    @PrimaryGeneratedColumn('increment')
    idcategoria: number;
    @Column({select: false})
    orden: number;
    @Column({select: false})
    grupo: number;
    @Column()
    categoria: string;
    @Column({select: false})
    fecha_desde: number;
    @Column({select: false})
    fecha_hasta: number;
    @Column({select: false})
    general: string;
    @Column({select: false})
    genero: number;
    @Column({select: false})
    mostrar_siempre: number;
    @Column({select: false})
    trasmontanita: number;
    @Column({select: false})
    mixta: number;
    @Column({select: false})
    elite: number;
    @Column({select: false})
    obs: string;
    @Column({select: false})
    orden_importancia: number;
    
    @OneToMany(() => Inscripciones, inscripcion => inscripcion.categoria)
    @JoinColumn({name: 'idcategoria', referencedColumnName: 'idcategoria'})
    inscripcion: Inscripciones[];

    @OneToMany(() => Resultados, resultados => resultados.categoria)
    @JoinColumn({name: 'idcategoria', referencedColumnName: 'idcategoria'})
    resultado: Resultados[];
}

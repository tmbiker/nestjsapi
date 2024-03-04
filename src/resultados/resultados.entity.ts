import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Categorias } from '../categorias/categorias.entity'; 

@Entity({name: 'resultados'})
export class Resultados {
    @PrimaryGeneratedColumn('increment')
    idregistro: number;
    @Column({select: false})
    anio: number;
    @Column({select: false})
    idfecha: number;
    @Column({nullable: false})
    idcategoria: number;
    @Column({select: false})
    idgeneral: number;
    @Column()
    pscctg: number;
    @Column()
    pscgrl: number;
    @Column()
    pscgrl_total: number;
    @Column()
    placa: number;
    @Column()
    nombre: string;
    @Column()
    provincia: string;
    @Column()
    v1: string;
    @Column()
    v2: string;
    @Column()
    v3: string;
    @Column()
    v4: string;
    @Column()
    v5: string;
    @Column()
    total: string;
    @Column()
    dif1ctg: string;
    @Column()
    difantctg: string;
    @Column()
    dif1grl: string;
    @Column()
    difantgrl: string;
    @Column({select: false})
    cntvueltas: number;
    @Column({select: false})
    foto: number;
    @Column({select: false})
    id_event_foto: number;
    @Column({select: false})
    credencial: number;

    @ManyToOne(type => Categorias, categoria => categoria.resultado)
    @JoinColumn({name: 'idcategoria'})
    categoria: Categorias;

}
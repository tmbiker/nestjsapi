import { Column, Entity, PrimaryGeneratedColumn, Repository, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import { Categorias } from '../categorias/categorias.entity'; 
import { Inscriptos } from '../inscriptos/inscriptos.entity';
import { Equipos } from '../equipos/equipos.entity';

@Entity({name: 'inscripciones2024'})
export class Inscripciones {

    static getRepository(inscripcionesRepository: Repository<Inscripciones>) {
        throw new Error('Method not implemented.');
    }

    @PrimaryGeneratedColumn('increment')
    idregistro: number;
    @Column({nullable: false, select: false})
    idtramite: number;
    @Column({nullable: false})
    idcategoria: number;
    @Column()
    idcorredor: number;
    @Column({nullable: true})
    placa: number;
    @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP', select: false})
    fecha_hora: Date;
    @Column({nullable: true, select: false})
    estado: number;
    @Column({nullable: true, select: false})
    pagado: number;
    @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP', select: false})
    pago_fecha_hora: Date;
    @Column({nullable: true})
    horalargada: string;
    @Column({nullable: true, select: false})
    observaciones: string;
    @Column({nullable: true, select: false})
    proline: string;
    @Column({nullable: true, select: false})
    cc9: string;
    @Column({nullable: true, select: false})
    idprecio: number;
    @Column({nullable: true, select: false})
    placa_pedida: number;
    @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP', select: false})
    placa_pedida_fecha: Date;
    @Column({nullable: true, select: false})
    etiqueta_exp: number;
    @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP', select: false})
    etiqueta_exp_fecha: Date;
    @Column({nullable: true, select: false})
    seguro_exp: number;
    @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP', select: false})
    seguro_exp_fecha: Date;
    @Column({nullable: true, select: false})
    idmercadopago: number;
    @Column({nullable: true, select: false})
    facturado: number;
    @Column({nullable: true})
    idequipo: number;

    @ManyToOne(type => Categorias, categoria => categoria.inscripcion)
    @JoinColumn({name: 'idcategoria'})
    categoria: Categorias;

    @OneToOne(type => Inscriptos)
    @JoinColumn({name: 'idcorredor', referencedColumnName: "idregistro" })
    biker: Inscriptos[];

    @ManyToOne(type => Equipos, equipos => equipos.inscripcion)
    @JoinColumn({name: 'idequipo'})
    equipo: Equipos;
}

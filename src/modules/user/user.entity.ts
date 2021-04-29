import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

//esta clase tiene que heredar de baseEntity de typeorm por eso el extends,
//para q esta clase se transforme en tabla se usa el decorador @Entity(), dentro nombre en plural
@Entity('users')
export class User extends BaseEntity{

//primero poner un id,usando el decorador y entre ('increment') para q genere autoincremento
    @PrimaryGeneratedColumn('increment')
    id:number;

    /* para el nombre usamos el decorador @Column() dentro de este se especifica el tipo de 
    dato, que sea unico, la longitud max de caracteres, nullable que significa que guardarse 
    puede ser opcional por eso lo pongo falso pues es obligatorio*/
    @Column({type:'varchar', unique: true,length:20, nullable:false})
    username: string;

    @Column({type:'varchar',nullable:false})
    email: string;

    @Column({type:'varchar',nullable:false})
    password: string;

    //para saber si el user esta activo o no, necesita un valor por defecto Activo
    @Column({type:'varchar',default:'ACTIVE',length:8})
    status:string;

    /*creamos el timestamp de nuestra tabla con el createAt y su nombre para la BD
    asi sabremos cuando se crea y se actualiza la tabla*/
    @Column({type: 'timestamp', name:'create_at'})
    createAt: Date;

    @Column({type: 'timestamp', name:'update_at'})
    updateAt: Date;
}
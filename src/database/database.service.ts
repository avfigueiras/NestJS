import {TypeOrmModule} from '@nestjs/typeorm';
import { Configuration } from 'src/config/config.keys';
import { ConfigModule } from 'src/config/config.module';
import { ConfigService } from 'src/config/config.service';
import { ConnectionOptions } from 'typeorm';

export const databaseProviders = [
    TypeOrmModule.forRootAsync({
        //el import es pq necesita credenciales q tenemos en nuestro modulo ConfigModule
        imports: [ConfigModule],
        //el inject inyectamos el ConfigService para que nuestra BD obtenga su credencial
        inject: [ConfigService],
        /* useFactory es un metodo async, que es el q crea nuestro objeto de conexion con
        las props necesarias */
        async useFactory(config: ConfigService){
            return {
                // ssl es para el caso q necesitemos conectarnos a la BD en la nube
                ssl: true,
                // el tipo es ppstgres pq es la conexión con el SGBD
                type: 'postgres' as 'postgres',
                /* el host lo tenemos declarado en el .env, pero como tenemos un modulo de 
                configuracion con un enum en el que tengo mis variables,haremos uso del mismo
                siendo el mismo procedimiento para username y pass*/
                host:config.get(Configuration.HOST),
                username:config.get(Configuration.USERNAME),
                password:config.get(Configuration.PASSWORD),
                /* entities para saber donde estaran las entidades, se pone el directorio actual
                y se matchea con una expReg relacionada con .entity ya sea ts o js la extension,
                y las mismas serán creadas en la BD*/
                entities:[ __dirname + '/../**/*.entity{.ts,.js}'],
                /* la migracion es igual, todos los archivos que terminen en ts o js */
                migrations:[__dirname + '/migrations/*{.ts,.js}']
            } as ConnectionOptions
        } 
    })
];
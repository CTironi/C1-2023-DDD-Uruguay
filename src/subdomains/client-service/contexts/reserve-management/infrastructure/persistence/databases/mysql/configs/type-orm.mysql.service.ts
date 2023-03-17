import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from "@nestjs/typeorm";
import {
    CheckInMySqlEntity,
    CheckOutMySqlEntity,
    ConsumptionMySqlEntity,
    CustomerMySqlEntity,
    GuestMySqlEntity,
    InvoiceMySqlEntity,
    ReserveMySqlEntity,
    RoomMySqlEntity,
    RoomKeyMySqlEntity,
    EventMySqlEntity
} from "../entities";

@Injectable()
export class TypeOrmMySqlConfigService implements TypeOrmOptionsFactory {

    constructor(private readonly configService: ConfigService) { }

    createTypeOrmOptions(conectionName?: string): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: this.configService.get<string>('DB_HOST'),
            port: this.configService.get<number>('DB_PORT'),
            username: this.configService.get<string>('DB_USER'),
            password: this.configService.get<string>('DB_PASSWORD'),
            database: this.configService.get<string>('DB_NAME'),
            entities: [
                CheckInMySqlEntity,
                CheckOutMySqlEntity,
                ConsumptionMySqlEntity,
                CustomerMySqlEntity,
                GuestMySqlEntity,
                InvoiceMySqlEntity,
                ReserveMySqlEntity,
                RoomMySqlEntity,
                RoomKeyMySqlEntity,
                EventMySqlEntity
            ],
            synchronize: true,
            logging: true,
        }
    }
}
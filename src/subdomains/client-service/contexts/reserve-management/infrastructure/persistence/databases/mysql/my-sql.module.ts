import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmMySqlConfigService } from './configs/type-orm.mysql.service';
import {
    CheckInMySqlEntity,
    CheckOutMySqlEntity,
    ConsumptionMySqlEntity,
    CustomerMySqlEntity,
    GuestMySqlEntity,
    InvoiceMySqlEntity,
    ReserveMySqlEntity,
    RoomKeyMySqlEntity,
    RoomMySqlEntity
} from './entities';
import {
    CheckInRepository,
    CheckOutRepository,
    ConsumptionRepository,
    CustomerRepository,
    GuestRepository,
    InvoiceRepository,
    ReserveRepository,
    RoomKeyRepository,
    RoomRepository
} from './repositories';
import {
    CheckInMySqlService,
    CheckOutMySqlService,
    ConsumptionMySqlService,
    CustomerMySqlService,
    GuestMySqlService,
    InvoiceMySqlService,
    ReserveMySqlService,
    RoomMySqlService,
    RoomKeyMySqlService
} from './services';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useClass: TypeOrmMySqlConfigService,
        }),

        TypeOrmModule.forFeature([
            CheckInMySqlEntity,
            CheckOutMySqlEntity,
            ConsumptionMySqlEntity,
            CustomerMySqlEntity,
            GuestMySqlEntity,
            InvoiceMySqlEntity,
            ReserveMySqlEntity,
            RoomMySqlEntity,
            RoomKeyMySqlEntity

        ])
    ],
    providers: [
        CheckInMySqlService,
        CheckOutMySqlService,
        ConsumptionMySqlService,
        CustomerMySqlService,
        GuestMySqlService,
        InvoiceMySqlService,
        ReserveMySqlService,
        RoomMySqlService,
        RoomKeyMySqlService,

        CheckInRepository,
        CheckOutRepository,
        ConsumptionRepository,
        CustomerRepository,
        GuestRepository,
        InvoiceRepository,
        ReserveRepository,
        RoomKeyRepository,
        RoomRepository,

    ],
    exports: [
        CheckInMySqlService,
        CheckOutMySqlService,
        ConsumptionMySqlService,
        CustomerMySqlService,
        GuestMySqlService,
        InvoiceMySqlService,
        ReserveMySqlService,
        RoomMySqlService,
        RoomKeyMySqlService,

        CheckInRepository,
        CheckOutRepository,
        ConsumptionRepository,
        CustomerRepository,
        GuestRepository,
        InvoiceRepository,
        ReserveRepository,
        RoomKeyRepository,
        RoomRepository,
    ]
})
export class MySqlModule { }
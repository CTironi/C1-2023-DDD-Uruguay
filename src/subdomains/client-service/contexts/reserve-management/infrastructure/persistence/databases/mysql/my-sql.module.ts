import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmMySqlConfigService } from './configs/type-orm.mysql.service';
import {
    CheckInMySqlEntity,
    CheckOutMySqlEntity,
    ConsumptionMySqlEntity,
    CustomerMySqlEntity,
    EventMySqlEntity,
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
    EventRepository,
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
    RoomKeyMySqlService,
    EventMySqlService
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
            RoomKeyMySqlEntity,
            EventMySqlEntity

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
        EventMySqlService,

        CheckInRepository,
        CheckOutRepository,
        ConsumptionRepository,
        CustomerRepository,
        GuestRepository,
        InvoiceRepository,
        ReserveRepository,
        RoomKeyRepository,
        RoomRepository,
        EventRepository,

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
        EventMySqlService,

        CheckInRepository,
        CheckOutRepository,
        ConsumptionRepository,
        CustomerRepository,
        GuestRepository,
        InvoiceRepository,
        ReserveRepository,
        RoomKeyRepository,
        RoomRepository,
        EventRepository,
    ]
})
export class MySqlModule { }
import { Module } from "@nestjs/common";
import { MySqlModule } from './databases/mysql/my-sql.module';
import {
    CheckInService,
    CheckOutService,
    ConsumptionService,
    CustomerService,
    EventService,
    GuestService,
    InvoiceService,
    ReserveService,
    RoomKeyService,
    RoomService
} from "./services";


@Module({
    imports: [MySqlModule],
    providers: [
        CheckInService,
        CheckOutService,
        ConsumptionService,
        CustomerService,
        GuestService,
        InvoiceService,
        ReserveService,
        RoomKeyService,
        RoomService,
        EventService
    ],
    exports: [
        CheckInService,
        CheckOutService,
        ConsumptionService,
        CustomerService,
        GuestService,
        InvoiceService,
        ReserveService,
        RoomKeyService,
        RoomService,
        EventService
    ]
})
export class PersistenceModule { }
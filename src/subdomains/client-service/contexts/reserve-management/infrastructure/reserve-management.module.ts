import { Module } from "@nestjs/common";
import { PersistenceModule } from './persistence/persistence.module';
import {
    CheckInController,
    CheckOutController,
    ReserveController
} from "./controllers";
import { MessagingModule } from "./messaging/messaging.module";
import {
    CheckInControllerSuscriber,
    CheckOutControllerSuscriber,
    ReserveControllerSuscriber
} from "./messaging";

@Module({
    imports: [PersistenceModule, MessagingModule],
    controllers: [
        CheckInController,
        CheckOutController,
        ReserveController,

        ReserveControllerSuscriber,
        CheckInControllerSuscriber,
        CheckOutControllerSuscriber,

    ],
    providers: [],
    exports: []
})
export class ReserveManagementModule { }
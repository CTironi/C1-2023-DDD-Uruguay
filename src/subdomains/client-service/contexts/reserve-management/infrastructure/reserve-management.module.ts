import { Module } from "@nestjs/common";
import { PersistenceModule } from './persistence/persistence.module';
import { CheckInController, CheckOutController, ReserveController } from "./controllers";
import { MessagingModule } from "./messaging/messaging.module";
import { ReserveControllerSuscriber } from "./messaging";

@Module({
    imports:[PersistenceModule, MessagingModule],
    controllers:[
        CheckInController,
        CheckOutController,
        ReserveController,

        ReserveControllerSuscriber
    ],
    providers:[],
    exports:[]
})
export class ReserveManagementModule{}
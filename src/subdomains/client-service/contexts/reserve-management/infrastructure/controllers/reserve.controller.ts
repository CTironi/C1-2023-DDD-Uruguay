import { EndDateUpdatedMessagePublisher } from './../messaging/publisher/reserve/end-date-updated.message-publisher';
import {
    Body,
    Controller,
    Get,
    Post,
    Put
} from "@nestjs/common";
import {
    CustomerService,
    ReserveService,
    RoomService
} from "../persistence";
import {
    CustomerAddedMessagePublisher,
    RoomAddedMessagePublisher,
    ReserveCreatedMessagePublisher,
    StartDateUpdatedMessagePublisher,
    NumberOfGuestUpdatedMessagePublisher,
    PaymentMethodUpdatedMessagePublisher,
    StateUpdatedMessagePublisher,
    RoomObtainedMessagePublisher,
    CustomerObtainedMessagePublisher
} from '../messaging/publisher/';
import {
    AddCustomerCommand,
    AddRoomCommand,
    CreateReserveCommand,
    GetCustomerCommand,
    GetRoomCommand,
    UpdateEndDateCommand,
    UpdateNumberOfGuestsCommand,
    UpdatePaymentMethodCommand,
    UpdateStartDateCommand,
    UpdateStateCommand
} from '../utils/commands';
import {
    AddCustomerUseCase,
    AddRoomUseCase,
    CreateReserveUseCase,
    GetCustomerUseCase,
    GetRoomUseCase,
    UpdateEndDateUseCase,
    UpdateNumbreOfGuestUseCase,
    UpdatePaymentMethodUseCase,
    UpdateStartDateUseCase,
    UpdateStateUseCase
} from '../../application';

@Controller('reserve')
export class ReserveController {

    constructor(
        private readonly reserveService: ReserveService,
        private readonly customerService: CustomerService,
        private readonly roomService: RoomService,

        private readonly reserveCreatedMessagePublisher: ReserveCreatedMessagePublisher,
        private readonly customerAddedMessagePublisher: CustomerAddedMessagePublisher,
        private readonly roomAddedMessagePublisher: RoomAddedMessagePublisher,
        private readonly endDateUpdatedMessagePublisher: EndDateUpdatedMessagePublisher,
        private readonly startDateUpdatedMessagePublisher: StartDateUpdatedMessagePublisher,
        private readonly numberOfGuestUpdatedMessagePublisher: NumberOfGuestUpdatedMessagePublisher,
        private readonly paymentMethodUpdatedMessagePublisher: PaymentMethodUpdatedMessagePublisher,
        private readonly stateUpdatedMessagePublisher: StateUpdatedMessagePublisher,
        private readonly customerObatinedMessagePublisher: CustomerObtainedMessagePublisher,
        private readonly roomObtainedMessagePublisher: RoomObtainedMessagePublisher,
    ) { }


    @Post('/addCustomer')
    async addCustomer(@Body() command: AddCustomerCommand) {
        const useCase = new AddCustomerUseCase(
            this.reserveService,
            this.customerAddedMessagePublisher,
        );
        return await useCase.execute(command);
    }

    @Post('/addRoom')
    async addRoom(@Body() command: AddRoomCommand) {
        const useCase = new AddRoomUseCase(
            this.reserveService,
            this.roomAddedMessagePublisher,
        );
        return await useCase.execute(command);
    }

    @Post('/createReserve')
    async createReserve(@Body() command: CreateReserveCommand) {
        const useCase = new CreateReserveUseCase(
            this.reserveService,
            this.reserveCreatedMessagePublisher,
            this.customerObatinedMessagePublisher,
            this.roomObtainedMessagePublisher,
        );
        return await useCase.execute(command);
    }

    @Put('/updateStartDate')
    async updateStartDate(@Body() command: UpdateStartDateCommand) {
        const useCase = new UpdateStartDateUseCase(
            this.reserveService,
            this.startDateUpdatedMessagePublisher,
        );
        return await useCase.execute(command);
    }

    @Put('/updateEndDate')
    async updateEndDate(@Body() command: UpdateEndDateCommand) {
        const useCase = new UpdateEndDateUseCase(
            this.reserveService,
            this.endDateUpdatedMessagePublisher,
        );
        return await useCase.execute(command);
    }

    @Put('/updateNumberOfGuests')
    async updateNumberOfGuests(@Body() command: UpdateNumberOfGuestsCommand) {
        const useCase = new UpdateNumbreOfGuestUseCase(
            this.reserveService,
            this.numberOfGuestUpdatedMessagePublisher,
        );
        return await useCase.execute(command);
    }

    @Post('/updatePaymentMethod')
    async updatePaymentMethod(@Body() command: UpdatePaymentMethodCommand) {
        const useCase = new UpdatePaymentMethodUseCase(
            this.customerService,
            this.paymentMethodUpdatedMessagePublisher,
        );
        return await useCase.execute(command);
    }

    @Put('/updateState')
    async updateState(@Body() command: UpdateStateCommand) {
        const useCase = new UpdateStateUseCase(
            this.reserveService,
            this.stateUpdatedMessagePublisher,
        );
        return await useCase.execute(command);
    }

    @Get('/getCustomer')
    async getCustomer(@Body() command: GetCustomerCommand) {
        const useCase = new GetCustomerUseCase(
            this.reserveService,
            this.customerObatinedMessagePublisher,
        );
        return await useCase.execute(command);
    }

    @Get('/getRoom')
    async getRoom(@Body() command: GetRoomCommand) {
        const useCase = new GetRoomUseCase(
            this.reserveService,
            this.roomObtainedMessagePublisher,
        );
        return await useCase.execute(command);
    }
}
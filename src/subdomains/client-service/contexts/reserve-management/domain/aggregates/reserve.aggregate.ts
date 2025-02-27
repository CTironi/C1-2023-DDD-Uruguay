import { CustomerDomainEntity, ReserveDomainEntity, RoomDomainEntity } from "../entities";
import { ICustomerDomainService, IReserveDomainService, IRoomDomainService } from "../services/";
import {
    PaymentMethodUpdatedEventPublisher,
    StateUpdatedEventPublisher,
    StartDateUpdatedEventPublisher,
    RoomAddedEventPublisher,
    ReserveCreatedEventPublisher,
    NumberOfGuestsUpdatedEventPublisher,
    EndDateUpdatedEventPublisher,
    CustomerAddedEventPublisher,
    CustomerObtainedEventPublisher,
    RoomObtainedEventPublisher
} from "../events";
import { AggregateRootException } from "src/libs/sofka";
import {
    IAddRoom,
    ICreateReserve,
    IUpdateEndDate,
    IUpdateNumberOfGuests,
    IUpdatePaymentMethod,
    IUpdateStartDate,
    IUpdateState
} from "../interfaces";
import {
    CreateReserve,
    AddRoom,
    AddCustomer,
    UpdateStartDate,
    UpdateEndDate,
    UpdateNumberOfGuests,
    UpdatePaymentMethod,
    UpdateState,
    GetCustomer,
    GetRoom,
} from "./helpers/";

export class ReserveAggregate implements
    IReserveDomainService,
    ICustomerDomainService,
    IRoomDomainService {

    private readonly reserveService?: IReserveDomainService;
    private readonly customerService?: ICustomerDomainService;
    private readonly roomService?: IRoomDomainService;

    private readonly customerAddedEventPublisher?: CustomerAddedEventPublisher;
    private readonly endDateUpdatedEventPublisher?: EndDateUpdatedEventPublisher;
    private readonly numberOfGuestsUpdatedEventPublisher?: NumberOfGuestsUpdatedEventPublisher;
    private readonly reserveCreatedEventPublisher?: ReserveCreatedEventPublisher;
    private readonly roomAddedEventPublisher?: RoomAddedEventPublisher;
    private readonly startDateUpdatedEventPublisher?: StartDateUpdatedEventPublisher;
    private readonly paymentMethodUpdatedEventPublisher?: PaymentMethodUpdatedEventPublisher;
    private readonly stateUpdatedEventPublisher?: StateUpdatedEventPublisher;
    private readonly customerObtainedEventPublisher?: CustomerObtainedEventPublisher;
    private readonly roomObtainedEventPublisher?: RoomObtainedEventPublisher;

    constructor(
        {
            reserveService,
            customerService,
            roomService,

            customerAddedEventPublisher,
            endDateUpdatedEventPublisher,
            numberOfGuestsUpdatedEventPublisher,
            reserveCreatedEventPublisher,
            roomAddedEventPublisher,
            startDateUpdatedEventPublisher,
            paymentMethodUpdatedEventPublisher,
            stateUpdatedEventPublisher,
            customerObtainedEventPublisher,
            roomObtainedEventPublisher
        }: {
            reserveService?: IReserveDomainService,
            customerService?: ICustomerDomainService,
            roomService?: IRoomDomainService,

            customerAddedEventPublisher?: CustomerAddedEventPublisher,
            endDateUpdatedEventPublisher?: EndDateUpdatedEventPublisher;
            numberOfGuestsUpdatedEventPublisher?: NumberOfGuestsUpdatedEventPublisher;
            reserveCreatedEventPublisher?: ReserveCreatedEventPublisher;
            roomAddedEventPublisher?: RoomAddedEventPublisher;
            startDateUpdatedEventPublisher?: StartDateUpdatedEventPublisher;
            paymentMethodUpdatedEventPublisher?: PaymentMethodUpdatedEventPublisher;
            stateUpdatedEventPublisher?: StateUpdatedEventPublisher;
            customerObtainedEventPublisher?: CustomerObtainedEventPublisher;
            roomObtainedEventPublisher?: RoomObtainedEventPublisher;
        }
    ) {
        this.reserveService = reserveService
        this.customerService = customerService
        this.roomService = roomService

        this.customerAddedEventPublisher = customerAddedEventPublisher
        this.endDateUpdatedEventPublisher = endDateUpdatedEventPublisher
        this.numberOfGuestsUpdatedEventPublisher = numberOfGuestsUpdatedEventPublisher
        this.reserveCreatedEventPublisher = reserveCreatedEventPublisher
        this.roomAddedEventPublisher = roomAddedEventPublisher
        this.startDateUpdatedEventPublisher = startDateUpdatedEventPublisher
        this.paymentMethodUpdatedEventPublisher = paymentMethodUpdatedEventPublisher
        this.stateUpdatedEventPublisher = stateUpdatedEventPublisher
        this.customerObtainedEventPublisher = customerObtainedEventPublisher
        this.roomObtainedEventPublisher = roomObtainedEventPublisher
    }

    async createReserve(reserve: ICreateReserve): Promise<ReserveDomainEntity> {
        if (!this.reserveService)
            throw new AggregateRootException('reserveService no esta definido')
        if (!this.reserveCreatedEventPublisher)
            throw new AggregateRootException('reserveCreatedEventPublisher no esta definido')
        if (!this.customerObtainedEventPublisher)
            throw new AggregateRootException('customerObtainedEventPublisher no esta definido')
        if (!this.roomObtainedEventPublisher)
            throw new AggregateRootException('roomObtainedEventPublisher no esta definido')

        return await CreateReserve(reserve, this.reserveService, this.reserveCreatedEventPublisher, this.customerObtainedEventPublisher, this.roomObtainedEventPublisher)
    }

    async addRoom(room: IAddRoom): Promise<RoomDomainEntity> {
        if (!this.reserveService)
            throw new AggregateRootException('reserveService no esta definido')
        if (!this.roomAddedEventPublisher)
            throw new AggregateRootException('roomAddedEventPublisher no esta definido')

        return await AddRoom(room, this.reserveService, this.roomAddedEventPublisher)
    }

    async addCustomer(customer: CustomerDomainEntity): Promise<CustomerDomainEntity> {
        if (!this.reserveService)
            throw new AggregateRootException('reserveService no esta definido')
        if (!this.customerAddedEventPublisher)
            throw new AggregateRootException('customerAddedEventPublisher no esta definido')

        return await AddCustomer(customer, this.reserveService, this.customerAddedEventPublisher)
    }

    async updateStartDate(data: IUpdateStartDate): Promise<ReserveDomainEntity> {
        if (!this.reserveService)
            throw new AggregateRootException('reserveService no esta definido')
        if (!this.startDateUpdatedEventPublisher)
            throw new AggregateRootException('startDateUpdatedEventPublisher no esta definido')

        return await UpdateStartDate(data, this.reserveService, this.startDateUpdatedEventPublisher)
    }

    async updateEndDate(data: IUpdateEndDate): Promise<ReserveDomainEntity> {
        if (!this.reserveService)
            throw new AggregateRootException('reserveService no esta definido')
        if (!this.endDateUpdatedEventPublisher)
            throw new AggregateRootException('endDateUpdatedEventPublisher no esta definido')

        return await UpdateEndDate(data, this.reserveService, this.endDateUpdatedEventPublisher)
    }

    async updateNumberOfGuests(data: IUpdateNumberOfGuests): Promise<ReserveDomainEntity> {
        if (!this.reserveService)
            throw new AggregateRootException('reserveService no esta definido')
        if (!this.numberOfGuestsUpdatedEventPublisher)
            throw new AggregateRootException('numberOfGuestsUpdatedEventPublisher no esta definido')

        return await UpdateNumberOfGuests(data, this.reserveService, this.numberOfGuestsUpdatedEventPublisher)
    }

    async updatePaymentMethod(data: IUpdatePaymentMethod): Promise<CustomerDomainEntity> {
        if (!this.customerService)
            throw new AggregateRootException('customerService no esta definido')
        if (!this.paymentMethodUpdatedEventPublisher)
            throw new AggregateRootException('paymentMethodUpdatedEventPublisher no esta definido')

        return await UpdatePaymentMethod(data, this.customerService, this.paymentMethodUpdatedEventPublisher)
    }

    async updateState(data: IUpdateState): Promise<RoomDomainEntity> {
        if (!this.roomService)
            throw new AggregateRootException('roomService no esta definido')
        if (!this.stateUpdatedEventPublisher)
            throw new AggregateRootException('stateUpdatedEventPublisher no esta definido')

        return await UpdateState(data, this.roomService, this.stateUpdatedEventPublisher)
    }

    async getCustomer(data: string): Promise<CustomerDomainEntity> {
        if (!this.reserveService)
            throw new AggregateRootException('reserveService no esta definido')
        if (!this.customerObtainedEventPublisher)
            throw new AggregateRootException('customerObtainedEventPublisher no esta definido')

        return await GetCustomer(data, this.reserveService, this.customerObtainedEventPublisher)
    }

    async getRoom(data: string): Promise<RoomDomainEntity> {
        if (!this.reserveService)
            throw new AggregateRootException('reserveService no esta definido')
        if (!this.roomObtainedEventPublisher)
            throw new AggregateRootException('roomObtainedEventPublisher no esta definido')

        return await GetRoom(data, this.reserveService, this.roomObtainedEventPublisher)
    }
}

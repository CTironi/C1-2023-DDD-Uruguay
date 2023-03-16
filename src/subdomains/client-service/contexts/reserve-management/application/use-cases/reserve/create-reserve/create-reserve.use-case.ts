import {
    IUseCase,
    ValueObjectErrorHandler,
    ValueObjectException
} from "src/libs/sofka";
import {
    CustomerObtainedEventPublisher,
    DateValueObject,
    ICreateReserve,
    IReserveCreatedResponse,
    IReserveDomainEntity,
    IReserveDomainService,
    NumberOfGuestsValueObject,
    ReserveAggregate,
    ReserveCreatedEventPublisher,
    ReserveDomainEntity,
    RoomObtainedEventPublisher
} from "../../../../domain";
import { GetCustomerUseCase, GetRoomUseCase } from "..";

export class CreateReserveUseCase<
    Command extends ICreateReserve = ICreateReserve,
    Response extends IReserveCreatedResponse = IReserveCreatedResponse
> extends ValueObjectErrorHandler implements IUseCase<Command, Response>
{
    private readonly reserveAggregate: ReserveAggregate;
    private readonly getCustomerUseCase: GetCustomerUseCase;
    private readonly getRoomUseCase: GetRoomUseCase;

    constructor(
        private readonly reserveService: IReserveDomainService,
        private readonly reserveCreatedEventPublisher: ReserveCreatedEventPublisher,
        private readonly customerObtainedEventPublisher: CustomerObtainedEventPublisher,
        private readonly roomObtainedEventPublisher: RoomObtainedEventPublisher,
    ) {
        super();
        this.reserveAggregate = new ReserveAggregate({
            reserveService,
            reserveCreatedEventPublisher,
            customerObtainedEventPublisher
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response
    }


    private async executeCommand(command: Command): Promise<ReserveDomainEntity | null> {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);
        const reserve = this.createEntityReserveDomain(ValueObject, command);
        return this.exectueReserveAggregate(await reserve)
    }

    private createValueObject(command: Command): IReserveDomainEntity {
        const numberOfGuests = new NumberOfGuestsValueObject(command.numberOfGuests);
        const startDate = new DateValueObject(command.startDate);
        const endDate = new DateValueObject(command.endDate);

        return {
            numberOfGuests,
            startDate,
            endDate
        }
    }

    private validateValueObject(valueObject: IReserveDomainEntity): void {
        const {
            numberOfGuests,
        } = valueObject

        if (numberOfGuests instanceof NumberOfGuestsValueObject && numberOfGuests.hasErrors())
            this.setErrors(numberOfGuests.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por CreateReserveUseCase',
                this.getErrors(),
            );
    }

    private async createEntityReserveDomain(valueObject: IReserveDomainEntity, command: Command): Promise<ReserveDomainEntity> {
        const {
            numberOfGuests,
            startDate,
            endDate
        } = valueObject

        const getCustomer = new GetCustomerUseCase(this.reserveService, this.customerObtainedEventPublisher)

        const getRoom = new GetRoomUseCase(this.reserveService, this.roomObtainedEventPublisher)

        const responseCustomer = getCustomer.execute({customerId: command.customerId})

        const responseRoom = getRoom.execute({roomId: command.roomId})

        return new ReserveDomainEntity({
            numberOfGuests: numberOfGuests.valueOf(),
            startDate: new Date,
            endDate: new Date,
            customer: (await responseCustomer).data ,
            room: (await responseRoom).data,
        })
    }

    private exectueReserveAggregate(reserve: IReserveDomainEntity): Promise<ReserveDomainEntity | null> {
        return this.reserveAggregate.createReserve(reserve as ICreateReserve)
    }
}

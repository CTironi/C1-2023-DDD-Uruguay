import {
    IUseCase,
    ValueObjectErrorHandler
} from "src/libs/sofka";
import {
    CustomerDomainEntity,
    CustomerObtainedEventPublisher,
    IReserveDomainService,
    ICustomerObtainedResponse,
    IGetCustomer,
    ReserveAggregate
} from "../../../../domain";

export class GetCustomerUseCase<
    Command extends IGetCustomer = IGetCustomer,
    Response extends ICustomerObtainedResponse = ICustomerObtainedResponse

>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly reserveAggregate: ReserveAggregate;

    constructor(
        private readonly reserveService: IReserveDomainService,
        private readonly customerObtainedEventPublisher: CustomerObtainedEventPublisher,
    ) {
        super();
        this.reserveAggregate = new ReserveAggregate({
            reserveService,
            customerObtainedEventPublisher,
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response
    }

    private async executeCommand(command: Command): Promise<CustomerDomainEntity | null> {
        return this.reserveAggregate.getCustomer(command.customerId)
    }

}
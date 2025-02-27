import {
    IUseCase,
    ValueObjectErrorHandler
} from "src/libs/sofka";
import {
    IGetInvoice,
    ICheckOutDomainService,
    IInvoiceObtainedResponse,
    CheckOutAggregate,
    InvoiceDomainEntity,
    InvoiceObtainedEventPublisher
} from "../../../../domain";

export class GetInvoiceUseCase<
    Command extends IGetInvoice = IGetInvoice,
    Response extends IInvoiceObtainedResponse = IInvoiceObtainedResponse
>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly checkOutAggregate: CheckOutAggregate;

    constructor(
        private readonly checkOutService: ICheckOutDomainService,
        private readonly invoiceObtainedEventPublisher: InvoiceObtainedEventPublisher,
    ) {
        super();
        this.checkOutAggregate = new CheckOutAggregate({
            checkOutService,
            invoiceObtainedEventPublisher,
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response
    }

    private async executeCommand(command: Command): Promise<InvoiceDomainEntity | null> {
        return this.checkOutAggregate.getInvoice(command.invoiceId)
    }
}
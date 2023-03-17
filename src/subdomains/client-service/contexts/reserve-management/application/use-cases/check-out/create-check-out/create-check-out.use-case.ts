import {
    IUseCase,
    ValueObjectErrorHandler,
    ValueObjectException
} from "src/libs/sofka";
import {
    CheckOutAggregate,
    CheckOutCreatedEventPublisher,
    CheckOutDomainEntity,
    ConsumptionObtainedEventPublisher,
    DateValueObject,
    FullNameValueObject,
    ICheckOutCreatedResponse,
    ICheckOutDomainEntity,
    ICheckOutDomainService,
    ICreateCheckOut,
    InvoiceObtainedEventPublisher
} from "../../../../domain";
import {
    GetConsumptionUseCase,
    GetInvoiceUseCase
} from "..";

export class CreateCheckOutUseCase<
    Command extends ICreateCheckOut = ICreateCheckOut,
    Response extends ICheckOutCreatedResponse = ICheckOutCreatedResponse
> extends ValueObjectErrorHandler implements IUseCase<Command, Response>
{
    private readonly checkOutAggregate: CheckOutAggregate;
    private readonly getConsumptionUseCase: GetConsumptionUseCase;
    private readonly getInvoiceUseCase: GetInvoiceUseCase;

    constructor(
        private readonly checkOutService: ICheckOutDomainService,
        private readonly checkOutCreatedEventPublisher: CheckOutCreatedEventPublisher,
        private readonly invoiceObtainedEventPublisher: InvoiceObtainedEventPublisher,
        private readonly consumptionObtainedEventPublisher: ConsumptionObtainedEventPublisher,
    ) {
        super();
        this.checkOutAggregate = new CheckOutAggregate({
            checkOutService,
            checkOutCreatedEventPublisher,
            invoiceObtainedEventPublisher,
            consumptionObtainedEventPublisher
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response
    }


    private async executeCommand(command: Command): Promise<CheckOutDomainEntity | null> {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);
        const checkOut = this.createEntityCheckOutDomain(ValueObject, command);
        return this.exectueCheckOutAggregate(await checkOut)
    }

    private createValueObject(command: Command): ICheckOutDomainEntity {
        const recepsionistName = new FullNameValueObject(command.recepsionistName);
        const endDate = new DateValueObject(command.endDate);

        return {
            recepsionistName,
            endDate
        }
    }

    private validateValueObject(valueObject: ICheckOutDomainEntity): void {
        const {
            recepsionistName,
        } = valueObject

        if (recepsionistName instanceof FullNameValueObject && recepsionistName.hasErrors())
            this.setErrors(recepsionistName.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por CreateCheckOutUseCase',
                this.getErrors(),
            );
    }

    private async createEntityCheckOutDomain(valueObject: ICheckOutDomainEntity, command: Command): Promise<CheckOutDomainEntity> {
        const {
            recepsionistName,
            endDate
        } = valueObject

        const getConsumption = new GetConsumptionUseCase(this.checkOutService, this.consumptionObtainedEventPublisher)

        const getInvoice = new GetInvoiceUseCase(this.checkOutService, this.invoiceObtainedEventPublisher)

        const responseConsumption = getConsumption.execute({ consumptionId: command.consumptionId })

        const responseInvoice = getInvoice.execute({ invoiceId: command.invoiceId })

        return new CheckOutDomainEntity({
            recepsionistName: recepsionistName.valueOf(),
            endDate: new Date,
            consumption: (await responseConsumption).data,
            invoice: (await responseInvoice).data,
        })
    }

    private exectueCheckOutAggregate(checkOut: CheckOutDomainEntity): Promise<CheckOutDomainEntity | null> {
        return this.checkOutAggregate.createCheckOut(checkOut)
    }
}

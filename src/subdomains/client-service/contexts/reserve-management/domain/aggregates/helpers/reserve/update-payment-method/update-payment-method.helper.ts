import { CustomerDomainEntity } from "../../../../entities";
import { PaymentMethodUpdatedEventPublisher } from "../../../../events";
import { IUpdatePaymentMethod } from "../../../../interfaces";
import { ICustomerDomainService } from "../../../../services";

export const UpdatePaymentMethod = async (
    data: IUpdatePaymentMethod,
    customerService: ICustomerDomainService,
    paymentMethodUpdatedEventPublisher: PaymentMethodUpdatedEventPublisher
): Promise<CustomerDomainEntity | null> => {
    const result = await customerService.updatePaymentMethod(data);
    paymentMethodUpdatedEventPublisher.response = result;
    paymentMethodUpdatedEventPublisher.publish();
    return result;
}

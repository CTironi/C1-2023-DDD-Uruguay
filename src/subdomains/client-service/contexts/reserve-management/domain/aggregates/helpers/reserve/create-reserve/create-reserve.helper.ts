import { ReserveDomainEntity } from "../../../../entities";
import { ReserveCreatedEventPublisher, RoomObtainedEventPublisher } from "../../../../events";
import { ICreateReserve } from "../../../../interfaces";
import { IReserveDomainService } from "../../../../services";
import { CustomerObtainedEventPublisher } from '../../../../events/publishers/reserve/customer-obtained.event-publisher';

export const CreateReserve = async (
    reserve: ICreateReserve,
    reserveService: IReserveDomainService,
    reserveCreatedEventPublisher: ReserveCreatedEventPublisher,
    customerObtainedEventPublisher: CustomerObtainedEventPublisher,
    roomObtainedEventPublisher: RoomObtainedEventPublisher
): Promise<ReserveDomainEntity | null> => {
    const result = await reserveService.createReserve(reserve);
    reserveCreatedEventPublisher.response = result;
    reserveCreatedEventPublisher.publish();
    return result;
}

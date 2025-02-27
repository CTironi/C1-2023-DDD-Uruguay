import { RoomKeyDomainEntity } from "../../../../entities";
import { AccessLevelUpdatedEventPublisher } from "../../../../events";
import { IUpdateAccessLevel } from "../../../../interfaces";
import { IRoomKeyDomainService } from "../../../../services";

export const UpdateAccessLevel = async (
    data: IUpdateAccessLevel,
    roomKeyService: IRoomKeyDomainService,
    accessLevelUpdatedEventPublisher: AccessLevelUpdatedEventPublisher
): Promise<RoomKeyDomainEntity | null> => {
    const result = await roomKeyService.updateAccessLevel(data);
    accessLevelUpdatedEventPublisher.response = result;
    accessLevelUpdatedEventPublisher.publish();
    return result;
}

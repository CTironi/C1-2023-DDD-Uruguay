import { IsUUID } from "class-validator";
import { IGetRoomKey } from "../../../../domain";
import { ApiProperty } from "@nestjs/swagger";

export class GetRoomKeyCommand implements IGetRoomKey {

    @ApiProperty({
        example:'df0262ec-61af-4c37-abe7-7f86db59b3ca',
        description:'Id de la roomkey a buscar',
    })
    @IsUUID()
    roomKeyId: string
}
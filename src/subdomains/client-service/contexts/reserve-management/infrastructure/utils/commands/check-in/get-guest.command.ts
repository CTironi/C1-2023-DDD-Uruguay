import { IsUUID } from "class-validator";
import { IGetGuest } from "../../../../domain";
import { ApiProperty } from "@nestjs/swagger";

export class GetGuestCommand implements IGetGuest{

    @ApiProperty({
        example:'df0262ec-61af-4c37-abe7-7f86db59b3ca',
        description:'Id del guest a buscar',
    })
    @IsUUID()
    guestId: string
}
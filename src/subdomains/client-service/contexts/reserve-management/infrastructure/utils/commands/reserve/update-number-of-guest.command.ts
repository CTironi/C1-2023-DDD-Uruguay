import { ApiProperty } from "@nestjs/swagger";
import { IUpdateNumberOfGuests } from "../../../../domain";
import { IsNumber, IsUUID } from "class-validator";

export class UpdateNumberOfGuestsCommand implements IUpdateNumberOfGuests {

    @ApiProperty({
        example:'df0262ec-61af-4c37-abe7-7f86db59b3ca',
        description:'Id del la reserve a actualizar',
    })
    @IsUUID()
    reserveId?: string;

    @ApiProperty({
        example: 2,
        description:'numero de huspedes a actualizar',
    })
    @IsNumber()
    numberOfGuests?: number;
}
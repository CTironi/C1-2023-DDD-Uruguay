import { IsDate, IsUUID } from "class-validator";
import { IUpdateStartDate } from "../../../../domain";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateStartDateCommand implements IUpdateStartDate {

    @ApiProperty({
        example:'df0262ec-61af-4c37-abe7-7f86db59b3ca',
        description:'Id de la reserve a actualizar',
    })
    @IsUUID()
    reserveId?: string;

    @ApiProperty({
        example:"2023-03-16T21:20:14.315Z",
        description:'nueva date a actualizar',
    })
    @IsDate()
    Date?: Date;
}
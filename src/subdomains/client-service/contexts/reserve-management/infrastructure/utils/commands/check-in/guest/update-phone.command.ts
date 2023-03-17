import { IsString, IsUUID } from "class-validator";
import { IUpdatePhone } from "../../../../../domain";
import { ApiProperty } from "@nestjs/swagger";

export class UpdatePhoneCommand implements IUpdatePhone {
    @ApiProperty({
        example:'df0262ec-61af-4c37-abe7-7f86db59b3ca',
        description:'Id del guest a actualizar',
    })
    @IsUUID()
    guestId: string;

    @ApiProperty({
        example:'091929394',
        description:'telefono del guest a actualizar',
    })
    @IsString()
    phone: string;
}
import { IsString, IsUUID } from "class-validator";
import { IUpdateEmail } from "../../../../../domain";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateEmailCommand implements IUpdateEmail {

    @ApiProperty({
        example:'df0262ec-61af-4c37-abe7-7f86db59b3ca',
        description:'Id del guest a actualizar',
    })
    @IsUUID()
    guestId: string;

    @ApiProperty({
        example:'correo1234@correo.com.uy',
        description:'email del guest a actualizar',
    })
    @IsString()
    email: string;
}
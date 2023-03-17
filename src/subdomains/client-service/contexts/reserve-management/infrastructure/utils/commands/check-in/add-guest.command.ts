import { IsNumber, IsString, IsUUID } from "class-validator";
import { IAddGuest } from "../../../../domain";
import { ApiProperty } from "@nestjs/swagger";


export class AddGuestCommand implements IAddGuest {

    @ApiProperty({
        example:'df0262ec-61af-4c37-abe7-7f86db59b3ca',
        description:'Id del guest a crear',
    })
    @IsUUID()
    guestId: string;

    @ApiProperty({
        example:'Cristian Tironi',
        description:'nombre del guest',
    })
    @IsString()
    fullName: string;

    @ApiProperty({
        example:12345678,
        description:'documento del guest',
    })
    @IsNumber()
    document: number;

    @ApiProperty({
        example:'+59891929394',
        description:'telefono del guest',
    })
    @IsString()
    phone: string;

    @ApiProperty({
        example:'correo@correo.com',
        description:'email de guest',
    })
    @IsString()
    email: string;
}
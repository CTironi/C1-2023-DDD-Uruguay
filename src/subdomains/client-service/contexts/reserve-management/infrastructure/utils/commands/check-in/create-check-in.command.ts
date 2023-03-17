import { IsString, IsUUID, IsDate } from 'class-validator';
import { ICreateCheckIn } from "../../../../domain";
import { ApiProperty } from '@nestjs/swagger';

export class CreateCheckInCommand implements ICreateCheckIn {

    @ApiProperty({
        example:'df0262ec-61af-4c37-abe7-7f86db59b3ca',
        description:'Id del chackIn a crear',
    })
    @IsUUID()
    checkInId: string;

    @ApiProperty({
        example:"2023-03-16T21:20:14.315Z",
        description:'fecha de checkIn',
    })
    @IsDate()
    startDate: Date;

    @ApiProperty({
        example:'Marta Legrand',
        description:'nombre de recepcionista',
    })
    @IsString()
    recepsionistName: string;

    @ApiProperty({
        example:'df0262ec-61af-4c37-abe7-7f86db59b3ca',
        description:'Id de la roomkey',
    })
    @IsUUID()
    roomKeyId: string;

    @ApiProperty({
        example:'df0262ec-61af-4c37-abe7-7f86db59b3ca',
        description:'Id del guest',
    })
    @IsUUID()
    guestId: string;
}
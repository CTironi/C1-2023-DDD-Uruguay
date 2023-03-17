import { IsDate, IsNumber, IsUUID } from "class-validator";
import { ICreateReserve } from "../../../../domain";
import { ApiProperty } from "@nestjs/swagger";


export class CreateReserveCommand implements ICreateReserve{

    @ApiProperty({
        example:'df0262ec-61af-4c37-abe7-7f86db59b3ca',
        description:'Id de la reserve a crear',
    })
    @IsUUID()
    reserveId?: string;

    @ApiProperty({
        example:"2023-03-16T21:20:14.315Z",
        description:'fecha de inicio de la reserva',
    })
    @IsDate()
    startDate?: Date;

    @ApiProperty({
        example:"2023-03-16T21:20:14.315Z",
        description:'fecha de finalizacion de la reserva',
    })
    @IsDate()
    endDate?: Date;

    @ApiProperty({
        example: 2,
        description:'numero de huspedes',
    })
    @IsNumber()
    numberOfGuests: number;

    @ApiProperty({
        example:'df0262ec-61af-4c37-abe7-7f86db59b3ca',
        description:'Id de la room a reservar',
    })
    @IsUUID()
    roomId: string;
    
    @ApiProperty({
        example:'df0262ec-61af-4c37-abe7-7f86db59b3ca',
        description:'Id del customer a reservar',
    })
    @IsUUID()
    customerId: string;

}
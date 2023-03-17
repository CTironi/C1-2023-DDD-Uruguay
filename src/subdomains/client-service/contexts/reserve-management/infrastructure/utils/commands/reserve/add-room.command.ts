import { IsAlphanumeric, IsBoolean, IsNumber, IsString, IsUUID, MaxLength } from "class-validator";
import { IAddRoom } from "../../../../domain/interfaces/commands";
import { ApiProperty } from "@nestjs/swagger";

export class AddRoomCommand implements IAddRoom {

    @ApiProperty({
        example:'df0262ec-61af-4c37-abe7-7f86db59b3ca',
        description:'Id de la room a crear',
    })
    @IsUUID()
    roomId: string;

    @ApiProperty({
        example:"Piso2",
        description:'piso donde se localiza la habitacion',
    })
    @IsString()
    @IsAlphanumeric()
    @MaxLength(50)
    location: string;

    @ApiProperty({
        example:'Basica',
        description:'acomodacion de la habitacion',
    })
    @IsString()
    accommodation: string;

    @ApiProperty({
        example:'Doble',
        description:'tipo de habitacion',
    })
    @IsString()
    type: string;

    @ApiProperty({
        example: true,
        description:'estado de la habitacion',
    })
    @IsBoolean()
    state: boolean;

    @ApiProperty({
        example:4,
        description:'numero de la habitacion',
    })
    @IsNumber()
    @MaxLength(2)
    roomNumber: number;

}
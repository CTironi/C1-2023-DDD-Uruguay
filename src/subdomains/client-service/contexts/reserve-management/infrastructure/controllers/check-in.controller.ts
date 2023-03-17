import {
    Body,
    Controller,
    Get,
    Post,
    Put
} from "@nestjs/common";
import {
    CheckInService,
    GuestService,
    RoomKeyService
} from "../persistence";
import {
    AccessLevelUpdatedMessagePublisher,
    CheckInCreatedMessagePublisher,
    EmailUpdatedMessagePublisher,
    GuestAddedMessagePublisher,
    GuestObtainedMessagePublisher,
    PhoneUpdatedMessagePublisher,
    RoomKeyAddedMessagePublisher,
    RoomKeyObtainedMessagePublisher
} from "../messaging";
import {
    AddGuestCommand,
    AddRoomKeyCommand,
    CreateCheckInCommand,
    GetGuestCommand,
    GetRoomKeyCommand,
    UpdateAccessLevelCommand,
    UpdateEmailCommand,
    UpdatePhoneCommand
} from "../utils/commands";
import {
    AddGuestUseCase,
    AddRoomKeyUseCase,
    CreateCheckInUseCase,
    GetGuestUseCase,
    GetRoomKeyUseCase,
    UpdateAccessLevelUseCase,
    UpdateEmailUseCase,
    UpdatePhoneUseCase
} from "../../application/use-cases";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags('check-in')
@Controller('check-in')
export class CheckInController {

    constructor(
        private readonly checkInService: CheckInService,
        private readonly guestService: GuestService,
        private readonly roomKeyService: RoomKeyService,

        private readonly checkInCreatedMessagePublisher: CheckInCreatedMessagePublisher,
        private readonly guestAddedMessagePublisher: GuestAddedMessagePublisher,
        private readonly roomKeyAddedMessagePublisher: RoomKeyAddedMessagePublisher,
        private readonly emailUpdatedMessagePublisher: EmailUpdatedMessagePublisher,
        private readonly phoneUpdatedMessagePublisher: PhoneUpdatedMessagePublisher,
        private readonly accessLevelUpdatedMessagePublisher: AccessLevelUpdatedMessagePublisher,
        private readonly guestObatinedMessagePublisher: GuestObtainedMessagePublisher,
        private readonly roomKeyObtainedMessagePublisher: RoomKeyObtainedMessagePublisher,
    ) { }


    @ApiOperation({summary: "add Guest"})
    @Post('/addGuest')
    async addGuest(@Body() command: AddGuestCommand) {
        const useCase = new AddGuestUseCase(
            this.checkInService,
            this.guestAddedMessagePublisher,
        );
        return await useCase.execute(command);
    }

    @ApiOperation({summary: "add RoomKey"})
    @Post('/addRoomKey')
    async addRoomKey(@Body() command: AddRoomKeyCommand) {
        const useCase = new AddRoomKeyUseCase(
            this.checkInService,
            this.roomKeyAddedMessagePublisher,
        );
        return await useCase.execute(command);
    }

    @ApiOperation({summary: "create CheckIn"})
    @Post('/createCheckIn')
    async createCheckIn(@Body() command: CreateCheckInCommand) {
        const useCase = new CreateCheckInUseCase(
            this.checkInService,
            this.checkInCreatedMessagePublisher,
            this.guestObatinedMessagePublisher,
            this.roomKeyObtainedMessagePublisher
        );
        return await useCase.execute(command);
    }

    @ApiOperation({summary: "update Phone"})
    @Post('/updatePhone')
    async updatePhone(@Body() command: UpdatePhoneCommand) {
        const useCase = new UpdatePhoneUseCase(
            this.guestService,
            this.phoneUpdatedMessagePublisher,
        );
        return await useCase.execute(command);
    }

    @ApiOperation({summary: "update Email"})
    @Post('/updateEmail')
    async updateEmail(@Body() command: UpdateEmailCommand) {
        const useCase = new UpdateEmailUseCase(
            this.guestService,
            this.emailUpdatedMessagePublisher,
        );
        return await useCase.execute(command);
    }

    @ApiOperation({summary: "update AccessLevel"})
    @Post('/updateAccessLevel')
    async updateAccessLevel(@Body() command: UpdateAccessLevelCommand) {
        const useCase = new UpdateAccessLevelUseCase(
            this.roomKeyService,
            this.accessLevelUpdatedMessagePublisher,
        );
        return await useCase.execute(command);
    }

    @ApiOperation({summary: "get Guest"})
    @Get('/getGuest')
    async getGuest(@Body() command: GetGuestCommand) {
        const useCase = new GetGuestUseCase(
            this.checkInService,
            this.guestObatinedMessagePublisher,
        );
        return await useCase.execute(command);
    }

    @ApiOperation({summary: "get RoomKey"})
    @Get('/getRoomKey')
    async getRoomKey(@Body() command: GetRoomKeyCommand) {
        const useCase = new GetRoomKeyUseCase(
            this.checkInService,
            this.roomKeyObtainedMessagePublisher,
        );
        return await useCase.execute(command);
    }
}
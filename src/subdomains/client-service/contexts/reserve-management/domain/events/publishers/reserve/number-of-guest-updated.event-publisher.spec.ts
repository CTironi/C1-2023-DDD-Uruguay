import { IEventPublisher } from "src/libs/sofka";
import { NumberOfGuestsUpdatedEventPublisher } from "./number-of-guest-updated.event-publisher";
import { ReserveDomainEntity } from "../../../entities";

class EventPublisher extends NumberOfGuestsUpdatedEventPublisher { }

describe('NumberOfGuestsUpdatedEventPublisher', () => {
    let eventPublisher: EventPublisher;
    let publisher: IEventPublisher;

    beforeEach(async () => {
        publisher = { emit: jest.fn(), send: jest.fn() }
        eventPublisher = new EventPublisher(publisher);
    });

    it('should be defined', () => {
        expect(eventPublisher).toBeDefined();
    });

    it('should emit event', () => {
        // Arrange
        const topic = 'reserve-management.number-of-guests-updated';
        const response = new ReserveDomainEntity();
        const data = JSON.stringify({ data: response });
        eventPublisher.response = response;
        jest.spyOn(publisher, 'emit');

        // Act
        eventPublisher.publish();

        // Assert
        expect(publisher.emit).toBeCalledWith(topic, data);
    });
});
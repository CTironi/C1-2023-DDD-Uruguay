import { IEventPublisher } from "../../../../../../../../libs/sofka";
import { CustomerObtainedEventPublisher } from "./customer-obtained.event-publisher";
import { ReserveDomainEntity } from "../../../entities";

class EventPublisher extends CustomerObtainedEventPublisher { }

describe('EndDateUpdatedEventPublisher', () => {
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
        const topic = 'reserve-management.customer-obtained';
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
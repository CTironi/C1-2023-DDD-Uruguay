import { Controller } from "@nestjs/common";
import { Ctx, EventPattern, KafkaContext, Payload } from "@nestjs/microservices";
import { EventMySqlEntity, EventService } from "../../persistence";

@Controller()
export class ReserveControllerSuscriber {

    constructor(
        private readonly eventService: EventService
    ) { }



    /**
     * EventPattern se utiliza para definir un patrón de evento de Kafka
     * al que el controlador responderá.
     * 
     * Payload se utiliza para extraer los datos del mensaje del evento.
     *
     * KafkaContext que se utiliza para acceder a los metadatos del contexto de Kafka.
     * 
     * En el contexto de los eventos Kafka, el término "payload"
     * se refiere a los datos contenidos en el mensaje del evento. 
     * En otras palabras, el payload es la carga útil de información 
     * que se envía en el mensaje de Kafka.
     * 
     * @param {*} data
     * @param {KafkaContext} context
     * @memberof CreatedClientController
     */
    @EventPattern('reserve-management.customer-added')
    customerAdded(@Payload() data: any, @Ctx() context: KafkaContext) {

        const event = new EventMySqlEntity();
        event.data = JSON.stringify(data);
        event.type = 'reserve-management.customer-added';
        event.createdAt = Date();

        this.eventService.registerEvent(event);

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    @EventPattern('reserve-management.customer-obtained')
    customerObtained(@Payload() data: any, @Ctx() context: KafkaContext) {

        const event = new EventMySqlEntity();
        event.data = JSON.stringify(data);
        event.type = 'reserve-management.customer-obtained';
        event.createdAt = Date();

        this.eventService.registerEvent(event);

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    @EventPattern('reserve-management.end-date-updated')
    endDateUpdated(@Payload() data: any, @Ctx() context: KafkaContext) {

        const event = new EventMySqlEntity();
        event.data = JSON.stringify(data);
        event.type = 'reserve-management.end-date-updated';
        event.createdAt = Date();

        this.eventService.registerEvent(event);

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    @EventPattern('reserve-management.number-of-guests-updated')
    numberOfGuestsUpdated(@Payload() data: any, @Ctx() context: KafkaContext) {

        const event = new EventMySqlEntity();
        event.data = JSON.stringify(data);
        event.type = 'reserve-management.number-of-guests-updated';
        event.createdAt = Date();

        this.eventService.registerEvent(event);

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    @EventPattern('reserve-management.reserve-created')
    reserveCreated(@Payload() data: any, @Ctx() context: KafkaContext) {

        
        const event = new EventMySqlEntity();
        event.data = JSON.stringify(data);
        event.type = 'reserve-management..reserve-created';
        event.createdAt = Date();

        this.eventService.registerEvent(event);

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    @EventPattern('reserve-management.room-added')
    roomAdded(@Payload() data: any, @Ctx() context: KafkaContext) {

        
        const event = new EventMySqlEntity();
        event.data = JSON.stringify(data);
        event.type = 'reserve-management.room-added';
        event.createdAt = Date();

        this.eventService.registerEvent(event);

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    @EventPattern('reserve-management.room-obtained')
    roomObtained(@Payload() data: any, @Ctx() context: KafkaContext) {

        
        const event = new EventMySqlEntity();
        event.data = JSON.stringify(data);
        event.type = 'reserve-management.room-obtained';
        event.createdAt = Date();

        this.eventService.registerEvent(event);

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    @EventPattern('reserve-management.start-date-updated')
    startDateUpdated(@Payload() data: any, @Ctx() context: KafkaContext) {

        
        const event = new EventMySqlEntity();
        event.data = JSON.stringify(data);
        event.type = 'reserve-management.start-date-updated';
        event.createdAt = Date();

        this.eventService.registerEvent(event);

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    @EventPattern('reserve-management.payment-method-updated')
    paymentMethodUpdated(@Payload() data: any, @Ctx() context: KafkaContext) {

        
        const event = new EventMySqlEntity();
        event.data = JSON.stringify(data);
        event.type = 'reserve-management.payment-method-updated';
        event.createdAt = Date();

        this.eventService.registerEvent(event);

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    @EventPattern('reserve-management.state-updated')
    stateUpdated(@Payload() data: any, @Ctx() context: KafkaContext) {

        
        const event = new EventMySqlEntity();
        event.data = JSON.stringify(data);
        event.type = 'reserve-management.state-updated';
        event.createdAt = Date();

        this.eventService.registerEvent(event);

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }
}
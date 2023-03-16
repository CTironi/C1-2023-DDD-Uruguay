import { Controller } from "@nestjs/common";
import { Ctx, EventPattern, KafkaContext, Payload } from "@nestjs/microservices";
import { EventMySqlEntity, EventService } from "../../persistence";

@Controller()
export class CheckInControllerSuscriber{

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
    @EventPattern('reserve-management.check-in-creted')
    checkInCreated(@Payload() data: any, @Ctx() context: KafkaContext){

        
        const event = new EventMySqlEntity();
        event.data = JSON.stringify(data);
        event.type = 'reserve-management.check-in-creted';
        event.createdAt = Date();

        this.eventService.registerEvent(event);

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    @EventPattern('reserve-management.guest-added')
    guestAdded(@Payload() data: any, @Ctx() context: KafkaContext){

                
        const event = new EventMySqlEntity();
        event.data = JSON.stringify(data);
        event.type = 'reserve-management.guest-added';
        event.createdAt = Date();

        this.eventService.registerEvent(event);

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    @EventPattern('reserve-management.guest-obtained')
    guestObtained(@Payload() data: any, @Ctx() context: KafkaContext){

                
        const event = new EventMySqlEntity();
        event.data = JSON.stringify(data);
        event.type = 'reserve-management.guest-obtained';
        event.createdAt = Date();

        this.eventService.registerEvent(event);

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    @EventPattern('reserve-management.room-key-added')
    roomKeyAdded(@Payload() data: any, @Ctx() context: KafkaContext){

                
        const event = new EventMySqlEntity();
        event.data = JSON.stringify(data);
        event.type = 'reserve-management.room-key-added';
        event.createdAt = Date();

        this.eventService.registerEvent(event);

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    @EventPattern('reserve-management.room-key-obtained')
    roomKeyObtained(@Payload() data: any, @Ctx() context: KafkaContext){

                
        const event = new EventMySqlEntity();
        event.data = JSON.stringify(data);
        event.type = 'reserve-management.room-key-obtained';
        event.createdAt = Date();

        this.eventService.registerEvent(event);

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    @EventPattern('reserve-management.access-level-updated')
    accessLevelUpdated(@Payload() data: any, @Ctx() context: KafkaContext){

                
        const event = new EventMySqlEntity();
        event.data = JSON.stringify(data);
        event.type = 'reserve-management.access-level-updated';
        event.createdAt = Date();

        this.eventService.registerEvent(event);

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }
    
    @EventPattern('reserve-management.email-updated')
    emailUpdated(@Payload() data: any, @Ctx() context: KafkaContext){

                
        const event = new EventMySqlEntity();
        event.data = JSON.stringify(data);
        event.type = 'reserve-management.email-updated';
        event.createdAt = Date();

        this.eventService.registerEvent(event);

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    @EventPattern('reserve-management.phone-updated')
    phoneUpdated(@Payload() data: any, @Ctx() context: KafkaContext){

                
        const event = new EventMySqlEntity();
        event.data = JSON.stringify(data);
        event.type = 'reserve-management.phone-updated';
        event.createdAt = Date();

        this.eventService.registerEvent(event);

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

}
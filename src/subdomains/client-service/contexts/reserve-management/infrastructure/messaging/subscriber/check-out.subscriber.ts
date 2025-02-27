import { Controller } from "@nestjs/common";
import { Ctx, EventPattern, KafkaContext, Payload } from "@nestjs/microservices";
import { EventMySqlEntity, EventService } from "../../persistence";

@Controller()
export class CheckOutControllerSuscriber{

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
    @EventPattern('reserve-management.check-out-creted')
    checkOutCreated(@Payload() data: any, @Ctx() context: KafkaContext){

                
        const event = new EventMySqlEntity();
        event.data = JSON.stringify(data);
        event.type = 'reserve-management.check-out-creted';
        event.createdAt = Date();

        this.eventService.registerEvent(event);

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    @EventPattern('reserve-management.consumption-added')
    consumptionAdded(@Payload() data: any, @Ctx() context: KafkaContext){

                
        const event = new EventMySqlEntity();
        event.data = JSON.stringify(data);
        event.type = 'reserve-management.consumption-added';
        event.createdAt = Date();

        this.eventService.registerEvent(event);

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    @EventPattern('reserve-management.consuption-obtained')
    consumptionObtained(@Payload() data: any, @Ctx() context: KafkaContext){

                
        const event = new EventMySqlEntity();
        event.data = JSON.stringify(data);
        event.type = 'reserve-management.consuption-obtained';
        event.createdAt = Date();

        this.eventService.registerEvent(event);

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    @EventPattern('reserve-management.invoice-added')
    invoiceAdded(@Payload() data: any, @Ctx() context: KafkaContext){

                
        const event = new EventMySqlEntity();
        event.data = JSON.stringify(data);
        event.type = 'reserve-management.invoice-added';
        event.createdAt = Date();

        this.eventService.registerEvent(event);

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    @EventPattern('reserve-management.invoice-obtained')
    invoiceObtained(@Payload() data: any, @Ctx() context: KafkaContext){

                
        const event = new EventMySqlEntity();
        event.data = JSON.stringify(data);
        event.type = 'reserve-management.invoice-obtained';
        event.createdAt = Date();

        this.eventService.registerEvent(event);

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    @EventPattern('reserve-management.extra-updated')
    extraUpdated(@Payload() data: any, @Ctx() context: KafkaContext){

                
        const event = new EventMySqlEntity();
        event.data = JSON.stringify(data);
        event.type = 'reserve-management.extra-updated';
        event.createdAt = Date();

        this.eventService.registerEvent(event);

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }
    
    @EventPattern('reserve-management.mini-bat-updated')
    miniBarUpdated(@Payload() data: any, @Ctx() context: KafkaContext){

                
        const event = new EventMySqlEntity();
        event.data = JSON.stringify(data);
        event.type = 'reserve-management..mini-bat-updated';
        event.createdAt = Date();

        this.eventService.registerEvent(event);

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    @EventPattern('reserve-management.cost-updated')
    costUpdated(@Payload() data: any, @Ctx() context: KafkaContext){

                
        const event = new EventMySqlEntity();
        event.data = JSON.stringify(data);
        event.type = 'reserve-management.cost-updated';
        event.createdAt = Date();

        this.eventService.registerEvent(event);

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

}
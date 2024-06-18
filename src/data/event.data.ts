import {EventDataType, EventTypeEnum} from "../types/event.type.ts";

export const eventData: EventDataType = {
    events: [
        {
            id: 1,
            type: [EventTypeEnum.CONFERENCE],
            title: "Conférence sur le développement durable",
            place: "Bibliothèque Andrée Chedid - Paris 15e",
            date: "2024-09-24"
        },
        {
            id: 2,
            type: [EventTypeEnum.SCIENCES, EventTypeEnum.ATELIER],
            title: "Atelier sur l'astronomie",
            place: "Médiathèque Françoise Sagan - Paris 10e",
            date: "2025-05-12"
        },
        {
            id: 3,
            type: [EventTypeEnum.ATELIER],
            title: "Atelier de cuisine",
            place: "Bibliothèque François Villon - Paris 10e",
            date: "2025-12-12"
        },
    ],
}
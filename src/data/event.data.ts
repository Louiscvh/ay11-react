import {EventDataType, EventTypeEnum} from "../types/event.type.ts";

export const eventData: EventDataType = {
    events: [
        {
            id: 1,
            type: [EventTypeEnum.CONFERENCE],
            title: "Conférence sur le développement durable",
            place: "Bibliothèque de Paris",
            date: "2022-12-12"
        },
        {
            id: 2,
            type: [EventTypeEnum.SCIENCES, EventTypeEnum.ATELIER],
            title: "Atelier sur l'astronomie",
            place: "Bibliothèque de Paris",
            date: "2022-12-12"
        },
        {
            id: 3,
            type: [EventTypeEnum.ATELIER],
            title: "Atelier de cuisine",
            place: "Bibliothèque de Paris",
            date: "2022-12-12"
        },
    ],
}
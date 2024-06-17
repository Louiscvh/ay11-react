export type EventDataType = {
    events: EventType[];
}

export enum EventTypeEnum {
    CONFERENCE = "Conférence",
    SCIENCES = "Sciences",
    ATELIER = "Atelier",
    ENFANTS = "Enfants",
}

export type EventType = {
    id: number;
    type: EventTypeEnum[];
    title: string;
    place: string;
    date: string;
}
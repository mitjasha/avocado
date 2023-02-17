import { get, post, put, del } from "./api";
import { Event, EventResponse, EventRequest } from "./api.interface";

const eventsController = {
  addEvent: (event: Event) =>
    post<EventResponse>("/event/addEvent", JSON.stringify(event)),
  delEvent: (event: EventRequest) => del(`/event/${event.id}`),
  getAllEvents: () => get<EventResponse[]>("/event/getAllEvents"),
  updateEvent: (event: EventRequest) =>
    put(`/event/${event.id}`, JSON.stringify(event)),
};

export default eventsController;
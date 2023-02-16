import { get, post, put, del } from "./api";
import {
  EventMeal,
  EventMealResponse,
  EventMealRequest,
} from "./api.interface";

const eventMealController = {
  addEvent: (eventMeal: EventMeal) =>
    post<EventMealResponse>("/event-meal", JSON.stringify(eventMeal)),
  delEvent: (eventMeal: EventMealRequest) => del(`/event-meal/${eventMeal.id}`),
  getAllEvents: () => get<EventMealResponse[]>("/event-meal"),
  getEventById: (eventMealID: string) =>
    get<EventMealResponse>(`/event-meal/${eventMealID}`),
  updateEvent: (eventMeal: EventMealRequest) =>
    put(`/event-meal/${eventMeal.id}`, JSON.stringify(eventMeal)),
};

export default eventMealController;

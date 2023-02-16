import { get, post, put, del } from "./api";
import {
  EventMeal,
  EventMealResponse,
  EventMealRequest,
  ProductRequest,
} from "./api.interface";

const eventMealController = {
  addEvent: (eventMeal: EventMeal, product: ProductRequest) =>
    post<EventMealResponse>(
      `/event-meal/addEvent/${product.id}`,
      JSON.stringify(eventMeal),
    ),
  delEvent: (eventMeal: EventMealRequest) => del(`/event-meal/${eventMeal.id}`),
  getAllEvents: () => get<EventMealResponse[]>("/event-meal"),
  updateEvent: (eventMeal: EventMealRequest) =>
    put(`/event-meal/${eventMeal.id}`, JSON.stringify(eventMeal)),
};

export default eventMealController;

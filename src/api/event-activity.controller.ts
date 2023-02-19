import { get, post, put, del } from "./api";
import {
  EventActivity,
  EventActivityResponse,
  EventActivityRequest,
  ActivityRequest,
} from "./api.interface";

const eventActivityController = {
  addEvent: (eventActivity: EventActivity, activity: ActivityRequest) =>
    post<EventActivityResponse>(
      `/event-activity/addEvent/${activity.id}`,
      JSON.stringify(eventActivity),
    ),
  delEvent: (eventActivity: EventActivityRequest) =>
    del(`/event-activity/${eventActivity.id}`),
  getEventsByDate: (date: string) =>
    get<EventActivityResponse[]>(`/event-activity/getAllEvents/byDate/${date}`),
  getAllEvents: () => get<EventActivityResponse[]>("/event-activity"),
  updateEvent: (eventActivity: EventActivityRequest) =>
    put(`/event-activity/${eventActivity.id}`, JSON.stringify(eventActivity)),
};

export default eventActivityController;

import { get, post, put, del } from "./api";
import { Activity, ActivityResponse, ActivityRequest } from "./api.interface";

const activitiesController = {
  addActivity: (activity: Activity) =>
    post<ActivityResponse>("/activity", JSON.stringify(activity)),
  delActivity: (activity: ActivityRequest) => del(`/activity/${activity.id}`),
  getAllActivity: () => get<ActivityResponse[]>("/activity"),
  getActivityById: (activityID: string) =>
    get<ActivityResponse>(`/activity/${activityID}`),
  updateActivity: (activity: ActivityRequest) =>
    put(`/activity/${activity.id}`, JSON.stringify(activity)),
};

export default activitiesController;

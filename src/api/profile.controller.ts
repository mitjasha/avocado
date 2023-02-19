import { get, post, put, del } from "./api";
import { Profile, ProfileResponse, ProfileRequest } from "./api.interface";

const profileController = {
  addProfile: (profile: Profile) =>
    post<ProfileResponse>("/profile/addProfile", JSON.stringify(profile)),
  delProfile: (profile: ProfileRequest) => del(`/profile/${profile.id}`),
  getProfile: () => get<ProfileResponse>("/profile"),
  getProfileById: (profileID: string) =>
    get<ProfileResponse>(`/profile/${profileID}`),
  updateProfile: (profile: ProfileRequest) =>
    put(`/profile/${profile.id}`, JSON.stringify(profile)),
};

export default profileController;

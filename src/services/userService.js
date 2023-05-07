import http from "./httpService";
import apiUrl from "../config.json";

//set the endpoints for consuming user related apis
const apiEndpoint = apiUrl.apiUrl + "/register";

//consume api to add a new user
export function register(user) {
  return http.post(apiEndpoint, {
    username: user.username,
    name: user.name,
    password: user.password,
    dob: user.dob,
    telephone: user.telephone,
    designation: user.designation,
    role: user.role,
  });
}

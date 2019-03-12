import axios from 'axios';

const IP = '172.16.1.20';
export function getUsers() {
  return axios.get(`http://${IP}:8080/api/v1/imagerecognition/users`);
}

export function getLocation(uid) {
  return axios.get(`http://${IP}:8080/api/v1/imagerecognition/user/${uid}/location`);
}

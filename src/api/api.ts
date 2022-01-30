import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { 
        "API-KEY" : "fc086433-a3b2-4e29-b729-0bb49b9ccb7d" }
      });

export const usersAPI = {

 getUsers(currentPage: any = 1, pageSize: any = 10) {
   return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => response.data)
 },


 follow(userId: any) {
    return instance.post(`follow/${userId}`)
 },


 unfollow(userId: any) {
    return instance.delete(`follow/${userId}`)
 }
}

export const profileAPI = {
    
 getProfile(userId: any) {
    return instance.get(`profile/`+ userId);

 }
}

export const authAPI = {
  me():any {
    return instance.get(`auth/me`)
  }
}

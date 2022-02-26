import axios from "axios";
import {UserType} from "../redux/usersReducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        'API-KEY': '8b2c8540-f6dc-42fb-9c8f-b949feae7300'
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 5) {
        return instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then((res) => {
                return res.data
            })
    },
    follow(userId: number) {
        return instance.post<{ resultCode: number }>(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete<{ resultCode: number }>(`follow/${userId}`)
    }
}

type GetUsersResponseType = {
    error: string | null
    totalCount: number
    items: Array<UserType>
}
import axios from "axios";
import { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import API_BASE_URL from '../config/axiosConfig';
export default function ApiRequest() {
    const navigate = useNavigate();
    const getuserId = () => {
        const userIdstring = sessionStorage.getItem('userId');
        const UserId = JSON.parse(userIdstring);
        return UserId;
    }
    const http = axios.create({
        baseURL: API_BASE_URL + "/api",
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const [userId, setuserId] = useState(getuserId());
    const saveuserId = (userId) => {
        sessionStorage.setItem('userId', JSON.stringify(userId));
        setuserId(userId);
    }
    return {
        setUserId: saveuserId,
        userId,
        getuserId,
        http
    }
}
import apiClient from "./client";

export const login = (user) => apiClient.post("/session", user);

export const signup = (user) => apiClient.post(`/users`, user);

export const logout = () => apiClient.delete(`/session`);

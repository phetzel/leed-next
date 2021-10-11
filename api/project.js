import apiClient from "./client";

export const fetchProjects = () => apiClient.get("/projects");

export const createProject = (project) => apiClient.post("/projects", project);

export const updateProject = (project, id) =>
  apiClient.patch(`/projects/${id}`, project);

export const deleteProject = (id) => apiClient.delete(`/projects/${id}`);

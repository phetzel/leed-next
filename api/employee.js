import apiClient from "./client";

export const fetchEmployees = () => apiClient.get("/employees");

export const createEmployee = (employee) =>
  apiClient.post("/employees", employee);

export const updateEmployee = (employee, id) =>
  apiClient.patch(`/employees/${id}`, employee);

export const deleteEmployee = (id) => apiClient.delete(`/employees/${id}`);

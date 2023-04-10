export const DRAWER_WIDTH = 240;
export const APP_BAR_HEIGHT = 100;

export const TEAMS_URL =
  "https://nktebdhspzvpwguqcksn.supabase.co/rest/v1/teams?select=*";
export const EMPLOYEES_URL =
  "https://nktebdhspzvpwguqcksn.supabase.co/rest/v1/employees?select=*";

export const ADD_EMPLOYEES_URL =
  "https://nktebdhspzvpwguqcksn.supabase.co/rest/v1/employees";

export const CONFIG = {
  headers: {
    apikey: import.meta.env.VITE_API_KEY,
  },
};
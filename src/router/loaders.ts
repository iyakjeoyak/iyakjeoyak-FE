import { getAccessToken } from "@/utils/getToken";
import { redirect } from "react-router-dom";

export function checkTokenAndRedirectToHome() {
  const token = getAccessToken();

  if (token) {
    return redirect('/home');
  }
  
  return null;
}

export function checkTokenAndRedirectToLogin() {
  const token = getAccessToken();

  if (!token) {
    return redirect('/login');
  }
  
  return null;
}
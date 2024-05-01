import { redirect } from "react-router-dom";

export function checkTokenAndRedirectToHome() {
  const token = localStorage.getItem('token');

  if (token) {
    return redirect('/home');
  }
  
  return null;
}

export function checkTokenAndRedirectToLogin() {
  const token = localStorage.getItem('token');

  if (!token) {
    return redirect('/home');
  }
  
  return null;
}
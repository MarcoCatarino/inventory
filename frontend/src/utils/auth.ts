export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem("jwt_token");
};

export const redirectToLogin = () => {
  if (!isAuthenticated()) {
    window.location.href = "/login";
  }
};

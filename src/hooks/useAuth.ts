export function useAuth() {
  const accessToken = typeof window !== "undefined" ? localStorage.getItem("access") : null;
  const refreshToken = typeof window !== "undefined" ? localStorage.getItem("refresh") : null;

  return [accessToken, refreshToken];
}

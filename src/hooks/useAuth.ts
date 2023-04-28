import { useState } from "react";

export function useAuth() {
  const accessToken = useState(typeof window !== "undefined" ? localStorage.getItem("access") : null);
  const refreshToken = useState(typeof window !== "undefined" ? localStorage.getItem("refresh") : null);

  return [accessToken, refreshToken];
}

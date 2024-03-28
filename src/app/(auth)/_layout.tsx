import { useAuth } from "@/providers/AuthProviers";
import { Redirect, Stack } from "expo-router";

const AuthLayout = () => {
  const { session } = useAuth();

  if (session) {
    return <Redirect href={"/"} />;
  }
  return <Stack />;
};

export default AuthLayout;

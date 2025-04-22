import useAuthStore from "../../store/auth";

const useAuth = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  const signIn = useAuthStore((state) => state.signIn);
  const signOut = useAuthStore((state) => state.signOut);
  const error = useAuthStore((state) => state.error);

  return {
    isAuth,
    signIn,
    signOut,
    error,
  };
};

export default useAuth;

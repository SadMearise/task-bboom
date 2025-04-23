import useAuthStore from "../../store/auth";

const useAuth = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  const signIn = useAuthStore((state) => state.signIn);
  const signOut = useAuthStore((state) => state.signOut);

  return {
    isAuth,
    signIn,
    signOut,
  };
};

export default useAuth;

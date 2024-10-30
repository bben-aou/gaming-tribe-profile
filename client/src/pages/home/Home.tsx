import { useAuth } from "@/providers/AuthProvider";
import { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { Link , useNavigate } from "react-router-dom";
const Home = () => {
  const { initiateGithubLogin, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user ) {
      navigate(`/profile/${user?.id}`);
    }
  }, [navigate, user]);

  return (
    <div className="flex min-h-screen items-center flex-col justify-center gap-6 bg-primary-100">
      <h1 className="text-[52px] font-medium text-light-100">
        <FormattedMessage id="home.title.label" />
      </h1>
      <div className="flex items-center flex-col justify-center gap-3">
        <Link
          to={"/login/sign-in"}
          className="bg-primary-200 rounded-lg flex items-center justify-center font-semibold hover:bg-hover-100 text-primary-100 w-[250px] h-[50px] text-[16px] transition duration-700 ease-in-out hover:scale-105"
        >
          <FormattedMessage id="home.login.label" />
        </Link>
        <Link
          to={"/login/sign-up"}
          className="bg-primary-200 rounded-lg flex items-center justify-center font-semibold hover:bg-hover-100 text-primary-100 w-[250px] h-[50px] text-[16px] transition duration-700 ease-in-out hover:scale-105"
        >
          <FormattedMessage id="home.sign-up.label" />
        </Link>
        <button
          onClick={initiateGithubLogin}
          className="bg-primary-200 rounded-lg flex items-center justify-center font-semibold hover:bg-hover-100 text-primary-100 w-[250px] h-[50px] text-[16px] transition duration-700 ease-in-out hover:scale-105"
        >
          <FormattedMessage id="home.login.with.github.label" />
        </button>
      </div>
    </div>
  );
};
export default Home;

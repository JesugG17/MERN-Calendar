import { Google } from "../../ui/Icons";

export const LoginPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center lg:flex-row lg:items-center lg:justify-between">
      <div className="hidden  lg:w-2/4 lg:flex lg:justify-center">
        <img className="w-3/4 mb-2" src="/img/hero.jpg" alt="" />
      </div>
      <div className="w-2/4 h-full text-center flex flex-col gap-7">
        <header className="flex justify-center lg:w-4/5">
          <div className="flex gap-5 mt-4 items-center">
            <p className="text-xs md:text-sm text-gray-custom font-medium">
              Already have an account?
            </p>
            <button className="text-white text-xs md:text-sm font-bold hover:bg-red-primary-light transition-all duration-300 bg-red-primary px-4 py-2 rounded">
              Register
            </button>
          </div>
        </header>
        <div className="lg:w-4/5">
          <h2 className="font-bold text-2xl text-center lg:text-3xl">Hello ! Welcome back</h2>
          <p className="text-gray-custom font-medium lg:text-lg">
            Log in with your data that you entered during registration
          </p>
        </div>
        <div className="text-start flex flex-col gap-3">
          <div className="flex flex-col">
            <label className="font-medium text-xs md:text-sm lg:text-base">Email adress</label>
            <input
              className="w-full p-3 focus:outline-orange-400 rounded shadow-md text-sm lg:w-4/5 lg:text-base"
              type="text"
              placeholder="Example@gmail.com"
            />
          </div>
          <div className="flex justify-between flex-wrap lg:w-4/5">
            <label className="font-medium text-xs md:text-md lg:text-base">Password</label>
            <a className="text-blue-400 font-medium cursor-pointer text-xs md:text-sm lg:text-base">
              Forgot password
            </a>
            <div className="w-full">
              <input
                className="w-full p-3 focus:outline-orange-400 rounded shadow-md text-sm lg:text-base"
                type="text"
                placeholder="Enter password"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <button className="bg-red-primary hover:bg-red-primary-light transition-all duration-300 text-xs md:text-sm w-full text-white font-bold p-3 mt-2 rounded lg:w-4/5 lg:text-lg">
              Start now!
            </button>
            <div className="h-4 border-b-2 border-gray-300 text-lg text-center lg:w-4/5">
              <span className="bg-white px-5">OR</span>
            </div>
            <button className="w-full text-xs  flex items-center justify-center gap-2 shadow-md p-3 rounded font-medium hover:bg-slate-50 transition-all duration-300 md:text-sm lg:w-4/5 lg:text-lg">
              <Google />
              Sign with google
            </button>
          </div>
          <div className="flex justify-center gap-1 text-xs md:text-sm lg:w-4/5 lg:text-base md:mt-5">
            <p className="text-gray-custom">Don't have an account?</p>
            <a className="text-blue-500 font-bold">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

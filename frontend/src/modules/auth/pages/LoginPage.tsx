import { Google } from "../../ui/Icons";

export const LoginPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-5 md:gap-7">
      <header className="w-full flex justify-center">
        <div className="flex gap-5 mt-4 items-center">
          <p className="text-sm text-gray-custom font-medium md:text-base">Already have an account?</p>
          <button className="text-white font-bold bg-red-primary px-4 py-2 rounded md:text-lg">
            Register
          </button>
        </div>
      </header>
      <div className="w-3/4 md:w-3/5 text-center flex flex-col gap-3">
        <h2 className="font-bold text-2xl md:text-3xl">Hello ! Welcome back</h2>
        <p className="text-gray-custom font-medium md:text-lg">Log in with your data that you entered during registration</p>
        <div className="text-start flex flex-col gap-3">
          <label className="font-medium md:text-lg">Email adress</label>
          <input
            className="w-full p-3 rounded shadow-md text-sm md:text-lg"
            type="text"
            placeholder="Example@gmail.com"
          />
          <div className="flex justify-between">
            <label className="font-medium md:text-lg">Password</label>
            <a className="text-blue-400 font-medium cursor-pointer md:text-lg">Forgot password</a>
          </div>
          <input
            className="w-full p-3 rounded shadow-md text-sm md:text-lg"
            type="text"
            placeholder="Enter password"
          />
          <div className="flex flex-col gap-5">
            <button className="bg-red-primary w-full text-white font-bold p-3 mt-2 rounded md:p-4 md:text-lg">Start now!</button>
            <div className="h-4 border-b-2 border-gray-300 text-lg text-center">
              <span className="bg-white px-5">OR</span>
            </div>
            <button className="w-full flex items-center justify-center gap-2 shadow-md p-3 rounded font-medium md:text-lg">
              <Google />
              Sign with google
            </button>
          </div>
          <div className="flex justify-center gap-1 md:text-lg">
            <p className="text-gray-custom">Don't have an account?</p>
            <a className="text-blue-500 font-bold">
              Sign up
            </a>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center">
        <img
          className="w-2/5 md:w-2/4 mb-2" 
          src="/img/hero.jpg" alt="" />
      </div> */}
    </div>
  );
};

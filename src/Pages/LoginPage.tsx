import MSULogo from "../assets/msu-logo.svg";

function LoginPage() {
  return (
    <div className="h-screen w-screen bg-[#f7fbfd] flex justify-center">
      <div className="h-full w-[40rem]  flex flex-col items-center">
        <img src={MSULogo} alt="" className="h-[3rem] lg:h-auto mt-[7rem]" />

        <h1 className="text-[2.2em] font-bold font-manrope bg-red">
          Log in to your account
        </h1>
        <span className=" text-slate-500">
          Don't have an account?
          <span className="font-medium text-msu-red ml-2 cursor-pointer hover:underline">
            Sign up
          </span>
        </span>
        <div className="w-[70%] h-[24rem] bg-white shadow-lg mt-[3rem] rounded-[10px]"></div>
      </div>
    </div>
  );
}

export default LoginPage;

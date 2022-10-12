import { useState } from "react";

import MSULogo from "../assets/msu-logo.svg";
import GithubLogo from "../assets/github.svg";
import GoogleLogo from "../assets/google.svg";
import FacebookLogo from "../assets/facebook.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const [emailAddress, setEmailAddress] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    axios({
      method: "post",
      url: "http://localhost:3001/login",
      data: {
        emailAddress,
        password,
      },
    }).then((response) => {
      if (response.data.details === "AUTH_SUCCESS") {
        navigate("/explore", { replace: false });
      }
    });
  };
  return (
    <div className="h-screen w-screen bg-[#f9fafb] flex justify-center">
      <div className="h-full w-[40rem]  flex flex-col items-center">
        <img src={MSULogo} alt="" className="h-[3rem] lg:h-auto mt-[5rem]" />

        <h1 className="text-[2.2em] font-bold font-manrope">
          Log in to your account
        </h1>
        <span className=" text-slate-500">
          Don't have an account?
          <span onClick={() => {navigate('/', {replace: false})}} className="font-medium text-msu-red ml-2 cursor-pointer hover:underline">
            Sign up
          </span>
        </span>
        <div className="w-[80%] h-[28rem] bg-white shadow-n4 mt-[3rem] rounded-[10px] flex flex-col items-center overflow-visible">
          <div className="h-[6rem] w-[85%] flex flex-col mt-9 gap-1 ">
            <label className="font-medium">Email address</label>
            <input
              className="h-[2.5rem] w-full rounded-[5px] border-[1px] focus:border-[2px] border-[#c2bdbd] outline-none focus:border-msu-red indent-2"
              onChange={(e) => {
                setEmailAddress(e.currentTarget.value);
              }}
            ></input>
          </div>
          <div className="h-[6rem] w-[85%] mt-[-0.5rem] flex flex-col gap-1 ">
            <label className="font-medium">Password</label>
            <input
              type="password"
              className="h-[2.5rem] w-full rounded-[5px] border-[1px] focus:border-[2px] border-[#c2bdbd] outline-none focus:border-msu-red indent-2"
              onChange={(e) => {
                setPassword(e.currentTarget.value);
              }}
            ></input>
          </div>
          <div className="h-[3rem] w-[85%] flex items-center gap-2 mt-[-0.7rem]">
            <input
              type="checkbox"
              className="checkbox checkbox-primary border-black h-5 w-5"
            />
            <span className="font-medium text-[0.7em] lg:text-[0.95em]">
              Remember me
            </span>
            <span className="font-medium text-msu-red cursor-pointer text-[0.7em] lg:text-[0.95em] ml-auto">
              Forgot your password ?
            </span>
          </div>
          <button
            type="submit"
            className="h-[2.8rem] text-white font-medium rounded-[8px] bg-msu-red w-[88%] mt-[1rem]"
            onClick={handleLogin}
          >
            Sign In
          </button>
          <div className="mt-[0.5rem] border-b-[1.5px] h-[2rem] w-[85%] flex justify-center"></div>
          <span className="font-light z-10 bg-white px-2 mt-[-0.9rem] text-slate-500">
            or continue with
          </span>
          <div className="h-[4rem] w-[85%] mt-1 flex items-center justify-center gap-5">
            <div className="h-[2.5rem] w-[5rem] rounded-[5px] border-[0.5px] border-[#c2bdbd] flex items-center justify-center cursor-pointer">
              <img src={GithubLogo} className="h-full p-2" alt="" />
            </div>
            <div className="h-[2.5rem] w-[5rem] rounded-[5px] border-[0.5px] border-[#c2bdbd] flex items-center justify-center cursor-pointer">
              <img src={GoogleLogo} className="h-full p-2" alt="" />
            </div>
            <div className="h-[2.5rem] w-[5rem] rounded-[5px] border-[0.5px] border-[#c2bdbd] flex items-center justify-center cursor-pointer">
              <img src={FacebookLogo} className="h-full p-2" alt="" />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

import MSULogo from "../assets/msu-logo.svg";
import MSUMarketplaceLogo from "../assets/msu-marketplace-logo.svg";
import HamburgerMenu from "../assets/hamburger-menu.svg";
import SupportMailIcon from "../assets/support-mail-icon.svg";
import SecurityIcon from "../assets/security-icon.svg";
import NetworkIcon from "../assets/network-icon.svg";
import SatisfactionIcon from "../assets/satisfaction-icon.svg";
import HawkLogo from "../assets/hawk-logo.svg";
import HanddrawnUnderLine from "../assets/handdrawn-underline.svg";
import LinkedIn from "../assets/linkedin-icon.svg";
import Youtube from "../assets/youtube-icon.svg";
import Twitter from "../assets/twitter-icon.svg";
import Website from "../assets/website-icon.svg";
import Tiktok from "../assets/tiktok-icon.svg";
import Instagram from "../assets/instagram-icon.svg";
import Facebook from "../assets/facebook-icon.svg";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function LandingPage() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [grade, setGrade] = useState<string>("");
  const [major, setMajor] = useState<string>("");

  useEffect(() => {
    document.title = "MSU | Marketplace";
  });

  const handleRegistration = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (
      emailAddress.match(
        // eslint-disable-next-line
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(montclair.edu)$/
      )
    ) {
      console.log({
        firstName,
        lastName,
        emailAddress,
        grade,
        major,
        password,
        confirmPassword,
      });
    }
  };

  return (
    <div className="flex item-center justify-center">
      <div className="h-screen w-screen overflow-y-scroll overflow-x-hidden lg:overflow-hidden relative bg-background-circles max-w-[100rem] lg:max-h-[52rem]">
        <header className="shadow-n5 lg:shadow-none h-[5rem] flex items-center lg:mt-4 bg-white lg:bg-transparent">
          <img src={MSULogo} alt="" className="ml-[2rem] h-[3rem] lg:h-auto" />
          <img
            src={MSUMarketplaceLogo}
            alt=""
            className="ml-[0.5rem] hidden lg:block"
          />
          <img
            src={HamburgerMenu}
            alt=""
            className="ml-auto mr-5 lg:hidden h-[3rem]"
          />
          <button
            onClick={() => {
              navigate("/explore", { replace: false });
            }}
            className="hidden lg:block ml-auto font-medium text-[1.1em] hover:text-msu-red transition-all"
          >
            Explore
          </button>
          <button onClick={() => {
              navigate("/login", { replace: false });
            }} className="hidden lg:block ml-6 mr-10 font-medium text-[1em] py-[0.35rem] px-5 rounded-[5px] text-white shadow-n5 bg-msu-red hover:bg-white border-2 border-msu-red hover:text-msu-red transition-all">
            Log In
          </button>
        </header>
        <section id="landing-page" className="h-[40rem] grid lg:grid-cols-2">
          <div className="flex flex-col w-screen lg:w-full items-center lg:items-start relative animate-fade-in-bottom animate-delay-200">
            <h1 className="w-[94%] lg:w-auto text-msu-red text-center lg:text-start text-[1.5em] font-bold lg:ml-[4rem] lg:text-[2.7em] mt-10 lg:mt-[3rem]">
              Selling and buying used goods on campus has never been easier !
            </h1>
            <img
              src={HanddrawnUnderLine}
              alt=""
              className="hidden lg:block absolute h-[2rem] mt-[10.5rem] ml-[19rem]"
            />
            <span className="text-center lg:text-start text-[0.95em] lg:text-[1.4em] lg:ml-[4rem] mt-[1.6rem] font-medium lg:font-light">
              Create an account today with your @montclair.edu email address and
              start buying or selling !
            </span>
            <div className="mt-8 md:h-[13rem] w-full lg:ml-[4rem] flex flex-col md:flex-row gap-4 justify-center items-center lg:justify-start h-[40rem] animate-fade-in-bottom transition-all animate-delay-400">
              <div className="h-full w-[90%] md:w-[31%] bg-white shadow-n5 rounded-[10px] min-w-[200px] lg:max-w-[230px] flex flex-col items-center justify-center gap-1 lg:hover:translate-y-[-1rem] transition-all">
                <img src={SecurityIcon} alt="" className="h-[4.5rem]" />
                <span className="text-center font-semibold text-[0.95em] w-[88%]">
                  Our services are only accessible to identifiable montclair
                  students
                </span>
              </div>
              <div className="h-full w-[90%] md:w-[31%] bg-white shadow-n5 rounded-[10px] min-w-[200px] lg:max-w-[230px] flex flex-col items-center justify-center gap-4 lg:hover:translate-y-[-1rem] transition-all">
                <img src={NetworkIcon} alt="" className="h-[4rem]" />
                <span className="text-center font-semibold text-[0.95em] w-[88%]">
                  Benefit from a large network of students to sell to or buy
                  goods from
                </span>
              </div>
              <div className="h-full w-[90%] md:w-[31%] bg-white shadow-n5 rounded-[10px] min-w-[200px] lg:max-w-[230px] flex flex-col items-center justify-center gap-2 lg:hover:translate-y-[-1rem] transition-all">
                <img src={SatisfactionIcon} alt="" className="h-[4.5rem]" />
                <span className="text-center font-semibold text-[0.95em] w-[88%]">
                  Our platform is very intuitive and provides all the features
                  you need.
                </span>
              </div>
            </div>
            <div className="h-[6rem] w-[100%] md:w-[80%]  lg:w-[40rem] bg-white shadow-n5 lg:ml-[4rem] mt-11 rounded-[5px] flex flex-col items-center animate-fade-in-bottom animate-delay-600">
              <div className="h-[2rem] w-[8rem] bg-msu-red flex items-center justify-center text-white font-medium mt-[-1rem] rounded-[5px] shadow-n5">
                Follow us here !
              </div>
              <div className="h-[85%] w-full flex justify-center gap-8 mt-4 overflow-x-scroll">
                <img src={LinkedIn} alt="" className="h-[70%]" />
                <img src={Twitter} alt="" className="h-[70%]" />
                <img src={Instagram} alt="" className="h-[70%]" />
                <img src={Website} alt="" className="h-[70%]" />
                <img src={Youtube} alt="" className="h-[70%]" />
                <img src={Tiktok} alt="" className="h-[70%] " />
                <img src={Facebook} alt="" className="h-[70%]" />
              </div>
            </div>
          </div>
          <div className="h-[45rem] lg:bg-register-blob bg-no-repeat lg:ml-[5rem] flex items-center justify-center">
            <form
              onSubmit={handleRegistration}
              className="w-[95%] h-[39rem] md:w-[29rem] shadow-n5 rounded-[8px] lg:mt-[-5%] lg:mr-[2.5rem] bg-white flex flex-col items-center relative animate-fade-in-bottom"
            >
              <img
                src={HawkLogo}
                alt=""
                className="absolute h-[12rem] lg:h-[14rem] ml-[-24rem] mt-[-8rem] lg:mt-[-9rem]"
              />
              <h1 className="mt-5 font-bold text-[1.6em] border-b-[5px] border-msu-red">
                Join us !
              </h1>
              <div className="h-[90%] w-full flex flex-col gap-5 items-center">
                <div className="h-[4rem] w-full flex justify-center items-center gap-3 mt-5">
                  <div className="h-full w-[45%]">
                    <label className="font-medium">
                      Fist name <label className="text-msu-red">*</label>
                    </label>
                    <input
                      placeholder="John"
                      className="h-[75%] w-full rounded-[5px] border-2 border-[#c2bdbd] outline-none focus:border-msu-red indent-2"
                      onChange={(
                        e: React.FormEvent<HTMLInputElement>
                      ): void => {
                        setFirstName(e.currentTarget.value);
                      }}
                    ></input>
                  </div>
                  <div className="h-full w-[45%]">
                    <label className="font-medium">
                      Last name <label className="text-msu-red">*</label>
                    </label>
                    <input
                      placeholder="Doe"
                      className="h-[75%] w-full rounded-[5px] border-2 border-[#c2bdbd] outline-none focus:border-msu-red indent-2"
                      onChange={(
                        e: React.FormEvent<HTMLInputElement>
                      ): void => {
                        setLastName(e.currentTarget.value);
                      }}
                    ></input>
                  </div>
                </div>
                <div className="h-[4rem] w-full flex flex-col justify-center items-center">
                  <div className="h-full w-[93%]">
                    <label className="font-medium">
                      Montclair email address
                      <label className="text-msu-red"> *</label>
                    </label>
                    <input
                      placeholder="doej@montclair.edu"
                      type="email"
                      className="h-[75%] w-full rounded-[5px] border-2 border-[#c2bdbd] outline-none focus:border-msu-red indent-2"
                      onChange={(
                        e: React.FormEvent<HTMLInputElement>
                      ): void => {
                        setEmailAddress(e.currentTarget.value);
                      }}
                    ></input>
                  </div>
                </div>
                <div className="h-[4rem] w-full flex flex-col justify-center items-center">
                  <div className="h-full w-[93%]">
                    <label className="font-medium">
                      Choose a password
                      <label className="text-msu-red"> *</label>
                    </label>
                    <input
                      placeholder="Your password"
                      type="password"
                      className="h-[75%] w-full rounded-[5px] border-2 border-[#c2bdbd] outline-none focus:border-msu-red indent-2"
                      onChange={(
                        e: React.FormEvent<HTMLInputElement>
                      ): void => {
                        setPassword(e.currentTarget.value);
                      }}
                    ></input>
                  </div>
                </div>
                <div className="h-[4rem] w-full flex flex-col justify-center items-center">
                  <div className="h-full w-[93%]">
                    <label className="font-medium">
                      Confirm your password
                      <label className="text-msu-red"> *</label>
                    </label>
                    <input
                      placeholder="Confirm your password"
                      type="password"
                      className="h-[75%] w-full rounded-[5px] border-2 border-[#c2bdbd] outline-none focus:border-msu-red indent-2"
                      onChange={(
                        e: React.FormEvent<HTMLInputElement>
                      ): void => {
                        setConfirmPassword(e.currentTarget.value);
                      }}
                    ></input>
                  </div>
                </div>
                <div className="h-[4rem] w-full flex justify-center items-center gap-3">
                  <div className="h-full w-[45%]">
                    <label className="font-medium">Grade</label>
                    <input
                      placeholder="Sophomore"
                      className="h-[75%] w-full rounded-[5px] border-2 border-[#c2bdbd] outline-none focus:border-msu-red indent-2"
                      onChange={(
                        e: React.FormEvent<HTMLInputElement>
                      ): void => {
                        setGrade(e.currentTarget.value);
                      }}
                    ></input>
                  </div>
                  <div className="h-full w-[45%]">
                    <label className="font-medium">
                      Major <label className="text-msu-red">*</label>
                    </label>
                    <input
                      placeholder="Computer Science"
                      className="h-[75%] w-full rounded-[5px] border-2 border-[#c2bdbd] outline-none focus:border-msu-red indent-2"
                      onChange={(
                        e: React.FormEvent<HTMLInputElement>
                      ): void => {
                        setMajor(e.currentTarget.value);
                      }}
                    ></input>
                  </div>
                </div>
                <div className="h-[3rem] w-full flex items-center justify-center gap-3">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary border-black"
                  />
                  <span className="font-medium text-[0.7em] lg:text-[0.95em]">
                    I agree to our Terms, Privacy Policy and Cookies Policy.
                  </span>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-[95%] mt-[-0.7rem]"
                >
                  Create my account now !
                </button>
              </div>
            </form>
          </div>
        </section>
        <img
          src={SupportMailIcon}
          alt=""
          className="hidden md:block absolute h-[3.5rem] left-[90%] lg:left-[95%] top-[92%] cursor-pointer lg:hover:translate-y-[-0.5rem] transition-all"
        />
      </div>
    </div>
  );
}

export default LandingPage;

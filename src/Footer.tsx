import logo from "./assets/logo.svg"
import mail from "./assets/mail.svg"
import apple from "./assets/apple.svg"
import android from "./assets/android.svg"
import bottomline from "./assets/bottomline.svg"
import twitter from "./assets/twitter.svg"
import facebook from "./assets/facebook.svg"
import instagram from "./assets/instagram.svg"
import github from "./assets/github.svg"
import { BrowserRouter, Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-[#2f1b1e] py-8 font-lato mt-10">
      <div className="container mx-auto md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
            <div className="flex space-x-2">
            <img src={logo}/>
            <span className="mt-3 text-[#e04a45] h-12 text-4xl font-bold">FitnEarnPal</span>
            </div>
            
          <p className="font-normal text-sm mt-5 mr-2 text-[#D4D4D4]">
            FitnEarnPal is your all-in-one place where you can train people as
            per your schedule. It's a place where you can upload workout
            videos, create live sessions, write blogs, and much more. Available
            on Android and iOS. Join our community of coaches today!
          </p>
          <p className="mt-4 flex space-x-3">
            <img src={mail} className="hover:underline"/>
            <span className="hover:underline text-[#D4D4D4] flex space-x-2">help-support@fitnearn.com</span>
          </p>
          <span className=" ml-10 flex space-x-5 mt-5">
            <BrowserRouter>
                <Link to="https://x.com/fitnearn"><img src={twitter}/></Link>
                <Link to="https://www.facebook.com/BeFitGetRich/"><img src={facebook}/></Link>
                <Link to="https://www.instagram.com/fitearn/"><img src={instagram}/></Link>
                <img src={github}/>
            </BrowserRouter>
        </span>
        </div>

        {/* Useful Links */}
        <div className="ml-10 mt-5 ">
          <h2 className="text-lg font-semibold mb-4 text-[#F5F5F5]">Useful Links</h2>
          <ul className="space-y-2 text-[#D4D4D4]">
            <BrowserRouter>
                <li>
                    <Link to="https://www.fitnearn.com/"><span className="hover:underline">Home</span></Link>
                </li>
                <li>
                    <Link to="https://www.fitnearn.com/"><span className="hover:underline">How it works</span></Link>
                </li>
                <li>
                    <Link to="https://www.fitnearn.com/"><span className="hover:underline">Feature</span></Link>
                </li>
                <li>
                    <Link to="https://www.fitnearn.com/"><span className="hover:underline">Sign Up form</span></Link>
                </li>
            </BrowserRouter>
          </ul>
        </div>

        {/* Policies */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-4 text-[#F5F5F5]">Policies</h2>
          <ul className="space-y-2 text-[#D4D4D4]">
          <BrowserRouter>
                <li>
                    <Link to="https://www.fitnearn.com/About-Us"><span className="hover:underline">About us</span></Link>
                </li>
                <li>
                    <Link to="https://www.fitnearn.com/privacy-policy"><span className="hover:underline">Privacy Policy</span></Link>
                </li>
                <li>
                    <Link to="https://www.fitnearn.com/terms-conditions"><span className="hover:underline">Terms & Conditions</span></Link>
                </li>
                <li>
                    <Link to="https://www.fitnearn.com/About-Us"><span className="hover:underline">Data Deletion</span></Link>
                </li>
            </BrowserRouter>
          </ul>
        </div>

        {/* Download Section */}
        <div className="mt-3">
          <h2 className="text-lg font-semibold mb-4 ml-4 text-[#F5F5F5]">Download Now</h2>
          <div className="">
            <BrowserRouter>
                <Link to="https://apps.apple.com/in/app/fitnearn-exercise-earn-enjoy/id6476557022"><img src={apple}/></Link>
                <Link to="https://play.google.com/store/apps/details?id=com.fitearn.meditate&pcampaignid=web_share"><img src={android} className="mt-5 pr-4"/></Link>
            </BrowserRouter>
          </div>
        </div>
      </div>
      <img src={bottomline} className="ml-36 mt-10"/>

      {/* Bottom Footer */}
      <div className="text-[#D4D4D4] mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="ml-10">© Copyright 2024, All Rights Reserved.</p>
        <span className="mr-36">
          Made with ❤️ in India 
        </span>
        <span className="mr-36">Reg@2024</span>
      </div>
    </footer>
  );
};

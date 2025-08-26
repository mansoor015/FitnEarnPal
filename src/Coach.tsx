import iphone2 from "./assets/iphone2.svg"
import iphone3 from "./assets/iphone3.svg"
import apple from "./assets/apple.svg"
import android from "./assets/android.svg"
import line from "./assets/line.svg"
import register from "./assets/register.svg"
import verify from "./assets/verify.svg"
import content from "./assets/content.svg"
import engage from "./assets/engage.svg"
import { BrowserRouter, Link } from "react-router-dom"

export default function Coach(){
    return <div className="mt-10 ">
        <span className=" flex justify-center font-lato font-black text-6xl text-[#F5F5F5]">Become<span className="text-[#e94a4b]">Coach</span>Today</span>
        <span className="flex justify-center mt-10">
            <img src={iphone2} className=" pr-32"/>
            <img src={iphone3} className="absolute pl-80 pt-4"/>
        </span>
        <span className="flex justify-center space-x-10">
            <BrowserRouter>
                <Link to="https://apps.apple.com/in/app/fitnearn-exercise-earn-enjoy/id6476557022"><img src={apple}/></Link>
                <Link to="https://play.google.com/store/apps/details?id=com.fitearn.meditate&pcampaignid=web_share"><img src={android} className=" pr-4"/></Link>
            </BrowserRouter>
        </span>
        <div className="h-lvh mt-20 bg-[#2f1b1e]">
            <div className=" pt-16 flex justify-center font-lato font-black text-[#F5F5F5] text-6xl">How It Works ?</div>
            <div className="pt-10">
                <img src={line} className="z-0 ml-64 mt-20 absolute"/>
                <div className="ml-10 flex justify-center space-x-56">
                    <img src={register} className="z-10"/>
                    <img src={verify}className="z-10"/>
                    <img src={content} className=" pt-6 z-10"/>
                    <img src={engage} className="z-10 pr-24 pt-8"/>    
                </div>
                <div className=" mt-5 ml-10 flex align-middle space-x-20">
                    <span className=" font-normal text-2xl font-lato text-[#D4D4D4]">Support for multiple languages, making health monitoring accessible and easy for users around the globe.</span>
                    <span className=" font-normal text-2xl font-lato text-[#D4D4D4]">Support for multiple languages, making health monitoring accessible and easy for users around the globe.</span>
                    <span className=" font-normal text-2xl font-lato text-[#D4D4D4]">Support for multiple languages, making health monitoring accessible and easy for users around the globe.</span>
                    <span className=" font-normal text-2xl font-lato text-[#D4D4D4] pr-20">Support for multiple languages, making health monitoring accessible and easy for users around the globe.</span>
                </div>
            </div>
        </div>
        <div className="ml-20">
            <div className="text-[#F5F5F5] ml-96 mt-10 font-lato font-black text-6xl">What our <span className="text-[#e94a4b]">Coach Say</span></div>
            <div className="mt-5 w-2/3 ml-60 flex justify-center font-lato text-[#D4D4D4] fontsemibold text-4xl">FitnEarnPal empowers coaches to grow and reach a global audience while valuable health and fitness insights to users. </div>
        </div>  
    </div>
}
import smile from "./assets/smile.svg"
import android from "./assets/android.svg"
import apple from "./assets/apple.svg"
import iphone1 from "./assets/iphone1.svg"
import ellipse1793 from "./assets/ellipse1793.svg"
import ellipse1794 from "./assets/ellipse1794.svg"
import circle1 from "./assets/circle1.svg"
import circle2 from "./assets/circle2.svg"
import circle3 from "./assets/circle3.svg"
import circle4 from "./assets/circle4.svg"

export default function Typewriter(){
    return <div>
        <span className="flex justify-end mr-10">
            <img src={iphone1} className="absolute z-10"/>
            <img src={circle1} className=" pr-52 pt-8 z-50 mr-5 transition duration-300 ease-in-out hover:scale-110"/>
            <img src={circle2} className=" pr-24 pt-36 z-50 transition duration-300 ease-in-out hover:scale-110"/>
            <img src={ellipse1794} className="absolute z-0 mr-8 mt-24"/>
            <img src={ellipse1793} className="absolute z-0 mr-20 mt-36"/>   
        </span>
        <div>
            <div className="w-1/2 ml-16">
                <span className="flex justify-items-start">
                    <img src={smile}/>
                    <span className="animate-typing overflow-hidden whitespace-nowrap border-r-2 border-[#F5F5F5] ml-4 text-[#F5F5F5] font-lato font-extrabold italic text-6xl">Hey, Awesome Coach</span>
                </span>
                <div className=" mt-5 w-2/3 font-lato font-semibold text-[#F5F5F5] text-3xl">Expand Your Reach, Inspire More Lives <span className="text-[#e04a45]">Join FitnEarnPal Today !</span></div>
                <div className=" mt-4 w-3/4 text-[#D4D4D4] text-2xl font-lato font-medium">A global platform for coaches to connect, Inspire and change Lives</div>
                <span className="flex space-x-6">
                    <a href="https://apps.apple.com/in/app/fitnearn-exercise-earn-enjoy/id6476557022" target="_blank"><img src={apple} className="mt-10"/></a>
                    <a href="https://play.google.com/store/apps/details?id=com.fitearn.meditate&pcampaignid=web_share" target="_blank"><img src={android} className="mt-10"/></a>
                </span>            
            </div>
        </div>
        <span className=" flex justify-end mr-36 space-x-52 ">
            <img src={circle3} className=" z-50 transition duration-300 ease-in-out hover:scale-110"/>
            <img src={circle4} className=" z-50 transition duration-300 ease-in-out hover:scale-110"/>
        </span>
    </div>
}
import iphone13 from "./assets/iphone13.svg"
import ellipse1795 from "./assets/ellipse1795.svg"
import ellipse1796 from "./assets/ellipse 1796.svg"
import frame436 from "./assets/frame436.svg"
import frame437 from "./assets/frame437.svg"
import frame438 from "./assets/frame438.svg"
import frame439 from "./assets/frame439.svg"

export default function Mid(){
    return <div className="grid grid-cols-3 mt-20">
        <span className=" pl-52 pt-20">            
            <img src={frame436} className="animate-bounce"/>
            <img src={frame437} className="pt-44 animate-bounce"/>
        </span>
        <div className="flex justify-center">
            <img src={iphone13} className="absolute pl-28 z-10"/>
            <img src={ellipse1795} className="absolute z-0 mt-28"/>
            <img src={ellipse1796} className="z-0 mt-40"/>
        </div>
        <span className="pt-20 size-72">
            <img src={frame438} className="animate-bounce"/>
            <img src={frame439} className="pt-44 animate-bounce"/>
        </span>
        
    </div>
}
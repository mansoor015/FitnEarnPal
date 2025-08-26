import t1 from "./assets/t1.svg"
import t2 from "./assets/t2.svg"
import t3 from "./assets/t3.svg"
import t4 from "./assets/t4.svg"
import t5 from "./assets/t5.svg"
import t6 from "./assets/t6.svg"

export default function Images(){
    return <div className="mt-10 ml-10 pt-24">
        <span className="mt-10 ml-44 flex justify-items-center gap-20">
           <img src={t1} className="cursor-pointer grayscale hover:grayscale-0"/> 
           <img src={t2} className="cursor-pointer grayscale hover:grayscale-0"/>
           <img src={t3} className="cursor-pointer grayscale hover:grayscale-0"/>
        </span>
        <span className="mt-12 ml-44 flex justify-items-center gap-20">
           <img src={t4} className="cursor-pointer grayscale hover:grayscale-0"/> 
           <img src={t5} className="cursor-pointer grayscale hover:grayscale-0"/>
           <img src={t6} className="cursor-pointer grayscale hover:grayscale-0"/>
        </span>
    </div>
}
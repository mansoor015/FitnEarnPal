import grid1 from "./assets/grid1.svg"
import grid2 from "./assets/grid2.svg"
import grid3 from "./assets/grid3.png"
import grid4 from "./assets/grid4.png"

export default function Features(){
    return <div>
        <div className="mt-40 flex justify-center font-lato font-black text-5xl text-[#F5F5F5]">Key Features</div>
        <span className="flex justify-between mx-20 mt-20 space-x-10">
            <span><img src={grid1}/></span>
            <span><img src={grid2}/></span>
            <span><img src={grid3}/></span>
            <span><img src={grid4}/></span>
        </span>
        </div>
}
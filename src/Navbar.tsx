import logo from "./assets/logo.svg"

export default function Navbar (){
    return <div className="flex justify-between pt-2 px-16 bg-[#1a1a1a]">
        <button className="flex items-center space-x-2">
            <img src={logo}/>
            <span className="mt-3 text-[#e04a45] h-12 text-4xl font-bold font-lato w-52">FitnEarnPal</span>
        </button>
        <div className="my-5 space-x-4 text-[#E5E5E5] flex justify-around">
            <a href="https://www.fitnearn.com/" target="_blank" className=" mr-5 pr-4 font-lato text-lg font-medium hover:underline">Home</a>
            <span className="pr-4 font-lato w-18 h-6 text-lg font-medium hover:underline">Features</span>
            <span className=" font-lato w-28 h-8 font-medium text-lg hover:underline">How It Works </span>
        </div>
        <button className=" text-[#F5F5F5] border border-[#b33845] hover:bg-[#b33845] font-lato font-semibold rounded-full text-lg px-5 py-2.5 text-center mt-2">Sign Up Form</button>
    </div>
}
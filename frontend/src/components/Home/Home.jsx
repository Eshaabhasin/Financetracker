import React from "react";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import { Button } from "@/components/ui/button"
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-between px-10 py-5 gap-10">
      {/* LEFT: Text + Button */}
      <div className="w-1/2">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white mb-6">
          Manage Your<br />
          <span className="text-yellow-400">Personal Finances</span><br />
          in a Simple Way
        </h1>

       <NavLink to='/dashboard'>
        <Button className="bg-yellow-400 text-black text-[25px] px-7 py-7 mt-7 hover:bg-yellow-300 font-bold">
          Get Started
        </Button>
        </NavLink>
      </div>

      {/* RIGHT: Image Grid */}
      <div className="w-1/2 flex flex-wrap gap-4 justify-end">
        <img src={image1} className="w-[48%] h-50 object-cover rounded-lg" />
        <img src={image2} alt="img2" className="w-[48%] h-50 object-cover rounded-lg" />
        <img src={image3} alt="img3" className="w-[48%] h-50 object-cover rounded-lg" />
        <img src={image4} alt="img4" className="w-[48%] h-50 object-cover rounded-lg" />
      </div>
    </div>
  );
}

export default Home;

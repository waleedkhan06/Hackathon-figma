import React from "react";

import { AIChatbot } from "./components/Aichatbot";
import HeroSection from "./components/hero";

const Page = () => {
  return (
    <div className="relative">
      
       <HeroSection />

       {/* Chatbot - Fixed Position */}
       <div className="fixed bottom-5 right-5 z-50"> 
         <AIChatbot /> 
      </div>
     </div>
  );

};

export default Page;

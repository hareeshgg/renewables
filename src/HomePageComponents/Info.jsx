import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdCloseFullscreen } from "react-icons/md";

function Info() {
  const [currentOpenTab, setCurrentOpenTab] = useState(0);

  function changeCurrentTab(value) {
    setCurrentOpenTab(value);
  }
  return (
    <section className="min-h-screen grid grid-cols-2 px-48 py-16 gap-8">

      <div style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}assets/images/rec_3.jpg)`,
      }} className="bg-center bg-cover"></div>

      <div className="w-2/3 flex flex-col bg-black gap-[0.1rem]">
        {/* //* Add content for the cards  */}
        <div className={`bg-white py-4 transition-all ${currentOpenTab == 0 ? "flex-auto" : "flex-initial"}`}>
          <div onClick={() => changeCurrentTab(0)} className="flex justify-between items-center">
            <h1 className="font-MontserratBold text-2xl">Powering Tomorrow with Clean Energy</h1>
            {
              (currentOpenTab == 0)
                ? <MdCloseFullscreen />
                : <RxHamburgerMenu />
            }
          </div>
          {
            (currentOpenTab == 0)
              ? <p className="pt-4">We help businesses and communities transition to reliable, sustainable energy solutions. From large-scale solar installations to wind energy consulting, our team designs systems that reduce emissions, lower operating costs, and create long-term value.

                Every project is tailored to your goals, ensuring maximum efficiency while minimizing environmental impact. Together, we're building a cleaner future powered by renewable energy.</p>
              : <span />
          }
        </div>

        <div className={`bg-white py-4 transition-all ${currentOpenTab == 1 ? "flex-auto" : "flex-initial"}`}>
          <div onClick={() => changeCurrentTab(1)} className="flex justify-between items-center">
            <h1 className="font-MontserratBold text-2xl">Built for Performance</h1>
            {
              (currentOpenTab == 1)
                ? <MdCloseFullscreen />
                : <RxHamburgerMenu />
            }
          </div>
          {
            (currentOpenTab == 1)
              ? <p className="pt-4">Our approach combines innovative technology, industry expertise, and a commitment to sustainability. We work closely with our clients from planning to implementation, delivering renewable energy solutions that are efficient, scalable, and built to last.</p>
              : <span />
          }
        </div>

        <div className={`bg-white py-4 transition-all ${currentOpenTab == 2 ? "flex-auto" : "flex-initial"}`}>
          <div onClick={() => changeCurrentTab(2)} className="flex justify-between items-center">
            <h1 className="font-MontserratBold text-2xl">Driving Real Change</h1>
            {
              (currentOpenTab == 2)
                ? <MdCloseFullscreen />
                : <RxHamburgerMenu />
            }
          </div>
          {
            (currentOpenTab == 2)
              ? <p className="pt-4">Whether you're planning your first renewable energy project or expanding an existing infrastructure, our team is ready to help. Get in touch to discover how clean energy can transform your business and create lasting environmental impact.</p>
              : <span />
          }
        </div>

      </div>
    </section>
  )
}

export default Info;

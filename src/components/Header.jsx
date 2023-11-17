import logo from "../assets/fit_flex.svg"

export function Header() {
   return (
      <header id="#" className="bg-headerBg bg-no-repeat bg-cover w-full h-full mt-16">
         <section className="bg-[rgb(15,15,15,.40)] flex justify-center">
            <section className="flex flex-col items-center lg:justify-center gap-y-6 lg:gap-y-10 text-white py-12 lg:h-[650px]">
               <figure>
                  <img src={logo} className="w-20 lg:w-24" alt="logo" />
               </figure>
               <article className="md:w-9/12 text-center flex flex-col gap-y-7 lg:gap-y-11 mb-3">      
                  <h2 className="md:text-4xl lg:text-6xl text-3xl font-bold">Sports and wellness the way you want it - in one membership</h2>
                  <p className="text-sm md:text-base lg:text-2xl md:w-full">Work out wherever and however you like - indoors, outdoors and online. Enjoy the most flexible sports and wellness offer out there!</p>
               </article>
               <aside className="flex flex-col md:flex-row gap-4 lg:gap-6">
                  <button className="bg-transparent border-[1.5px] hover:text-lightGold hover:border-white lg:text-lg border-lightGold text-white w-40 lg:w-56 md:w-44 p-3 lg:p-4 font-bold text-xs uppercase md:text-sm">
                     Learn More
                  </button>
                  <button className="bg-lightGold text-grayBg hover:bg-darkGold hover:text-white text-xs lg:text-lg md:text-sm w-40 lg:w-56 md:w-44 p-3 lg:p-4 font-bold uppercase">
                     View Memberships
                  </button>
               </aside>
            </section>
         </section>
      </header>
   )
}
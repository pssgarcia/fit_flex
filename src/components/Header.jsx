import logo from "../assets/fit_flex.svg"

export function Header() {
   return (
      <header className="bg-headerBg bg-no-repeat bg-cover h-full w-full">
         <section className="bg-[rgb(15,15,15,.40)] flex justify-center pt-14 pb-20">
            <section className="flex flex-col items-center gap-y-6 text-white">
               <figure>
                  <img src={logo} className="w-20" alt="logo" />
               </figure>
               <article className="w-80 text-center flex flex-col gap-y-7 mb-3">      
                  <h2 className="text-3xl font-bold">Sports and wellness the way you want it - in one membership</h2>
                  <p className="">Work out wherever and however you like - indoors, outdoors and online. Enjoy the most flexible sports and wellness offer out there!</p>
               </article>
               <aside className="flex flex-col gap-y-4">
                  <button className="bg-transparent border-2 hover:text-lightGold hover:border-white border-lightGold text-white w-46 p-4 font-bold text-base uppercase">
                     Learn More
                  </button>
                  <button className="bg-lightGold text-grayBg hover:bg-darkGold hover:text-white w-46 p-4 font-bold text-base uppercase">
                     View Memberships
                  </button>
               </aside>
            </section>
         </section>
      </header>
   )
}
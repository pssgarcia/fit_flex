import logo from "../assets/fit_flex.svg"

export function Header() {
   return (
      <header className="bg-headerBg bg-no-repeat bg-cover h-full w-full">
         <section className="bg-[rgb(15,15,15,.40)] flex items-center pt-14 pb-20">
            <section className="flex flex-col items-center gap-y-5 text-white">
               <figure>
                  <img src={logo} className="w-20" alt="logo" />
               </figure>
               <article className="w-1/2 text-center flex flex-col gap-y-5 mb-3">      
                  <h2 className="text-4xl font-bold">Sports and wellness the way you want it - in one membership</h2>
                  <p className="text-sm">Work out wherever and however you like - indoors, outdoors and online. Enjoy the most flexible sports and wellness offer out there!</p>
               </article>
               <aside className="flex gap-x-4">
                  <button className="bg-transparent border-2 hover:text-lightGold hover:border-white border-lightGold text-white w-44 p-3 font-bold text-sm uppercase">
                     Learn More
                  </button>
                  <button className="bg-lightGold text-grayBg hover:bg-darkGold hover:text-white w-44 p-3 font-bold text-sm uppercase">
                     View Memberships
                  </button>
               </aside>
            </section>
         </section>
      </header>
   )
}
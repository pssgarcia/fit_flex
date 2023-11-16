import logo from "../assets/fit_flex.svg"

export function Header() {
   return (
      <header id="#" className="bg-headerBg bg-no-repeat bg-cover w-full h-full mt-16">
         <section className="bg-[rgb(15,15,15,.40)] flex justify-center">
            <section className="flex flex-col items-center gap-y-6 text-white py-12">
               <figure>
                  <img src={logo} className="w-20" alt="logo" />
               </figure>
               <article className="md:w-96 text-center flex flex-col gap-y-7 mb-3">      
                  <h2 className="md:text-4xl text-3xl font-bold">Sports and wellness the way you want it - in one membership</h2>
                  <p className="text-sm">Work out wherever and however you like - indoors, outdoors and online. Enjoy the most flexible sports and wellness offer out there!</p>
               </article>
               <aside className="flex flex-col md:flex-row gap-4">
                  <button className="bg-transparent border-[1.5px] hover:text-lightGold hover:border-white border-lightGold text-white w-40 p-3 font-bold text-xs uppercase">
                     Learn More
                  </button>
                  <button className="bg-lightGold text-grayBg hover:bg-darkGold hover:text-white text-xs w-40 p-3 font-bold uppercase">
                     View Memberships
                  </button>
               </aside>
            </section>
         </section>
      </header>
   )
}
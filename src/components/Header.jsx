import logo from "../assets/fit_flex.svg"

export function Header() {
   return (
      <header className="bg-headerBg bg-no-repeat bg-cover h-96 w-full">
         <section className="bg-[rgb(15,15,15,.40)] flex items-center h-full">
            <section className="flex flex-col items-center gap-y-5 text-white">
               <figure>
                  <img src={logo} className="h-16" alt="logo" />
               </figure>
               <article className="w-1/2 text-center flex flex-col gap-y-4">      
                  <h2 className="text-4xl font-bold">Sports and wellness the way you want it - in one membership</h2>
                  <p>Work out wherever and however you like - indoors, outdoors and online. Enjoy the most flexible sports and wellness offer out there!</p>
               </article>
               <button className="bg-lightGold text-grayBg p-4 font-bold text-sm uppercase">
                  View Memberships
               </button>
            </section>
         </section>
      </header>
   )
}
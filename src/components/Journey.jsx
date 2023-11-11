import swimming from "../assets/swimming.jpg";
import boxing from "../assets/boxing.jpg"
import yoga from "../assets/yoga.jpg"
import fitness from "../assets/fitness.jpg"
import wellness from "../assets/wellness.jpg"

export function Journey() {
   return ( 
      <section className="flex flex-col gap-24 font-semibold bg-lightGold w-full justify-center p-10">
         <section className="flex flex-col gap-24">
            <aside className="flex flex-col items-center gap-24">
               <figure className="w-72 h-72">
                  <img className="w-full h-full" src={swimming} alt="swimming" />
                  <figcaption className="text-center bg-white p-5 text-lg">Swimming</figcaption>
               </figure>
               <figure className="w-72 h-72">
                  <img className="w-full h-full" src={boxing} alt="boxing" />
                  <figcaption className="text-center bg-white p-5 text-lg">Boxing</figcaption>
               </figure>
            </aside>
            <aside className="flex flex-col items-center gap-24">
               <figure  className="w-72 h-72">
                  <img className="w-full h-full" src={yoga} alt="yoga" />
                  <figcaption className="text-center bg-white p-5 text-lg">Yoga</figcaption>
               </figure>
            </aside>
            <aside className="flex flex-col items-center gap-24">
               <figure className="w-72 h-72">
                  <img className="w-full h-full" src={fitness} alt="fitness" />
                  <figcaption className="text-center bg-white p-5 text-lg">Fitness</figcaption>
               </figure>
               <figure className="w-72 h-72">
                  <img className="w-full h-full" src={wellness} alt="wellness" />
                  <figcaption className="text-center bg-white p-5 text-lg">Wellness</figcaption>
               </figure>
            </aside>
         </section>
         <article className="w-72 flex flex-col justify-center gap-y-8">
            <h2 className="text-4xl font-bold">Fitness Journey</h2>
            <aside>
               <h3 className="text-2xl mb-3">Endless variety</h3>
               <p className="font-normal">Choose from more than 50 types of sports offerd by over 10000 partners.</p>
            </aside>
            <aside>
               <h3 className="text-2xl mb-3">Discover something new</h3>
               <p className="font-normal">Sick of the same old? You'll never get bored with us. Discover new activities every day.</p>
            </aside>
            <aside>
               <h3 className="text-2xl mb-3">Combine Activities</h3>
               <p className="font-normal">Like to switch things up? A multi-sport plan is the way to go.</p>
            </aside>
         </article>
      </section>
   )
}  
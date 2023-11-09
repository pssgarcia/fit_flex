import swimming from "../assets/swimming.jpg";
import boxing from "../assets/boxing.jpg"
import yoga from "../assets/yoga.jpg"
import fitness from "../assets/fitness.jpg"
import wellness from "../assets/wellness.jpg"

export function Journey() {
   return ( 
      <section className="flex gap-x-7 font-semibold bg-lightGold w-full justify-center p-10">
         <section className="flex gap-x-4">
            <aside className="flex flex-col gap-y-5">
               <figure>
                  <img className="w-32 h-44" src={swimming} alt="swimming" />
                  <figcaption className="text-center bg-white p-3 text-sm">Swimming</figcaption>
               </figure>
               <figure>
                  <img className="w-32 h-44" src={boxing} alt="boxing" />
                  <figcaption className="text-center bg-white p-3 text-sm">Boxing</figcaption>
               </figure>
            </aside>
            <aside className="flex flex-col justify-center">
               <figure>
                  <img className="w-32 h-44" src={yoga} alt="yoga" />
                  <figcaption className="text-center bg-white p-3 text-sm">Yoga</figcaption>
               </figure>
            </aside>
            <aside className="flex flex-col gap-y-5">
               <figure>
                  <img className="w-32 h-44" src={fitness} alt="fitness" />
                  <figcaption className="text-center bg-white p-3 text-sm">Fitness</figcaption>
               </figure>
               <figure>
                  <img className="w-32 h-44" src={wellness} alt="wellness" />
                  <figcaption className="text-center bg-white p-3 text-sm">Wellness</figcaption>
               </figure>
            </aside>
         </section>
         <article className="w-72 flex flex-col justify-center gap-y-8">
            <h2 className="text-3xl font-bold">Fitness Journey</h2>
            <aside>
               <h3 className="text-lg mb-3">Endless variety</h3>
               <p className="font-normal text-sm">Choose from more than 50 types of sports offerd by over 10000 partners.</p>
            </aside>
            <aside>
               <h3 className="text-lg mb-3">Discover something new</h3>
               <p className="font-normal text-sm">Sick of the same old? You'll never get bored with us. Discover new activities every day.</p>
            </aside>
            <aside>
               <h3 className="text-lg mb-3">Combine Activities</h3>
               <p className="font-normal text-sm">Like to switch things up? A multi-sport plan is the way to go.</p>
            </aside>
         </article>
      </section>
   )
}
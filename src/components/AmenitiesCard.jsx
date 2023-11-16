export function AmenitiesCard({ amenity, src, alt}) {
   return (
      <figure className="md:w-[45%]">
         <img src={src} alt={alt} width={325} className="md:w-full h-64" />
         <figcaption className="p-7 bg-lightGold text-center font-bold text-xl md:text-2xl">{amenity}</figcaption>
      </figure>
   )
}
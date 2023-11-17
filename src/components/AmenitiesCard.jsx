export function AmenitiesCard({ amenity, src, alt}) {
   return (
      <figure className="w-80 md:w-[45%] lg:w-[27%]">
         <img src={src} alt={alt} width={325} className="md:w-full h-64 lg:h-80" />
         <figcaption className="p-7 bg-lightGold text-center font-bold text-xl md:text-2xl">{amenity}</figcaption>
      </figure>
   )
}
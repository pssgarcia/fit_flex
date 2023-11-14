export function AmenitiesCard({ amenity, src, alt}) {
   return (
      <figure>
         <img src={src} alt={alt} width={325} className="h-64" />
         <figcaption className="p-7 bg-lightGold text-center font-bold text-xl">{amenity}</figcaption>
      </figure>
   )
}
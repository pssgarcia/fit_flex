export function AmenitiesCard({ amenity, src, alt}) {
   return (
      <figure>
         <img src={src} alt={alt} width={325} className="h-64" />
         <figcaption>{amenity}</figcaption>
      </figure>
   )
}
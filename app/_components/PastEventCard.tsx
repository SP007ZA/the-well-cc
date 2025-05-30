import { format } from 'date-fns';


export default function PastEventCard({
  id,
  title,
  startDate,
  galleryImages,
  youtubeLinks

}: {
  id: string;
  title: string;
  startDate: string;
  galleryImages: [];
  youtubeLinks: []; // Image URL
}) {
  const formattedStart = format(new Date(startDate), 'MMMM d, yyyy · h:mm a');


  return (
         <>
          <div key={id} className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-gray-600 mb-4">{formattedStart}</p>

          {/* Image gallery */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
            {galleryImages?.map((img:any) => (
              <img
                key={id}
                src={img.image.url}
                alt={img.altText}
                className="rounded object-cover h-28 w-full"
              />
            ))}
          </div>

          {/* YouTube video links */}
          {youtubeLinks?.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {youtubeLinks.map((url:any, index) => (
                <iframe
                  key={index}
                  src={url?.replace("watch?v=", "embed/")}
                  className="w-full aspect-video rounded"
                  allowFullScreen
                />
              ))}
            </div>
          )}
        </div>
         </>
  )
}

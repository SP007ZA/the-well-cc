import { useEffect, useState } from "react";

export default function PastEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/api/events?filter=past') // Again, replace with your data loader
      .then(res => res.json())
      .then(setEvents);
  }, []);

  return (
    <div className="grid gap-10">
      {events.map(event => (
        <div key={event.id} className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-bold mb-2">{event.title}</h3>
          <p className="text-sm text-gray-600 mb-4">{new Date(event.startDate).toLocaleDateString()}</p>

          {/* Image gallery */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
            {event.galleryImages?.map(img => (
              <img
                key={img.id}
                src={img.image.url}
                alt={img.altText}
                className="rounded object-cover h-28 w-full"
              />
            ))}
          </div>

          {/* YouTube video links */}
          {event.youtubeLinks?.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {event.youtubeLinks.map((url, index) => (
                <iframe
                  key={index}
                  src={url.replace("watch?v=", "embed/")}
                  className="w-full aspect-video rounded"
                  allowFullScreen
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

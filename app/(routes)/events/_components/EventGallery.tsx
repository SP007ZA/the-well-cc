import Image from "next/image"
import { useEffect, useState } from "react"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import Captions from "yet-another-react-lightbox/plugins/captions"
import { useQuery } from "@apollo/client"
import { GetGalleryImagesDocument, GetGalleryImagesQuery } from "@/data/gql/graphql"

/*const galleryItems = [
  {
    src: "/gallery/event1.jpg",
    alt: "Worship Night 2024",
    caption: "Worship Night 2024",
  },
  {
    src: "/gallery/event2.jpg",
    alt: "Youth Retreat",
    caption: "Youth Retreat – Clarens",
  },
  {
    src: "/gallery/event3.jpg",
    alt: "Baptism Celebration",
    caption: "Baptism Sunday",
  },
  {
    src: "/gallery/event4.jpg",
    alt: "Marriage Seminar",
    caption: "Marriage & Relationships",
  },
  {
    src: "/gallery/event5.jpg",
    alt: "Outreach",
    caption: "Community Outreach Drive",
  },
] */

export function EventGallery() {
  const [open, setOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const [galleryItems, setGelleryItems] = useState<any>([])

  const {data} = useQuery<GetGalleryImagesQuery>(GetGalleryImagesDocument)

  useEffect(() => {

    if(data?.galleryImages.length !==0) {
      const items = data?.galleryImages.map((item) => {
        return {
          id:item.id,
            src: item.image.publicUrlTransformed,
            alt: item.title,
            caption: item.title,
  }

      })
      
  setGelleryItems(items)
    }


  }, [data])

  console.log(data)

  const slides = galleryItems?.map((item) => ({
    src: item.src,
    alt: item.alt,
    description: item.caption,
  }))

  return (
    <section className="mt-12 space-y-6">
      <h2 className="text-2xl font-semibold text-rose-700">Event Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {galleryItems?.map((item, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrentIndex(idx)
              setOpen(true)
            }}
            className="relative group rounded-xl overflow-hidden shadow-sm border bg-white hover:shadow-lg transition focus:outline-none"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={600}
              height={400}
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform"
            />
            {item.caption && (
              <div className="absolute bottom-0 bg-black/60 text-white text-sm px-3 py-1 w-full">
                {item.caption}
              </div>
            )}
          </button>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={slides}
        plugins={[Zoom, Captions]}
      />
    </section>
  )
}

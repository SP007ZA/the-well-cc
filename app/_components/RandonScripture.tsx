/* eslint-disable */
'use client'

import { useEffect, useState } from "react"

    const scriptures = [
  '"I can do all things through Christ who strengthens me." - Philippians 4:13',
  '"Trust in the Lord with all your heart and lean not on your own understanding." - Proverbs 3:5',
  '"For I know the plans I have for you, declares the Lord..." - Jeremiah 29:11',
  '"Be strong and courageous. Do not be afraid..." - Joshua 1:9',
  '“Delight yourself in the Lord, and He will give you the desires of your heart.” – Psalm 37:4',
  '"The Lord is my shepherd; I shall not want." - Psalm 23:1'
]

const RandomScriptures = () => {




const [scripture, setScripture] = useState(scriptures[0])

  useEffect(() => {
    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * scriptures.length)
      setScripture(scriptures[random])
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  return(
    <p className="italic mb-1 text-rose-700 text-center ">{scripture}</p>
  )


}

export default  RandomScriptures
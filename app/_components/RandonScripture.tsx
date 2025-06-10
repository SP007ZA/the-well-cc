/* eslint-disable */
'use client'

import { useEffect, useState } from "react"

    const scriptures = [
  '"For it is better to marry than to burn with passion." - 1Corinthians 7:9 ',
  '"Do not be unequally yoked together with unbelievers" - 2Corinthians 6:14',
  '"Flee also youthful lusts; but pursue righteousness." - 2Timothy 2:22',
  '"He who finds a wife finds what is good and receives favor from the LORD." - Proverbs 18:22',
  '“A wife of noble character who can find? She is worth far more than rubies. – Proverbs 31:10',
  '"How beautiful you are, my darling!Your eyes are like doves." - Song 1:15',
  '"Do not arouse or awaken love until the time is right." - Song 2:7',
  '"How beautiful you are, my darling!Your eyes are like doves." - Song 1:15',
  '"faith, hope, and love are abiding virtues, with love being the greatest of the three" - 1Corinthians 13:3',
  '"Love one another, as I have loved you." - John 15:12',
  '"Love and faithfulness meet together; righteousness and peace kiss each other." - Psalm 85:11'
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
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
  '"Love and faithfulness meet together; righteousness and peace kiss each other." - Psalm 85:11',
  '"Let him kiss me with the kisses of his mouth— for your love is more delightful than wine" - Song of Songs 1:2',
  '"Love and faithfulness meet together; righteousness and peace kiss each other." - Psalm 85:11',
  '"Let him lead me to the banquet hall, and let his banner over me be love." - Song of Songs 2:4',
  '"His left arm is under my head, and his right arm embraces me." - Song of Songs 2:6',
  '"You are altogether beautiful, my darling; there is no flaw in you." - Song of Songs 4:7',
  '"You have stolen my heart, my sister, my bride; you have stolen my heart with one glance of your eyes." - Song of Songs 4:9',
  '"How delightful is your love, my sister, my bride! How much more pleasing is your love than wine." - Song of Songs 4:10',
  '"His mouth is sweetness itself; he is altogether lovely. This is my beloved, this is my friend" - Song of Songs 5:16',
  '"I am my beloved’s and my beloved is mine" - Song of Songs 6:3',
  '"Place me like a seal over your heart, like a seal on your arm; for love is as strong as death… Many waters cannot quench love." - Song of Songs 8:6',
  '"Love cannot be bought; it cannot be sold for all the wealth of one’s house" - Song of Songs 8:7',
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
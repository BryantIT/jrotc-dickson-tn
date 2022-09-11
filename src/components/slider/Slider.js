import React, { useState, useEffect, useContext } from 'react'
import { Link } from "react-router-dom"
import image1 from '../../assests/imgs/dchsFlag.jpg'
import image2 from '../../assests/imgs/dchsLine.jpg'
import image3 from '../../assests/imgs/dchsplatflag.jpg'
import './style.css'

const Slider = ({ siteData }) => {
  const [siteInfo, setSiteInfo] = useState(null)
  const [carouselImageArray, setCarouselImageArray] = useState(null)
  const [indexMax, setIndexMax] = useState(0)
  const [carouselPaused, setCarouselPaused] = useState(false)
  const [defaultImage, setDefaultImage] = useState(null)
  const [displayedImage, setDisplayedImage] = useState(null)
  const [imageIndex, setImageIndex] = useState(1)
  const [moto, setMoto] = useState('')
  const [titleLines, setTitleLines] = useState(null)
  let timerRef
  useEffect(() => {
    // Get images from backend once setup
    const imageArray = [
      image1,
      image2,
      image3,
    ]
    setIndexMax(imageArray.length)
    setCarouselImageArray(imageArray)
    setDefaultImage(imageArray[0])
    setMoto(siteData.moto)
    setTitleLines({
      first: siteData.title1,
      second: siteData.title2,
      third: siteData.title3
    })
  }, [])

  const nextImage = (imageIndex) => {
    if (imageIndex >= indexMax) {
      imageIndex = 0
    }

    // This if statement prevents errors from array being null for a split second during promise resolution
    if(carouselImageArray) {
      setDisplayedImage(carouselImageArray[imageIndex])
    }
    imageIndex = imageIndex += 1
    setImageIndex(imageIndex)
  }
  const prevImage = (imageIndex) => {
    setDisplayedImage(carouselImageArray[imageIndex])
    imageIndex = imageIndex -= 1
    if (imageIndex <= 0) {
      imageIndex = indexMax
    }
    setImageIndex(imageIndex)
  }

  const intervalCallBack = () => {
    if(!carouselPaused) {
      nextImage(imageIndex)
      clearInterval(timerRef)
    }
  }
  timerRef = setInterval(intervalCallBack, 15000, imageIndex )


  return (
    <section className="slider_section position-relative">

      <div className="slider_bg-container">

      </div>
      <div className="slider-container">

        <div className="detail-box">
        <button className="carousel-control-prev" onClick={() => prevImage(imageIndex)}></button>
        <button className="carousel-control-next" onClick={() => nextImage(imageIndex)}></button>
          {
            titleLines ?
            <h1>
            {titleLines.first}
            <br />
            {titleLines.second}
            <br />
            {titleLines.third}
          </h1> : null
          }
          <p>
            {
              moto ? moto : ''
            }
          </p>
          <div>
          <Link to='/contact' className="slider-link">CONTACT US</Link>
          </div>
        </div>
        <div className="img-box">
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                {
                  <img src={displayedImage ? displayedImage : defaultImage} />
                }
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  )
}

export default Slider

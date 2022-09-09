import React, { useState, useEffect } from 'react'
import image1 from '../../assests/imgs/slider-img.jpg'
import image2 from '../../assests/imgs/IMG_7901.jpg'
import image3 from '../../assests/imgs/slider-img.jpg'
import './style.css'

const Slider = () => {
  const [carouselImageArray, setCarouselImageArray] = useState(null)
  const [defaultImage, setDefaultImage] = useState(null)
  const [displayedImage, setDisplayedImage] = useState(null)
  const [imageIndex, setImageIndex] = useState(1)
  useEffect(() => {
    // Get images from backend once setup
    const imageArray = [
      image1,
      image2,
      image3,
    ]
    setCarouselImageArray(imageArray)
    setDefaultImage(imageArray[0])
  }, [])

  const nextImage = (imageIndex) => {
    if (imageIndex >= carouselImageArray.length) {
      imageIndex = 0
    }

    setDisplayedImage(carouselImageArray[imageIndex])
    imageIndex = imageIndex += 1
    setImageIndex(imageIndex)
  }
  const prevImage = (imageIndex) => {
    setDisplayedImage(carouselImageArray[imageIndex])
    imageIndex = imageIndex -= 1
    if (imageIndex <= 0) {
      imageIndex = carouselImageArray.length
    }
    setImageIndex(imageIndex)
  }

  return (
    <section className="slider_section position-relative">

      <div className="slider_bg-container">

      </div>
      <div className="slider-container">

        <div className="detail-box">
        <button className="carousel-control-prev" onClick={() => prevImage(imageIndex)}></button>
        <button className="carousel-control-next" onClick={() => nextImage(imageIndex)}></button>
          <h1>
            DiscoverING <br />
            SOMETHING <br />
            NEW BRAND
          </h1>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem
          </p>
          <div>
            <a href="" className="slider-link">
              CONTACT US
            </a>
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

import React, { useState, useEffect } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import gallery1 from '../../assests/imgs/gallery1.jpg'
import gallery2 from '../../assests/imgs/galler2.jpg'
import gallery3 from '../../assests/imgs/gallery3.jpg'
import gallery4 from '../../assests/imgs/gallery4.jpg'
import gallery5 from '../../assests/imgs/gallery5.jpg'
import gallery6 from '../../assests/imgs/gallery6.jpg'
import gallery7 from '../../assests/imgs/gallery7.jpg'
import gallery8 from '../../assests/imgs/gallery8.jpg'
import gallery9 from '../../assests/imgs/gallery9.jpg'
import gallery10 from '../../assests/imgs/gallery10.jpg'
import gallery11 from '../../assests/imgs/gallery11.jpg'
import gallery12 from '../../assests/imgs/gallery12.jpg'
import gallery13 from '../../assests/imgs/gallery13.jpg'
import gallery14 from '../../assests/imgs/gallery14.jpg'
import gallery15 from '../../assests/imgs/gallery15.jpg'
import gallery16 from '../../assests/imgs/gallery16.jpg'

const Gallery = ({ siteData }) => {
  let indexArray = []
  const [title, setTitle] = useState(null)
  const [subTitle, setSubTitle] = useState(null)
  const [previewArray, setPreviewArray] = useState([])
  const [galleryArray, setGalleryArray] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  const imageArray = [
    {
      image: gallery1,
      imageName: 'gallery1',
    },
    {
      image: gallery2,
      imageName: 'gallery2',
    },
    {
      image: gallery3,
      imageName: 'gallery3',
    },
    {
      image: gallery4,
      imageName: 'gallery4',
    },
    {
      image: gallery5,
      imageName: 'gallery5',
    },
    {
      image: gallery6,
      imageName: 'gallery6',
    },
    {
      image: gallery7,
      imageName: 'gallery7',
    },
    {
      image: gallery8,
      imageName: 'gallery8',
    },
    {
      image: gallery9,
      imageName: 'gallery9',
    },
    {
      image: gallery10,
      imageName: 'gallery10',
    },
    {
      image: gallery11,
      imageName: 'gallery11',
    },
    {
      image: gallery12,
      imageName: 'gallery12',
    },
    {
      image: gallery13,
      imageName: 'gallery13',
    },
    {
      image: gallery14,
      imageName: 'gallery14',
    },
    {
      image: gallery15,
      imageName: 'gallery15',
    },
    {
      image: gallery16,
      imageName: 'gallery16',
    },
  ]

  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--

      // And swap it with the current element.
      ;[array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ]
    }

    return array
  }
  useEffect(() => {
    setTitle(siteData.title)
    setSubTitle(siteData.subTitle)
    let array = shuffle(imageArray)
    let newArray = []
    if (imageArray.length > 0) {
      for (let i = 0; i < 6; i++) {
        newArray.push(array[i])
      }
      setPreviewArray(newArray)
      setIsLoaded(true)
    }
  }, [siteData])
  return (
    <section className='portfolio_section'>
      <div className='container'>
        <div className='custom_heading-container'>
          <h2>{title ? title : ''}</h2>
          <hr />
        </div>
        <p>{subTitle ? subTitle : ''}</p>
        <div className='layout_padding2-top'>
          <div className='row'>
            {isLoaded
              ? previewArray.map((image) => (
                  <div className='col-md-4' key={image.imageName}>
                    <div className='img-box'>
                      <img src={image.image} alt='' />
                      <Link to='/gallery'>
                        <img
                          src={require('../../assests/imgs/link.png')}
                          alt=''
                        />
                      </Link>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
        <div className='read-btn'>
          <Link to='/gallery'>See More</Link>
        </div>
      </div>
    </section>
  )
}

export default Gallery

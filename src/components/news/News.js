import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './style.css'

const News = ({ siteData }) => {
  const bloggerKey = process.env.REACT_APP_BLOGGER_API_KEY
  const bloggerURL = 'https://www.googleapis.com/blogger/v3/blogs/'
  const [bloggerID, setBloggerID] = useState(null)
  const [bloggerData, setBloggerData] = useState(null)
  const [title, setTitle] = useState(null)
  const [subTitle, setSubTitle] = useState(null)

  useEffect(() => {
    setTitle(siteData.title)
    setBloggerID(siteData.bloggerID)
    setSubTitle(siteData.subTitle)
  }, [])

  useEffect(() => {
    if (bloggerID) {
      axios
        .get(
          `${bloggerURL}${bloggerID}/posts?fetchBodies=true&fetchImages=true&maxResults=6&orderBy=PUBLISHED&key=${bloggerKey}`
        )
        .then((response) => {
          console.log(response.data.items[0].images[0])
          setBloggerData(response.data)
        })
    }
  }, [bloggerID])
  return (
    <section className='news_section layout_padding'>
      <div className='container'>
        <div className='d-flex flex-column align-items-end'>
          <div className='custom_heading-container'>
            <hr />
            <h2>{title ? title : ''}</h2>
          </div>
          <p>{subTitle ? subTitle : ''}</p>
        </div>
        <div className='row'>
          {bloggerData
            ? bloggerData.items.map((blog) => (
                <div className='col-md-4' key={blog.id}>
                  <div className='box'>
                    <div className='img-box'>
                      <img
                        src={blog && blog.images ? blog.images[0].url : null}
                        alt=''
                      />
                    </div>
                    <div className='action-box'>
                      {/* <div className='action'>
                  <a href=''>
                    <img src={require('../../assests/imgs/like.png')} alt='' />
                  </a>
                  <a href=''>
                    <img
                      src={require('../../assests/imgs/comment.png')}
                      alt=''
                    />
                  </a>
                  <a href=''>
                    <img src={require('../../assests/imgs/share.png')} alt='' />
                  </a>
                </div> */}
                    </div>
                    <div className='detail-box'>
                      <h4>{blog ? blog.title : null}</h4>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: blog ? blog.content.substring(0, 800) : null,
                        }}
                      ></p>
                      <div>
                        <a
                          href={blog.url}
                          target='_blank'
                          rel='noreferrer noopener'
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </section>
  )
}

export default News

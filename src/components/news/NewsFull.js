import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './style.css'

const NewsFull = ({ siteData }) => {
  const bloggerKey = process.env.REACT_APP_BLOGGER_API_KEY
  const bloggerURL = 'https://www.googleapis.com/blogger/v3/blogs/'
  const [bloggerID, setBloggerID] = useState(null)
  const [bloggerData, setBloggerData] = useState(null)
  const [title, setTitle] = useState(null)
  const [subTitle, setSubTitle] = useState(null)
  const [profileURL, setProfileURL] = useState(null)

  useEffect(() => {
    setTitle(siteData.title)
    setBloggerID(siteData.bloggerID)
    setSubTitle(siteData.subTitle)
  }, [])

  useEffect(() => {
    if (bloggerID) {
      axios
        .get(
          `${bloggerURL}${bloggerID}/posts?fetchBodies=true&fetchImages=true&maxResults=10&orderBy=PUBLISHED&key=${bloggerKey}`
        )
        .then((response) => {
          setProfileURL(response.data.items[0].author.url)
          setBloggerData(response.data)
        })
    }
  }, [bloggerID])
  return (
    <section className='news_section layout_padding'>
      <div className='container'>
        <div className='row'>
        <div className='col text-center border-right'>Hello Twitter Column</div>
        <div className='col-8 border-right'>
          <div className='d-flex flex-column align-items-end'>
            <div className='custom_heading-container'>
              <hr />
              <h2>{title ? title : ''}</h2>
            </div>
            <p>{subTitle ? subTitle : ''}</p>
            <a href={profileURL} target='_blank' rel='noopener noreferrer'>
              Read more here!
            </a>
          </div>
          <div className='row'>
            {bloggerData
              ? bloggerData.items.map((blog) => (
                  <div className='col-md-4 border-right' key={blog.id}>
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
                            __html: blog
                              ? blog.content.substring(0, 800)
                              : null,
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
        <div className='col text-center' >Hello Insta Column</div>
        </div>
      </div>
    </section>
  )
}

export default NewsFull

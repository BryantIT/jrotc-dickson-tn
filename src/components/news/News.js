import React from 'react'
import './style.css'

const News = () => {
  return (
    <section className='news_section layout_padding'>
      <div className='container'>
        <div className='d-flex flex-column align-items-end'>
          <div className='custom_heading-container'>
            <hr />
            <h2>Letest News</h2>
          </div>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority
          </p>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <div className='box'>
              <div className='img-box'>
                <img src={require('../../assests/imgs/n-1.jpg')} alt='' />
              </div>
              <div className='action-box'>
                <div className='action'>
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
                </div>
              </div>
              <div className='detail-box'>
                <h4>elements good design</h4>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem
                </p>
                <div>
                  <a href=''>Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='box'>
              <div className='img-box'>
                <img src={require('../../assests/imgs/n-2.jpg')} alt='' />
              </div>
              <div className='action-box'>
                <div className='action'>
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
                </div>
              </div>
              <div className='detail-box'>
                <h4>elements good design</h4>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem
                </p>
                <div>
                  <a href=''>Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='box'>
              <div className='img-box'>
                <img src={require('../../assests/imgs/n-3.png')} alt='' />
              </div>
              <div className='action-box'>
                <div className='action'>
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
                </div>
              </div>
              <div className='detail-box'>
                <h4>elements good design</h4>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem
                </p>
                <div>
                  <a href=''>Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default News

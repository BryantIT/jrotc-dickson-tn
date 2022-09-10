import React from 'react'
import './style.css'

const Contact = () => {
  return (
    <section className="contact_section layout_padding-bottom">
    <div className="container">
      <div className="d-flex flex-column align-items-end">
        <div className="custom_heading-container">
          <hr />
          <h2>
            Contact Us
          </h2>
        </div>
      </div>
      <div className="layout_padding-top layout_padding2-bottom">
        <div className="row">
          <div className="col-md-7">
            <form action="">
              <div className="contact_form-container">
                <div>
                  <div>
                    <input type="text" placeholder="Name" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <input type="text" placeholder="Phone Number" />
                  </div>
                  <div className="">
                    <input type="text" placeholder="Message" className="message_input" />
                  </div>
                  <div className="mt-5">
                    <button type="submit">
                      send
                    </button>
                  </div>
                </div>

              </div>

            </form>
          </div>
          <div className="col-md-5">
            <div className="map-box">
              <div id="map">
                <div className="map-responsive">
                  {/* <iframe
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                    width="600" height="300" frameborder="0" style="border:0; width: 100%;" allowfullscreen></iframe> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact_items">

        <a href="">
          <div className="item">
            <div className="img-box box-2">

            </div>
            <div className="detail-box">
              <p>
                +02 1234567890
              </p>
            </div>
          </div>
        </a>
        <a href="">
          <div className="item ">
            <div className="img-box box-3">

            </div>
            <div className="detail-box">
              <p>
                demo@gmail.com
              </p>
            </div>
          </div>
        </a>
        <a href="">
          <div className="item ">
            <div className="img-box box-1">

            </div>
            <div className="detail-box">
              <p>
                t will be distracted by the readable
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
  )
}

export default Contact

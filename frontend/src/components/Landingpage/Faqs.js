import React from 'react'
import './LandingPage.css'
export default function Faqs() {
  return (
    <>

      <marquee id="faqid" className="marq">Going through theses FAQ's (Frequently asked Questions) will expose you more about our application</marquee>
      <div className="accordion col-6 mt-4 mb-3 p-4" id="accordionExample" style={{ backgroundColor: 'white' }}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button collapsed aitem" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
              Is my data secure on the chat application?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Yes, we prioritize the security and privacy of your data. Our chat application employs encryption protocols to ensure that your conversations are safe and protected from unauthorized access.
            </div>
          </div>
        </div>
        <div className="accordion-item mt-4 ">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed aitem" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              How do I start using the chat application?
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              To start using the chat application, simply sign up for an account or log in if you already have one. Once logged in, you can navigate to the chat interface to begin messaging with other users.
            </div>
          </div>
        </div>
        <div className="accordion-item mt-4" >
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed aitem" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Are there any limitations on the number of users or messages?
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Our chat application is designed to accommodate a large number of users and messages. However, there may be certain limitations depending on the server capacity.
            </div>
          </div>
        </div>
      </div>

      <div className="accordion col-6 mt-4 mb-3 p-4" id="accordionExample" style={{ backgroundColor: 'white' }}>
        <div className="accordion-item " >
          <h2 className="accordion-header" id="headingOne1">
            <button className="accordion-button collapsed aitem" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne">
              Is customer support available for the chat application?
            </button>
          </h2>
          <div id="collapseOne1" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Yes, we offer customer support to assist you with any questions or issues you may encounter while using the chat application. You can reach out to our support team through email.
            </div>
          </div>
        </div>
        <div className="accordion-item mt-4">
          <h2 className="accordion-header" id="headingTwo1">
            <button className="accordion-button collapsed aitem" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo1" aria-expanded="false" aria-controls="collapseTwo">
              Is there a limit to the file size in the chat application?
            </button>
          </h2>
          <div id="collapseTwo1" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Our chat application imposes certain limits on the size and type of files that can be shared to ensure smooth performance and prevent misuse.
            </div>
          </div>
        </div>
        <div className="accordion-item mt-4">
          <h2 className="accordion-header" id="headingThree1">
            <button className="accordion-button collapsed aitem" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree1" aria-expanded="false" aria-controls="collapseThree">
              Is there a feature to search for people on ChatNest?
            </button>
          </h2>
          <div id="collapseThree1" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Yes, our chat application includes a search feature that allows users to easily search for people on ChatNest. You can search by keywords to quickly locate relevant users.
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

import React from 'react'
import './LandingPage.css'
export default function Faqs() {
  return (
    <>
    
    <marquee className="marq">Going through theses FAQ's (Frequently asked Questions) will expose you more about our application</marquee>
    <div className="accordion col-6 mt-4 mb-3" id="accordionExample"style={{backgroundColor:'white'}}>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button collapsed aitem fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
      Is my data secure on the chat application?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse "  aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> Yes, we prioritize the security and privacy of your data. Our chat application employs encryption protocols to ensure that your conversations are safe and protected from unauthorized access.
      </div>
    </div>
  </div>
  <div className="accordion-item mt-4 ">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed aitem fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      How do I start using the chat application?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> To start using the chat application, simply sign up for an account or log in if you already have one. Once logged in, you can navigate to the chat interface to begin messaging with other users.
      </div>
    </div>
  </div>
  <div className="accordion-item mt-4" >
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed aitem fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Are there any limitations on the number of users or messages?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> Our chat application is designed to accommodate a large number of users and messages. However, there may be certain limitations depending on your subscription plan or the server capacity. Please refer to our pricing and terms of service for more information.
      </div>
    </div>
  </div>
</div>

<div className="accordion col-6 mt-4 mb-3" id="accordionExample" style={{backgroundColor:'white'}}>
  <div className="accordion-item " >
    <h2 className="accordion-header" id="headingOne1">
      <button className="accordion-button collapsed aitem fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne">
      Is customer support available for the chat application?
      </button>
    </h2>
    <div id="collapseOne1" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> Yes, we offer customer support to assist you with any questions or issues you may encounter while using the chat application. You can reach out to our support team through email, live chat, or by submitting a support ticket.
      </div>
    </div>
  </div>
  <div className="accordion-item mt-4">
    <h2 className="accordion-header" id="headingTwo1">
      <button className="accordion-button collapsed aitem fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo1" aria-expanded="false" aria-controls="collapseTwo">
      Is there a limit to the file size in the chat application?
      </button>
    </h2>
    <div id="collapseTwo1" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> Our chat application imposes certain limits on the size and type of files that can be shared to ensure smooth performance and prevent misuse. Please refer to our documentation or terms of service for specific details regarding file upload limitations.
      </div>
    </div>
  </div>
  <div className="accordion-item mt-4">
    <h2 className="accordion-header" id="headingThree1">
      <button className="accordion-button collapsed aitem fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree1" aria-expanded="false" aria-controls="collapseThree">
      Is there a feature to search for past messages or conversations?
      </button>
    </h2>
    <div id="collapseThree1" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> Yes, our chat application includes a search feature that allows users to easily search for past messages or conversations. You can search by keywords, dates, or specific users to quickly locate relevant information within the chat history.
      </div>
    </div>
  </div>
</div>

</>
  )
}

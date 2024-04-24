import React from 'react'
import './LandingPage.css'
export default function AboutUs() {
  return (
    <>
    <div className="row" >

    <img src={'asset/img3.Default'} style={{height:'170px', width:'200px',marginLeft:'50px', position:'absolute', left:'320px'}}></img>
    <img src={'asset/img10.jpg'} style={{height:'140px', width:'170px',marginLeft:'50px', position:'absolute', left:'340px',top:'2630px'}}></img>
    <img src={'asset/img9.webp'} style={{height:'170px', width:'200px',marginLeft:'50px', position:'absolute', left:'20px',top:'2310px'}}></img>
    <div className='col-6' >
    <img src= {'asset/img8.webp'} alt="" className='img-fluid rounded' style={{height:'500px'}}/>
    </div>
    <div className='about col-6' id="aboutid">
        <h1>About Us:</h1>
        <p>
Welcome to ChatNest, your premier destination for seamless communication and collaboration. Founded with a vision to connect people across the globe, we strive to create an intuitive and secure platform that fosters meaningful interactions.
<br />
<b>Our Mission:</b>
<br />
At ChatNest, we are dedicated to revolutionizing the way individuals communicate by providing a feature-rich and user-friendly chat application. Our mission is to empower users to connect effortlessly, whether it's for personal connections, professional collaborations, or community engagement.
<br />
<details>
<summary>What We Offer:</summary>

Cutting-Edge Technology: We leverage the latest advancements in technology to ensure a smooth and reliable messaging experience. From real-time messaging to multimedia support, we've got you covered.
<br />
- Security and Privacy: Your security and privacy are our top priorities. We employ robust encryption techniques and stringent privacy controls to safeguard your conversations and personal information.
<br />
- User-Centric Design: Our platform is designed with the user in mind. With a clean and intuitive interface, customizable settings, and seamless navigation, ChatNest offers a delightful user experience.
<br />
- Versatility and Flexibility: Whether you're chatting one-on-one, participating in group conversations, or sharing multimedia content, ChatNest offers a versatile platform to suit your diverse communication needs.
<br />
</details>
<b>
Our Team:</b>
<br />
Behind ChatNest is a team of passionate individuals driven by a shared commitment to excellence. With expertise in software development, user experience design, and customer support, we work tirelessly to ensure that ChatNest remains at the forefront of innovation.
<br />
Get in Touch:
<br />
We value your feedback and are always eager to hear from our users. Whether you have suggestions for improvement, encounter technical issues, or simply want to say hello, don't hesitate to reach out to us. Your input helps us continue to enhance the ChatNest experience for everyone.
<br />
Thank you for choosing ChatNest as your preferred communication platform. Together, let's connect, collaborate, and create meaningful connections that transcend boundaries.
        </p>
    </div>
    </div>
    </>
  )
}

import React from 'react'

export default function Footer() {
  return (
 <>
 <footer className="footer">
  <div className="footer__addr">
    <h1 className="footer__logo">ChatNest</h1>
        
    <h2>Contact</h2>
    
    <address>
      5534 Somewhere In. The World 22193-10212<br/>
          
      <a className="footer__btn" href="mailto:example@gmail.com">Email Us</a>
    </address>
  </div>
  
  <ul className="footer__nav">
    <li className="nav__item">
      <h2 className="nav__title">Creaters</h2>

      <ul className="nav__ul">
        <li>
          <a href="#">Keya Shah</a>
        </li>

        <li>
          <a href="#">Janki Thakkar</a>
        </li>
            
        <li>
          <a href="#">Mayuri Raval</a>
        </li>
        <li>
          <a href="#">Karm Soni</a>
        </li>
        <li>
          <a href="#">Chattrasinh Parmar</a>
        </li>
      </ul>
    </li>
    
    <li className="nav__item nav__item--extra">
      <h2 className="nav__title">Technology</h2>
      
      <ul className="nav__ul nav__ul--extra">
        <li>
          <a href="#">React JS</a>
        </li>
        
        <li>
          <a href="#">JWT</a>
        </li>
        
        <li>
          <a href="#">Spring Boot</a>
        </li>
        
        <li>
          <a href="#">MySql</a>
        </li>
        
        <li>
          <a href="#">WebSocket</a>
        </li>
        
        <li>
          <a href="#">JPA</a>
        </li>
      </ul>
    </li>
    
    <li className="nav__item">
      <h2 className="nav__title">Legal</h2>
      
      <ul className="nav__ul">
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        
        <li>
          <a href="#">Terms of Use</a>
        </li>
        
        <li>
          <a href="#">Sitemap</a>
        </li>
      </ul>
    </li>
  </ul>
  
  <div className="legal">
    <p>&copy; 2019 Something. All rights reserved.</p>
    
    <div className="legal__links">
      <span>Made with <span className="heart">♥</span> remotely from India</span>
    </div>
  </div>
</footer>
 </>
    
  )
}

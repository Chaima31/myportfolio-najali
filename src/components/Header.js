import React from 'react';
import img from '../images/NajaliChaimae.jpg';
const Header = () => {
    return (
        <section style={{ backgroundColor: '#0d476e',height:"100%"}}>
            <header className="header">
                <div className='text-center'>
                <img src={img} alt="Ma photo de profil" className="rounded-circle mt-3 me-3" style={{ width: 210, height: 220 }}/>
                <h3 className='my-3' style={{ color: 'white' }}>Najali Chaimae</h3>
                <h5 className='my-3' style={{ color: 'white' }}>Etudiante en ingénieur informatique et réseau</h5>

                <div>
                <a href="https://github.com/Chaima31" >
                        <img src="https://img.icons8.com/windows/32/null/github.png" /></a>
                    <a href="https://www.linkedin.com/in/chaimaa-najali-09335a209/" className='px-2'>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABBUlEQVR4nGNgGLkg/MR/umAMMGpx+EgLar3SS/9XHHvzf/nRN/+1iy/Sz+Kbz77/h4Erj7/Rz+JXH3/BLQax6WZxaP+t/8/e//r//P2v/+ETbo+AxFW+9BEKRg4JGA7suQkWE04589+5+dp//+6b/2Uyz1FmMTrAJv7p25//ufMf/P/64y9c7O+///+n73r5nzXqJO0s/vvv//9///5jBZ0bn9HOYhD4+O3P/9Un3v6/8ODrf2Tw7eff/7wJp2lnsWPTNbA4e8yp/9eefMMqR3WLQb5C1jNn3ysU+TBs2ZBaiQtZz4zdL1HkoyaNWnxiNKgZBk/iYhioSoJh1OJwWgU1wwgBANfstZjNuKkMAAAAAElFTkSuQmCC"></img>
                    </a>
                    <a href="https://mail.google.com/mail/u/0/#inbox" className='px-2'>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABpElEQVR4nO2XMWvCQBTH/W4nKnRxcRA3DXEyoJNkEfwEoqujqw4u6mJcNJXWkERFWrRKKaStGVRoUaJ55S6N1NKKDdFQyIPHkQvvfsl7/3u5eDxOWtvrRR2EcpfwtteL9mA8wSMEl/AOQjkXDG6qeafFdRMMgkTTIFEUdAOB84OHySQsRRFA18G03XoNL7Ua3IZC5wFPCwUDqOuwlCRQymV4rddhrSigaxqMWNZ+8IhlCXAzn8MgkTgIvPb7QYxGjy6Oy7Lo9cj4J/D7bEbe6qfAU3yYSpGy4PFksERRJEhtNi0LyBL4PpslQbjG34OeSiWSwq+uVCrknkzTRAvY38ZjsgYezTn5M3uWwCrHgbZa7R3rYNXv2wOWzFRz3NF0CuEwAWOl25JqHotrOgV9uwU5Hv8V/FytksXvMhn7wKN02thOqgoDhjncTj4fPBaLRionE3Jt23biEYKHfB703c6ooywbDaTRIA0Em7ZYkLKcpWUOGAaWgmA8gNkyNxtQWy0QIpHLfSTEWAy6V1eW9zfvHn067ikTWRfP/xBX26lfGCfsAwmhW/6+7R88AAAAAElFTkSuQmCC" />
                    </a>
                </div>
                
                <div className='m-3' style={{ color: 'white',textAlign:"justify" }}>
                    En tant qu'étudiante en ingénieur informatique et réseau, 
                    je suis passionnée par les nouvelles technologies
                    et leur impact sur notre monde. 
                    Je suis également une personne qui aime travailler en équipe et 
                    qui possède un sens aigu de l'observation pour résoudre les problèmes.
                </div>
      
                

                </div>
                
                
            
             
                    

            </header>

  </section>
    );
}

export default Header;
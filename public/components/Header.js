import React from 'react';
import img from '../images/img.png';
const Header = () => {
    return (
        <section style={{ backgroundColor: '#B1D4E0' }}>
            <header className="header">
                <img src={img} alt="Ma photo de profil" className="rounded-circle mt-3 me-3" style={{ width: 210, height: 220 }} />
                <h1>Belamoud Mariam</h1>
                <h2>Etudiante en ingénieur informatique et réseau</h2>
             
                    <a href="https://github.com/MariamBl" >
                        <img src="https://img.icons8.com/windows/32/null/github.png" /></a>
                    <a href="https://www.linkedin.com/in/belamoud-mariam-4b456623b/" className='px-2'>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABBUlEQVR4nGNgGLkg/MR/umAMMGpx+EgLar3SS/9XHHvzf/nRN/+1iy/Sz+Kbz77/h4Erj7/Rz+JXH3/BLQax6WZxaP+t/8/e//r//P2v/+ETbo+AxFW+9BEKRg4JGA7suQkWE04589+5+dp//+6b/2Uyz1FmMTrAJv7p25//ufMf/P/64y9c7O+///+n73r5nzXqJO0s/vvv//9///5jBZ0bn9HOYhD4+O3P/9Un3v6/8ODrf2Tw7eff/7wJp2lnsWPTNbA4e8yp/9eefMMqR3WLQb5C1jNn3ysU+TBs2ZBaiQtZz4zdL1HkoyaNWnxiNKgZBk/iYhioSoJh1OJwWgU1wwgBANfstZjNuKkMAAAAAElFTkSuQmCC"></img>
                    </a>
                    <a href="https://mail.google.com/mail/u/1/#inbox?compose=new" className='px-2'>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABpElEQVR4nO2XMWvCQBTH/W4nKnRxcRA3DXEyoJNkEfwEoqujqw4u6mJcNJXWkERFWrRKKaStGVRoUaJ55S6N1NKKDdFQyIPHkQvvfsl7/3u5eDxOWtvrRR2EcpfwtteL9mA8wSMEl/AOQjkXDG6qeafFdRMMgkTTIFEUdAOB84OHySQsRRFA18G03XoNL7Ua3IZC5wFPCwUDqOuwlCRQymV4rddhrSigaxqMWNZ+8IhlCXAzn8MgkTgIvPb7QYxGjy6Oy7Lo9cj4J/D7bEbe6qfAU3yYSpGy4PFksERRJEhtNi0LyBL4PpslQbjG34OeSiWSwq+uVCrknkzTRAvY38ZjsgYezTn5M3uWwCrHgbZa7R3rYNXv2wOWzFRz3NF0CuEwAWOl25JqHotrOgV9uwU5Hv8V/FytksXvMhn7wKN02thOqgoDhjncTj4fPBaLRionE3Jt23biEYKHfB703c6ooywbDaTRIA0Em7ZYkLKcpWUOGAaWgmA8gNkyNxtQWy0QIpHLfSTEWAy6V1eW9zfvHn067ikTWRfP/xBX26lfGCfsAwmhW/6+7R88AAAAAElFTkSuQmCC" />
                    </a>
                
            </header>

<br/>
        </section>
    );
}

export default Header;
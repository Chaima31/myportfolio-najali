import React from 'react';
import './Formations.css';
import ofppt from '../images/ofppt.png';
import emsi from '../images/emsi.png';
import manar from '../images/Ennahda.png';
import fjes from '../images/fsjes.png';
import Card from 'react-bootstrap/Card';
import {FaHotel} from 'react-icons/fa'

const formation = [
  { 
   title: "Ingénierie Informatique et Réseaux",
   local: "Ecole Marocaine des Sciences de l'Ingénieur (EMSI)",
   date:"2021 - en cours",
   img:emsi
  
  },
  { 
    title: "Diplôme de technicien spécialisé - Développement Informatique",
    local: "Ecole Marocaine des Sciences de l'Ingénieur (EMSI)",
    date:"2019 - 2021",
    img:ofppt
  },
  { 
    title: "Licence Droit français",
    local: "Faculté des sciences juridiques et social" ,
    date:"2019",
    img:fjes
},
  { 
    title: "BAC Sciences de la vier et la terre",
    local: "Lycée Ennahda" ,
    date:"2016-2017",
    img:manar
},
];




function Formations() {
  return (
    <section className="section">

      <div className='title-content '><FaHotel style={{paddingBottom:"8px"}}/> Formations</div>

      <div className='mx-auto'>


      {formation.map(item => (
       
       <div className='d-inline-block my-3' >
               <div className='d-flex align-items-center mx-5'>
                   <div>
                     <img src={item.img} className='img-formation'/>
                   </div>
                   <div className='ms-3'>
                     <h4>{item.title}</h4>
                     <div>{item.local}</div>
                     <div>{item.date}</div>
                   </div>
               </div>
       </div>
             
     ))}

      </div>





      {/* 
        </Card.Body>
      </Card>
      <Card className="my-4 mx-auto shadow" style={{ width: '40rem', textAlign: 'left' }}>
        <Card.Img className="mx-auto mt-2 " src={manar} style={{ width: 70, height: 70 }} />
        <Card.Body>
          <Card.Title>BAC Sciences de la vier et la terre</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Lycée Ennahda</Card.Subtitle>
          <Card.Text>2016-2017 </Card.Text>
          

        </Card.Body>
      </Card> */}


    </section>
  );
}

export default Formations;
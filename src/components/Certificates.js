import React from "react";
import img1 from '../images/certif/c_page-0001.jpg';
import img4 from '../images/certif/A_page-0001.jpg';
import img3 from '../images/certif/b_page-0001.jpg';
import img2 from '../images/certif/c_page-0001.jpg';
import {FaUniversity} from 'react-icons/fa'


const CertificatesData = [
    { 
        title: "Python Functions, File, and Dictionaries",
        local: "Coursera",
        date:"Date de délivrance : May. 2022",
        identifiant:"Identifiant: 2G9464CEJRQU",
        img:img1
    
    },
    { 
        title: "DevOps, Cloud, and Agile Foundations",
        local: "Coursera",
        date:"Date de délivrance : Mar. 2023",
        identifiant:"Identifiant: X57FFQCARQUG",
        img:img2
    },
    { 
        title: "Full-Stack Web Development with React",
        local: "Coursera",
        date:"Date de délivrance : Dec. 2022",
        identifiant:"Identifiant: PFUA3225PVXL",
        img:img3
  },
    { 
        title: "Data Collection and Processing with Python",
        local: "Coursera",
        date:"Date de délivrance : May. 2022",
        identifiant:"Identifiant: A6UULM5XK7PD",
        img:img4
  },
  ];

const Certificates = () => {
    return (
        <>

<div className='title-content'> <FaUniversity style={{paddingBottom:"8px"}}/> Certificates</div>
            <div className="container">
                <div className="row my-3">

                {CertificatesData.map(item => (

<div className="col-md-4 mt-4">
<div class="card" >
    <img src={item.img} alt="Ma photo de profil" />
    <div class="card-body">
        <h5 class="card-title">{item.title} </h5>
        <p class="card-text">{item.local}</p>
        <h6 class="card-text">{item.date} </h6>
        <h6 class="card-text">{item.identifiant}</h6>

    </div>
</div>
</div>

                ))}


                </div>
            </div>
        </>
    )
}
export default Certificates;

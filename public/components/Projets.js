import React from 'react';
import Card from 'react-bootstrap/Card';
const Projets = () => {
    return (

        <section className="section">
            <Card className="shadow-lg p-3 mb-5 bg-white rounded my-5 mx-auto py-4 px-4 " style={{ width: '70rem', textAlign: 'left' }}>
                <Card.Body>
                    <h3 class="card-title">Projet fin de formation</h3>

                    <br />
                    <ul>
                        <li>
                            <h5 class="card-text">Application web d'hebergement touristique </h5>
                        </li>
                        <br />
                        <p className='text-secondary'><strong>Technologies : </strong> Html, Css, Php, Mysql</p>
                    </ul>
                </Card.Body>
            </Card>


            <Card className=" shadow-lg p-3 mb-5 bg-white rounded my-5 mx-auto py-4 px-4 " style={{ width: '70rem', textAlign: 'left' }}>
                <Card.Body>
                    <h3 class="card-title">Projet Academiques</h3>

                    <br />
                    <ul>
                        <li>
                            <h5 class="card-text"> Application web de réservation des terrains" </h5>
                        </li>
                        <br />
                        <p className='text-secondary'><strong>Technologies : </strong> Django, React js, Mysql, github</p>
                    </ul>

                    <ul>
                        <li>
                            <h5 class="card-text"> Application de gestion bibliotheque </h5>
                        </li>
                        <br />
                        <p className='text-secondary'><strong>Technologies : </strong> python , MySql , tkinter</p>
                    </ul>


                    <ul>
                        <li>
                            <h5 class="card-text"> Application mobibe de gestion cabinet dentaire  </h5>
                        </li>
                        <br />
                        <p className='text-secondary'><strong>Technologies : </strong> Java, Mysql</p>
                    </ul>

                    <ul>
                        <li>
                            <h5 class="card-text"> Application web des recettes de cuisine </h5>
                        </li>
                        <br />
                        <p className='text-secondary'><strong>Technologies : </strong> Django, Mysql, github</p>
                    </ul>
                </Card.Body>
            </Card>





        </section>







        // <section className="section ">

        //     <div className="container  ">
        //         <div className="row my-5  "  >
        //             <div className="col-md-4">
        //                 <div class="card" >

        //                     <div class="card-body" style={{ width: '70rem', textAlign: 'left' }}>
        //                         <h5 class="card-title">Projets Academiques </h5>
        //                         <p class="card-text">NexApp - Casablanca</p>
        //                         <h6 class="card-text">Date de délivrance : Mar. 2023 </h6>
        //                         <h6 class="card-text">Identifiant: X57FFQCARQUG </h6>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="col-md-4">

        //                 <div class="card"   >

        //                     <div class="card-body" style={{ width: '70rem', textAlign: 'left' }}>
        //                         <h3 class="card-title">Projet fin de formation</h3>
        //                         <p class="card-text">EMSI - MARRAKECH</p>
        //                         <p >EMSI - MARRAKECH</p>
        //                         <h5 class="card-text">Technologies:</h5>
        //                         <ul>
        //                             <li>
        //                                 jh
        //                             </li>
        //                         </ul>
        //                         <p></p>
        //                         <h6 class="card-text">Identifiant: 2G9464CEJRQU </h6>
        //                     </div>
        //                 </div>

        //             </div>


        //         </div>
        //     </div>
        // </section>
    );
}

export default Projets;

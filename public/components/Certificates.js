import React from "react";
import img1 from '../images/certif/1.png';
import img4 from '../images/certif/2.png';
import img3 from '../images/certif/3.png';
import img2 from '../images/certif/4.png';
const Certificates = () => {
    return (
        <>
            <div className="container">
                <div className="row my-3">
                    <div className="col-md-4 mt-4">
                        <div class="card"   >
                            <img src={img1} alt="Ma photo de profil" />
                            <div class="card-body">
                                <h5 class="card-title">Python Functions, File, and Dictionaries</h5>
                                <p class="card-text">Coursera</p>
                                <h6 class="card-text">Date de délivrance : May. 2022 </h6>
                                <h6 class="card-text">Identifiant: 2G9464CEJRQU </h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mt-4">
                        <div class="card" >
                            <img src={img2} alt="Ma photo de profil" />
                            <div class="card-body">
                                <h5 class="card-title">DevOps, Cloud, and Agile Foundations </h5>
                                <p class="card-text">Coursera</p>
                                <h6 class="card-text">Date de délivrance : Mar. 2023 </h6>
                                <h6 class="card-text">Identifiant: X57FFQCARQUG </h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mt-4">
                        <div class="card" >
                            <img src={img3} alt="Ma photo de profil" />
                            <div class="card-body">
                                <h5 class="card-title">Full-Stack Web Development with React </h5>
                                <p class="card-text">Coursera</p>
                                <h6 class="card-text">Date de délivrance : Dec. 2022 </h6>
                                <h6 class="card-text">Identifiant: PFUA3225PVXL </h6>

                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mt-4">
                        <div class="card" >
                            <img src={img4} alt="Ma photo de profil" />
                            <div class="card-body">
                                <h5 class="card-title">Data Collection and Processing with Python</h5>
                                <p class="card-text">Coursera</p>
                                <h6 class="card-text">Date de délivrance : May. 2022 </h6>
                                <h6 class="card-text">Identifiant: A6UULM5XK7PD </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Certificates;

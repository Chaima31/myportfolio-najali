import React from 'react';

import Card from 'react-bootstrap/Card';
import {FaClipboardCheck} from 'react-icons/fa'


function Formations() {
    return (
        <section className="section">

<div className='title-content '><FaClipboardCheck style={{paddingBottom:"8px"}}/> Experiences</div>

            <Card className="shadow-lg p-3 mb-5 bg-white rounded my-5 mx-auto py-4 px-4 " style={{textAlign: 'left' }}>
                <Card.Body>
                    <Card.Title>Stage de fin d'année 2022</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Stagiaire</Card.Subtitle>
                    <br />
                    <Card.Text><strong>Sujet : </strong> Site web d'hebergement touristique
                    </Card.Text>
                    <Card.Text><strong>Technologies : </strong> Html, Css, Js, Php, Mysql,Java
                    </Card.Text>
                    <Card.Text><strong>Date : </strong> juillet 2022 - septembre 2022
                    </Card.Text>

                </Card.Body>
            </Card>


        </section>
    );
}

export default Formations;
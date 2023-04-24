import React from 'react';

import Card from 'react-bootstrap/Card';


function Formations() {
    return (
        <section className="section">
            <Card className="my-5 mx-auto py-4 px-4 " style={{ width: '70rem', textAlign: 'left' }}>
                <Card.Body>
                    <Card.Title>Stage de fin d'année 2022</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Stagiaire</Card.Subtitle>
                    <br />
                    <Card.Text><strong>Sujet : </strong> Site web d'hebergement touristique
                    </Card.Text>
                    <Card.Text><strong>Technologies : </strong> Html, Css, Js, Php, Mysql
                    </Card.Text>
                    <Card.Text><strong>Date : </strong> juillet 2022 - septembre 2022
                    </Card.Text>

                </Card.Body>
            </Card>


        </section>
    );
}

export default Formations;
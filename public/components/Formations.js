import React from 'react';


import ofppt from '../images/ofppt.png';
import emsi from '../images/emsi.png';
import manar from '../images/manar.png';
import Card from 'react-bootstrap/Card';

function Formations() {
  return (
    <section className="section">
      <Card className="my-4 mx-auto shadow" style={{ width: '40rem', textAlign: 'left' }}>
        <Card.Img className="mx-auto mt-2 " src={emsi} style={{ width: 70, height: 70 }} />
        <Card.Body>
          <Card.Title>Ingénierie Informatique et Réseaux</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Ecole Marocaine des Sciences de l'Ingénieur (EMSI)</Card.Subtitle>
          <Card.Text>2021 - en cours
          </Card.Text>

        </Card.Body>
      </Card>

      <Card className="my-4 mx-auto shadow" style={{ width: '40rem', textAlign: 'left' }}>
        <Card.Img className="mx-auto mt-2 " src={ofppt} style={{ width: 70, height: 70 }} />
        <Card.Body>
          <Card.Title>Diplôme de technicien spécialisé - Développement Informatique</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">ISTA NTIC, Sidi Youssef Ben Ali</Card.Subtitle>
          <Card.Text>2019 - 2021
          </Card.Text>

        </Card.Body>
      </Card>
      <Card className="my-4 mx-auto shadow" style={{ width: '40rem', textAlign: 'left' }}>
        <Card.Img className="mx-auto mt-2 " src={manar} style={{ width: 70, height: 70 }} />
        <Card.Body>
          <Card.Title>BAC Sciences Physiques et Chimie</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Lycée Al Manar</Card.Subtitle>
          <Card.Text>2019
          </Card.Text>

        </Card.Body>
      </Card>
    </section>
  );
}

export default Formations;
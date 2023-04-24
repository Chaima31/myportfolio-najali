import React from 'react';
import Card from 'react-bootstrap/Card';
const Accueil = () => {

    return (
        <section className="section">
            <Card className="my-5 px-4 py-3 mx-auto shadow-sm p-3 mb-5 bg-white rounded" style={{ width: '80rem', textAlign: 'left' }}>

                <Card.Body>
                    <h3 > Mariam Belamoud</h3>
                    <br/>
                    <Card.Text>En tant qu'étudiante en ingénieur informatique et réseau, je suis passionnée par les nouvelles technologies
                        et leur impact sur notre monde. Je suis également une personne qui aime travailler en équipe et qui possède un sens aigu de l'observation pour résoudre les problèmes.
                    </Card.Text>
                    <br/>
                    
                </Card.Body>
            </Card>
           
        </section>
    );
}

export default Accueil;

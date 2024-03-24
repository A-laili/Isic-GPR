import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Parallax = () => {
  return (
    <div className="parallax mb-5">
      <Container className="d-flex align-items-center justify-content-center px-5 py-5">
        <div className="animated-texts bounceIn text-center">
          <h1>
            Explorez les différents services de{" "}
            <span className="hotel-color">ISIC GPR</span>
          </h1>
          <h3>
            Exclusivement avec ISIC GPR, Gérez vos emplois, absences,
            planifiez vos réunions et réservez les salles à l'Ensaj, selon vos
            besoins!
          </h3>
        </div>
      </Container>
      {/* News bar with image */}
      <Container className="py-4">
        <Row>
          <Col>
            <h2 className="animated-texts bounceIn text-center">Actualités</h2>
            <ul className="list-unstyled d-flex justify-content-between">
              <li style={{ textAlign: "center", margin: "0 10px" }}>
                <img
                  src="src/assets/images/12.png"
                  alt="12"
                  style={{ maxWidth: "300px", maxHeight: "200px" }}
                />
                <p style={{ textAlign: "justify" }}>
                  Publié le: 10 mars 2024 - L’ÉCOLE NATIONALE DES SCIENCES
                  APPLIQUÉES D’EL JADIDA A ORGANISÉ UNE JOURNÉE D’INTÉGRATION
                  SPÉCIALEMENT DÉDIÉE AUX NOUVEAUX DOCTORANTS, LE 09 MARS 2024
                  <a
                    href="https://www.ensaj.ucd.ac.ma/lecole-nationale-des-sciences-appliquees-del-jadida-a-organise-une-journee-dintegration-specialement-dediee-aux-nouveaux-doctorants-le-09-mars-2024/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir plus
                  </a>
                </p>
              </li>
              <li style={{ textAlign: "center", margin: "0 10px" }}>
                <img
                  src="src/assets/images/8.jpg"
                  alt="8"
                  style={{ maxWidth: "300px", maxHeight: "200px" }}
                />
                <p style={{ textAlign: "justify" }}>
                Publié le: 6 mars 2024 - JOURNÉE PORTES OUVERTES
                L’École Nationale des Sciences Appliquées d’EL Jadida (ENSAJ) et l’École Supérieure d’Éducation et Formation (ESEF) ont organisé conjointement une journée des portes ouvertes le samedi 2 mars 2024.
                <a
                    href="https://www.ensaj.ucd.ac.ma/journee-portes-ouvertes/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir plus
                  </a>
                </p>
              </li>
              <li style={{ textAlign: "center", margin: "0 10px" }}>
                <img
                  src="src/assets/images/10.jpg"
                  alt="10"
                  style={{ maxWidth: "300px", maxHeight: "200px" }}
                />
                <p style={{ textAlign: "justify" }}>
                Publié le: 27 février 2024 - L’ECOLE NATIONALE DES SCIENCES APPLIQUÉES D’EL JADIDA ORGANISERA LE 25 AVRIL 2024 LA 8ÈME ÉDITION DU FORUM ENSAJ ENTREPRISES
                <a
                    href="https://www.ensaj.ucd.ac.ma/lecole-nationale-des-sciences-appliquees-del-jadida-organisera-le-25-avril-2024-la-8eme-edition-du-forum-ensaj-entreprises/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir plus
                  </a>
                </p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Parallax;

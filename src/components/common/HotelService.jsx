import React from "react";
import { Carousel, Card, Row, Col } from "react-bootstrap";
import Header from "./Header";
import {
  FaCapsules,
  FaCreativeCommonsSampling,
  FaDev,
  FaEnvelope,
  FaEnvelopeOpen,
  FaEnvelopeOpenText,
  FaMeetup,
  FaPhone, 
  FaPhoneAlt,
  FaPhoneSlash,
  FaPhoneVolume,
  FaVoicemail
} from "react-icons/fa";

const HotelService = () => {
  const services = [
    {
      icon: <FaPhoneAlt className="text-primary" />,
      title: "Directeur de l’ENSAJ",
      description: "PR. ABDELOWAHED HAJJAJI.",
      icon1: <FaPhoneAlt className="text-primary" />,
      phoneNumber: "05 23 34 48 22",
      icon2: <FaEnvelope className="text-primary" />,
      email: "hajjaji.a@ucd.ac.ma"

    },
    {
      icon: <FaEnvelopeOpenText className="text-danger" />,
      title: "Chef Du Projet ISIC GPR",
      description: "Pr. Abdelhak Aqqal",
      icon1: <FaPhoneAlt className="text-primary" />,
      phoneNumber: "05 23 34 48 22",
      icon2: <FaEnvelope className="text-primary" />,
      email: "aqqal.ensaj@gmail.com	"
    },
    {
      icon: <FaPhoneVolume className="text-danger" />,
      title: "Directeur adjoint chargé des affaires pédagogiques",
      description: "PR. MAHMOUD EL MOUDEN",
      icon1: <FaPhoneAlt className="text-primary" />,
      phoneNumber: "05 23 34 48 22",
      icon2: <FaEnvelope className="text-primary" />,
      email: " elmouden.m@ucd.ac.ma"
    },
    {
      icon: <FaPhoneAlt className="text-danger" />,
      title: "Directeur adjoint chargé de la recherche scientifique et de la coopération",
      description: "PR. AZIZ DAHBI",
      icon1: <FaPhoneAlt className="text-primary" />,
      phoneNumber: "05 23 39 56 79 ",
      icon2: <FaEnvelope className="text-primary" />,
      email: " dahbi.a@ucd.ac.ma"
    },
    {
      icon: <FaPhoneVolume className="text-danger" />,
      title: "Secrétaire Général ",
      description: "MR MOHAMMED ABDELMOUMEN",
      icon1: <FaPhoneAlt className="text-primary" />,
      phoneNumber: "05 23 34 48 22",
      icon2: <FaEnvelope className="text-primary" />,
      email: " abdelmoumen99@yahoo.fr "
    },
    {
      icon: <FaPhoneAlt className="text-danger" />,
      title: "Chef Du Département TRI",
      description: "PR. Mohammed Fertat",
      icon1: <FaPhoneAlt className="text-primary" />,
      phoneNumber: "05 23 39 56 79 ",
      icon2: <FaEnvelope className="text-primary" />,
      email: "ensaj.fertat@gmail.com"
    }
  ];

   const servicesRows = [];
  for (let i = 0; i < services.length; i += 3) {
    servicesRows.push(
      <Carousel.Item key={i}>
        <Row className="justify-content-center">
          {services.slice(i, i + 3).map((service, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="service-card text-center hotel-color-bg">
                <div className="service-icon">{service.icon}</div>
                <Card.Body>
                  <Card.Title className="hotel-color">
                    {service.title}
                  </Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                  <Card.Text>{service.icon1}{service.phoneNumber}</Card.Text>
                  <Card.Text>{service.icon2}{service.email}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Carousel.Item>
    );
  }

  return (
    <>
      <div className="mb-5 text-center">
    <h3 className="font-weight-bold"> Contact </h3>


        <Carousel
          nextLabel={<span className="custom-carousel-arrow">›</span>}
          prevLabel={<span className="custom-carousel-arrow">‹</span>}
        >
          {servicesRows}
        </Carousel>
      </div>
      <hr />
    </>
  );
};

export default HotelService;

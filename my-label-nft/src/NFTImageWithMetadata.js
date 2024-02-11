
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const AllServices = () => {
    const serviceData = [
        {
          image: "https://ico2.co/metadataVillamonica/Genesis.png",
          title: "i-CO₂ Carbon Capture",
          json: {
            serviceId: 1,
            serviceName: "i-CO₂ Carbon Capture",
            category: "Carbon Capture",
            price: 100,
            rating: 4.5,
            reviews: [
              {
                id: 1,
                user: "John Doe",
                comment: "Great service! Highly recommended."
              },
              {
                id: 2,
                user: "Jane Smith",
                comment: "Excellent work. Will definitely use again."
              }
            ]
          }
        }
      ];

  const ServiceCard = ({ data }) => {
    return (
      <div style={styles.cardContainer}>
        <img src={data.image} alt={data.title} style={styles.cardImage} />
        <div style={styles.cardContent}>
        </div>
        <div style={styles.jsonContainer}>
            <SyntaxHighlighter language="json" style={atomDark}>
              {JSON.stringify(data.json, null, 2)}
            </SyntaxHighlighter>
          </div>
      </div>
    );
  };

  const styles = {
    servicesContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    cardContainer: {
      width: 'auto',
      display: 'flex',
      justifyContent: 'aling',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.3)',
      backgroundColor: '#fff',
    },
    cardImage: {
      width: '100%',
      height: '300px',
      padding: '10%'
    },
    cardContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    cardTitle: {
      margin: '12px 0',
      color: '#333',
      fontSize: '1em',
    },
    jsonContainer: {
      padding: '10px',
      backgroundColor: '#01020d',
      fontSize: '0.5em',
      width: '100%',

    },
  };

  return (
    <div style={styles.servicesContainer}>
      <div style={styles.cardsContainer}>
        {serviceData.map((service, index) => (
          <ServiceCard key={index} data={service} />
        ))}
      </div>
    </div>
  );
};

export default AllServices;
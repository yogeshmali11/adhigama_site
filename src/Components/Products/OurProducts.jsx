import React, { useEffect } from 'react'
import { Container, Heading } from '../../styledComponents';
import { motion } from 'framer-motion';
import styles from '../Products/products.module.css';
import { useNavigate } from 'react-router-dom';
import image1 from '../../assets/erp-system.jpg';
import image2 from '../../assets/billing-software.jpg';
import image3 from '../../assets/school-erp-system.jpg';
import image4 from '../../assets/educational-software.jpg';

function OurProducts() {

  const navigate = useNavigate();

  // used for making the site SEO friendly..
  useEffect(() => {
    document.title = "Our Products | Adhigama Tech";

    const description = document.querySelector("meta[name='description']");
    if (description) {
      description.setAttribute("content", "Explore our top products like ERP systems, CRM, billing software, and educational tools.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Explore our top products like ERP systems, CRM, billing software, and educational tools.";
      document.head.appendChild(meta);
    }
  }, []);

  const handleContactClick = (productName) => {
    navigate('/contact', { state: { subject: productName } });
  };

  const products = [
    {
      id: 1,
      name: `ERP System and CRM's`,
      image: image1,
    },
    {
      id: 2,
      name: 'Billing Software',
      image: image2,
    },
    {
      id: 3,
      name: 'School ERP System',
      image: image3,
    },
    {
      id: 4,
      name: 'Educational Software',
      image: image4,
    },
  ];
  return (
    <>
      <Container className={styles.bgContainer}>
        <Heading>
          <h3>Our Products</h3>
        </Heading>
        <div className={styles.main}>
          {
            products.map((product) => (

              <motion.div
                key={product.id}
                className={styles.card}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className={styles.cardImg}>
                  <img src={product.image} />
                </div>
                <div className={styles.cardDesc}>
                  <h3>{product.name}</h3>
                  <button onClick={() => handleContactClick(product.name)}>Contact Us</button>
                </div>
              </motion.div>
            ))
          }
        </div>
      </Container>
    </>
  )
}

export default OurProducts;

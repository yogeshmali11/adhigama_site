import React from 'react'
import { Container, Heading } from '../../styledComponents';
import styles from '../Products/products.module.css';

function OurProducts() {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for Product 1',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Nfzoocjdj0KKGDK1B-wX3S7ufpJkJHaxTg&s',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for Product 2',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Nfzoocjdj0KKGDK1B-wX3S7ufpJkJHaxTg&s',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description for Product 3',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Nfzoocjdj0KKGDK1B-wX3S7ufpJkJHaxTg&s',
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Description for Product 4',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Nfzoocjdj0KKGDK1B-wX3S7ufpJkJHaxTg&s',
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
              <div key={product.id} className={styles.card}>
                <div className={styles.cardImg}>
                  <img src={product.image} />
                </div>
                <div className={styles.cardDesc}>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </Container>
    </>
  )
}

export default OurProducts;

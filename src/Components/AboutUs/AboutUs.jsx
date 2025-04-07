import React from 'react'
import { Container, Heading } from '../../styledComponents';
import styles from '../AboutUs/about.module.css'

function AboutUs() {
  return (
    <>
      <Container className={styles.bgContainer}> 
        <Heading>
          <h3>About Us</h3>
        </Heading>
        <div className={styles.main}>
          <div className={styles.aboutImg}>
              <img src='https://www.shutterstock.com/image-photo/why-choose-us-businessman-holding-600nw-1431803342.jpg' />
          </div>
          <div className={styles.aboutDesc}>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia perspiciatis tempore facilis voluptatum autem placeat, eos error? Incidunt eveniet aliquid officiis, ipsam explicabo sed. In ducimus magnam quisquam quos quae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur omnis sunt doloribus? Quas nostrum quaerat nesciunt magni dolores quidem libero aspernatur, eius ab odit, maiores quibusdam assumenda fuga incidunt temporibus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime dignissimos eum labore eius sequi, dolores veritatis dolor provident? Libero delectus sint iure molestiae, qui asperiores hic amet animi laboriosam suscipit!</p>
          </div>
        </div>
      </Container>
    </>
  )
}

export default AboutUs;

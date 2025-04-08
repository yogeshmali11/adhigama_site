import React from 'react'
import { Container, Heading } from '../../styledComponents';
import { motion } from 'framer-motion';
import styles from '../AboutUs/about.module.css'

function AboutUs() {
  return (
    <>
      <Container className={styles.bgContainer}> 
        <Heading>
          <h3>About Us</h3>
        </Heading>

        <motion.div 
          className={styles.main}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }} // animate only once
        >
          <motion.div 
            className={styles.aboutImg}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
              <img src='https://www.shutterstock.com/image-photo/why-choose-us-businessman-holding-600nw-1431803342.jpg' />
          </motion.div>

          <motion.div 
            className={styles.aboutDesc}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>Adhigama Tech is a cutting-edge technology startup founded by Aditya Rajesh Sharma, specializing in custom ERP solutions, CRM development, and innovative digital products. As a leading tech company in India, Adhigama Tech empowers businesses with scalable software solutions, smart automation tools, and creative platforms like regional OTT apps. With a mission to streamline operations and drive digital transformation, the company combines technical expertise with strategic thinking to solve real-world problems and deliver impactful results across industries.</p>
          </motion.div>
        </motion.div>

        {/* <div className={styles.main}>
          <div className={styles.aboutImg}>
              <img src='https://www.shutterstock.com/image-photo/why-choose-us-businessman-holding-600nw-1431803342.jpg' />
          </div>
          <div className={styles.aboutDesc}>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia perspiciatis tempore facilis voluptatum autem placeat, eos error? Incidunt eveniet aliquid officiis, ipsam explicabo sed. In ducimus magnam quisquam quos quae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur omnis sunt doloribus? Quas nostrum quaerat nesciunt magni dolores quidem libero aspernatur, eius ab odit, maiores quibusdam assumenda fuga incidunt temporibus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime dignissimos eum labore eius sequi, dolores veritatis dolor provident? Libero delectus sint iure molestiae, qui asperiores hic amet animi laboriosam suscipit!</p>
          </div>
        </div> */}
      </Container>
    </>
  )
}

export default AboutUs;

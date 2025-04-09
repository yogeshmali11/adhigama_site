import styled from "styled-components";

export const Container = styled.div`
    padding: 40px;
    // height: 100vh;
    scroll-snap-align: start; 

    /* 🔹 Mobile (Max width: 600px) */
    @media (max-width: 600px) {
        padding:20px 10px;
        width:auto;
    }
`;

export const Heading = styled.div`
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    width:25%;
    margin: 0 auto;
    margin-bottom: 30px;
    padding: 8px;
    border-radius: 8px;

    /* 🔹 Mobile (Max width: 600px) */
    @media (max-width: 600px) {
        width:90%; 
    }
`;
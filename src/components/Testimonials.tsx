"use client"
import React from "react";
import styled, { keyframes, css } from "styled-components";
import { row1, row2 } from "./Data"; 
const Moving = () => {
    
    
  return (
    
    <AppContainer>
    <Wrapper>
      <Text>Our Partners are Associated with
      </Text>
      {/* <Note>Revolutionize your Business with Our Advanced Technology Solutions</Note> */}
      <Marquee>
        <MarqueeGroup>
  {row1.map((el, index) => (
    <ImageGroup key={index}>
      <Image src={el} alt={`Image ${index}`} />
    </ImageGroup>
  ))}
</MarqueeGroup>

<MarqueeGroup>
  {row1.map((el, index) => (
    <ImageGroup key={index}>
      <Image src={el} alt={`Image ${index}`} />
    </ImageGroup>
  ))}
</MarqueeGroup>

      </Marquee>
      <Marquee>
      <MarqueeGroup2>
  {row2.map((le, index) => (
    <ImageGroup key={index}>
      <Image src={le} alt={`Image ${index}`} />
    </ImageGroup>
  ))}
</MarqueeGroup2>
<MarqueeGroup2>
  {row2.map((le, index) => (
    <ImageGroup key={index}>
      <Image src={le} alt={`Image ${index}`} />
    </ImageGroup>
  ))}
</MarqueeGroup2>
      </Marquee>
    </Wrapper>
  </AppContainer>
);
}

export default Moving


const AppContainer = styled.div`
  width: 100vw;
  height: 70vh;
  color: #000000;
 overflow:hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

// const Text = styled.div`
//   font-size: 60px;
//   font-weight: 600;
//   margin-bottom: 10px;
//   color: #02203c;
//   text-4xl md:text-5xl font-bold mb-6 text-foreground
  
// `;
const Text = styled.div`
  font-size: clamp(1.5rem, 4vw, 3.75rem); /* Responsive font size */
  font-weight: 600;
  margin-bottom: 10px;
  color: #02203c;
  text-4xl md:text-5xl font-bold mb-6 text-foreground

  @media (max-width: 640px) {
    font-size: 1.5rem; /* Smaller size for small screens */
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    font-size: 2.5rem; /* Medium size for tablets */
  }
  @media (min-width: 1025px) {
    font-size: 3.75rem; /* Larger size for desktops */
  }
`;

// const Note = styled.div`
//   font-size: 18px;
//   font-weight: 200;
//   margin-bottom: 40px;
//   color: dark blue;
//   margin-left:40px;
// `;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 150%;
  height: 150%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
import React from "react";

// styled-components
import styled from "styled-components";

// assets
import CardImage from "./assets/images/localX.jpg";

// components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import XCard from "./components/XCard";

// style
const StyledCol = styled(Col)`
  padding: 2rem;
`;

// data
const cards = [
  {
    image: CardImage,
    title: "عنوان",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    to: "/"
  },
  {
    image: CardImage,
    title: "عنوان",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    to: "/"
  },
  {
    image: CardImage,
    title: "عنوان",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    to: "/"
  },
  {
    image: CardImage,
    title: "عنوان",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    to: "/"
  },
  {
    image: CardImage,
    title: "عنوان",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    to: "/"
  },
  {
    image: CardImage,
    title: "عنوان",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    to: "/"
  }
];

function App() {
  return (
    <div className="App">
      <Container>
        <div className="w-100 text-center">
          <h1 className="p-4">Card Hover Animation</h1>

          <a
            className="p-4"
            href="https://git.ir/packtpub-html-css-and-javascript-for-beginners-a-web-design-course"
          >
            https://git.ir/packtpub-html-css-and-javascript-for-beginners-a-web-design-course
          </a>
        </div>

        <Row>
          {cards.map((card, index) => (
            <StyledCol key={index} md={4}>
              <XCard
                image={card.image}
                title={card.title}
                content={card.content}
                to={card.to}
              />
            </StyledCol>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;

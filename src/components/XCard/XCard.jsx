import React from "react";
import PropTypes from "prop-types";

// react-spring
import { useSpring, animated } from "react-spring";

// styled-components
import styled, { keyframes } from "styled-components";

// components
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// keyframes
const animatedGradient = keyframes`
  0% {
    background-position: 0% 50%;
    }
  50% {
  background-position: 100% 50%;
  }
  100% {
  background-position: 0% 50%;
  }
`;

// styles
const StyledRoot = styled(animated.div)`
  background: grey;
  border-radius: 5px;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;
`;

const StyledCard = styled(Card)`
  width: 100%;
  height: 100%;
  text-align: right;
  position: relative;
  overflow: hidden;
  border: none;
`;

const StyledText = styled(Card.Text)`
  margin-bottom: 4rem;
  direction: rtl;
`;

const StyledButton = styled(Button)`
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  bottom: 0;
  left: 0;
  position: absolute;
  background-size: 400% 400%;
  animation: ${animatedGradient} 15s ease infinite;
  border-radius: 0;
  border: none;
  transition: all 0.3s ease;
  &:hover {
    animation: ${animatedGradient} 3s ease infinite;
  }
`;

const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const calc = (x, y, center) => {
  return [(y - center.y) / 40, -(x - center.x) / 40, 1.075];
};

const XCard = ({ image, title, content, to }) => {
  const [center, setCenter] = React.useState({});

  const element = React.useRef();

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));

  React.useEffect(() => {
    if (element) {
      const elementRect = element.current.getBoundingClientRect();
      const x = elementRect.left + elementRect.width / 2;
      const y = elementRect.top + elementRect.height / 2;

      setCenter({ x, y });
    }
  }, []);

  return (
    <StyledRoot
      ref={element}
      onMouseMove={({ clientX: x, clientY: y }) =>
        set({ xys: calc(x, y, center) })
      }
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <StyledCard>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <StyledText className="text-justify">{content}</StyledText>
          <StyledButton
            prefix="my-btn"
            variant="primary"
            component="a"
            block
            href={to}
          >
            بیشتر
          </StyledButton>
        </Card.Body>
      </StyledCard>
    </StyledRoot>
  );
};

XCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default XCard;

import styled, { keyframes } from 'styled-components';
import getRandomIntFromInterval from '../utils/getRandomIntFromInterval';

export enum PhoneDistance {
  Far = 0,
  Close = 1,
  Closest = 2,
}
const HEAD_BOTTOM_BY_DISTANCE: { [K in PhoneDistance]: [number, number] } = {
  [PhoneDistance.Far]: [68, 75],
  [PhoneDistance.Close]: [30, 60],
  [PhoneDistance.Closest]: [1, 15],
};
const HEAD_SCALE_BY_DISTANCE: { [K in PhoneDistance]: [number, number] } = {
  [PhoneDistance.Far]: [0.4, 0.7],
  [PhoneDistance.Close]: [0.8, 1.1],
  [PhoneDistance.Closest]: [1.5, 1.9],
};
const generateRandomFloat = (min: number, max: number) => {
  return Math.round(10 * (Math.random() * (max - min) + min)) / 10;
};
const makeItHeady = (amount: number, distance: PhoneDistance) => {
  let phones = [];
  const bottomRanges = HEAD_BOTTOM_BY_DISTANCE[distance];
  const scales = HEAD_SCALE_BY_DISTANCE[distance];
  for (let i = 0; i < amount; i++) {
    const bottom = getRandomIntFromInterval(...bottomRanges);
    const left = getRandomIntFromInterval(0, 100);
    const scale = generateRandomFloat(...scales);
    const duration = getRandomIntFromInterval(3, 6);

    phones.push(
      <Head
        bottom={bottom}
        left={left}
        scale={scale}
        duration={duration}
        key={i}
      />
    );
  }

  return phones;
};

const Head = styled.div<{
  left: number;
  bottom: number;
  scale: number;
  duration: number;
}>`
  position: absolute;
  left: ${({ left }) => `${left}%`};
  bottom: ${({ bottom }) => `${bottom}%`};
  position: absolute;
  height: 60px;
  width: 60px;
  border-radius: 100%;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    176deg,
    rgba(92, 78, 130, 0.4) 0%,
    rgba(22, 3, 40, 0) 57%
  );
  animation: ${(props) => sway(props.scale)} ${(props) => `${props.duration}s`}
    infinite ease-in-out;
`;

const sway = (scale: number) => keyframes`
    from,
    to {
      transform: scale(${scale}) translateX(-2px) translateY(0);
    }
    50% {
      transform: scale(${scale}) translateX(2px) translateY(2px);
    }
`;

export default makeItHeady;

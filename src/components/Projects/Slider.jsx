import React, { useRef } from "react";
import Slider from "react-slick";
import Project from "./Members";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

let data = [
  {
    img: "https://ik.imagekit.io/alrrxu2emk/equipe/1.png?updatedAt=1688003464709",
    name: "Matheus",
    level: "CCO",
    disc: "Experiente em e-sports, criativo e desenvolvedor",
    social: "https://www.linkedin.com/in/matheus-do-amaral-40a900145/",
  },
  {
    img: "https://ik.imagekit.io/alrrxu2emk/equipe/2.png?updatedAt=1688003467041",
    name: "Breno",
    level: "CEO",
    disc: "Empreendedor apaixonado e líder",
    social: "https://www.linkedin.com/in/brenocampi/",
  },
  {
    img: "https://ik.imagekit.io/alrrxu2emk/equipe/4.png?updatedAt=1688003464531",
    name: "Luis",
    level: "DEV",
    disc: "Liderado pela tecnólogia, enérgico e genial",
    social: "https://www.linkedin.com/in/luis-botelho/",
  },
  {
    img: "https://ik.imagekit.io/alrrxu2emk/equipe/3.png?updatedAt=1688003467861",
    name: "Yuji",
    level: "CM",
    disc: "Experiente em comunidades, fraterno e gerenciador",
    social: "https://www.linkedin.com/in/hugo-yuji-narimatsu-9a21b6243/",
  },
];

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = data.map((item, i) => <Project item={item} key={i} />);
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button onClick={() => arrowRef.current.slickPrev()} className="back">
          <IoIosArrowBack />
        </button>
        <button onClick={() => arrowRef.current.slickNext()} className="next">
          <IoIosArrowForward />
        </button>
      </Buttons>
    </Container>
  );
};

export default SliderComp;

const Container = styled.div`
  position: relative;
`;

const Buttons = styled.div`
  button {
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    color: #fff;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back {
    left: -1rem;
  }
`;

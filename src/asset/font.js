import react from "react";
import {
  Lexend,
  Nabla,
  Bebas_Neue,
  Koulen,
  Alike,
  Averia_Sans_Libre,
  Rubik_Bubbles,
  Rubik_Doodle_Shadow,
  Poppins,
} from "next/font/google";
const bebasNeueFont = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  styles: ["normal", "italic"],
});
const lexendFont = Lexend({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

const nablaFont = Nabla({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

const koulenFont = Koulen({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

const alikeFont = Alike({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

const averiaSansLibreFont = Averia_Sans_Libre({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

const rubikBubblesFont = Rubik_Bubbles({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

const rubikDoodleShadowFont = Rubik_Doodle_Shadow({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

export {
  lexendFont,
  nablaFont,
  bebasNeueFont,
  koulenFont,
  alikeFont,
  averiaSansLibreFont,
  rubikBubblesFont,
  rubikDoodleShadowFont,
  poppinsFont,
};

import { Serie } from "./serie.js";

export const series: Serie[] = [
  new Serie(1,"Breaking Bad","AMC",5,
    "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White...",
    "https://www.amc.com/shows/breaking-bad","./Images/BRBA.jpeg"),

  new Serie(2,"Orange Is the New Black","Netflix",6,
    "The series begins revolving around Piper Chapman...",
    "https://www.netflix.com/co/title/70242311","./Images/ORANGE.jpeg"),

  new Serie(3,"Game of Thrones","HBO",7,"American fantasy drama",
    "https://www.hbo.com/game-of-thrones","./Images/GOT.jpeg"),

  new Serie(4,"The Big Bang Theory","CBS",12,
    "Leonard and Sheldon are brilliant physicists...",
    "https://www.cbs.com/shows/big_bang_theory/about/","./Images/TBBT.jpeg"),

  new Serie(5,"Sherlock","BBC",4,
    "Sherlock depicts consulting detective Sherlock Holmes...",
    "https://www.bbc.co.uk/programmes/b018ttws","./Images/SHERLOCK.jpeg"),

  new Serie(6,"A Very English Scandal","BBC",2,
    "A fact-based three-part British comedy-drama miniseries...",
    "https://www.bbc.co.uk/programmes/p065smy4","./Images/SCANDAL.jpeg")
];

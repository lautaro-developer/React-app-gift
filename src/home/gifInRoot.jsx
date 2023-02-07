import { ListOfGifs } from "../components/ListOfGifs";
import { Link, Route, useLocation } from "wouter";

export const GifInRoot = () => {
  console.log("-")
  return <div>
    {<ListOfGifs params = "n"/>}
  </div>
}

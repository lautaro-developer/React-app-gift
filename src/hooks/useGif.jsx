import { useState, useEffect } from "react"
import { getGifs } from "../service/getGifs.jsx"


export const useGif = ({ keyword } = {keyword: null}) => {
  const [loading, setLoading] = useState(false)  
  const [gif, setGitfs] = useState([]);
      
  useEffect(() => {
    setLoading(true)
    getGifs({ keyword }).then((gifs) => {
      setGitfs(gifs)
      setLoading(false)
      localStorage.setItem('lastKeyword', keyword)
    });
  }, [keyword]);

  return {loading, gif}
}


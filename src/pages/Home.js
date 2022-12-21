import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import AnimeList from "../components/AnimeList"
import Input from "../components/Input"
import { InputContainer } from "../styled"

const Home = () => {
  const [search, setSearch] = useState('')
  const [searchSent, setSearchSent] = useState('')
  
  const funcSubmit = (e, value) => {
    e.preventDefault()
    setSearchSent(value)
    window.scrollTo({
      top: document.getElementById('list').getBoundingClientRect().top || 0, 
      behavior: 'smooth'
    });
  }

  return (
    <>
      <InputContainer onSubmit={(e) => funcSubmit(e, search)}>
        <Input placeholder="Search manga..." value={search} onChange={(e) => setSearch(e.target.value)} />
        <button><FontAwesomeIcon icon={faSearch} /></button>
      </InputContainer>

      <AnimeList search={searchSent} />
    </>
  )
  
}

export default Home

import { NavButton, SearchBar } from "../components/index"

export function Navbar(props) {
  return (
    <header className='items-center flex justify-between gap-5 max-md:flex-wrap'>
      <NavButton />
      <SearchBar />
    </header>
  )
}

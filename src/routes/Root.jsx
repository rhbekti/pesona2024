import { Link } from "react-router-dom"
import { Navbar } from "flowbite-react"

export default function Root() {
  return (
    <Navbar className='mt-4 mx-8'>
      <Navbar.Brand
        className='flex items-center space-x-3 rtl:space-x-reverse'
        as={Link}
        to='/'
      >
        <img
          src='https://flowbite.com/docs/images/logo.svg'
          classame='h-8'
          alt='Flowbite Logo'
        />
        <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
          Pesona UTDI
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href='#' active>
          Beranda
        </Navbar.Link>
        <Navbar.Link href='#'>Materi</Navbar.Link>
        <Navbar.Link href='#'>Tugas</Navbar.Link>
        <Navbar.Link href='/events'>Acara</Navbar.Link>
        <Navbar.Link href='#'>Kontak</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

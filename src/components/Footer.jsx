import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandYoutube,
  IconClock,
  IconMapPin,
  IconPhoneCall,
} from "@tabler/icons-react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className='px-4 xl:px-24 py-16 bg-slate-100'>
      <h3 className='text-4xl mb-3 font-semibold'>PESONA UTDI</h3>
      <div className='grid grid-cols-1 md:grid-cols-3'>
        <div>
          <h5 className='mb-3 text-xl'>
            Panitia Pelaksana PESONA <br /> UNIVERSITAS TEKNOLOGI DIGITAL
            INDONESIA
          </h5>
          <div className='flex space-x-2 mb-3'>
            <IconMapPin />
            <span>
              Jl. Raya Janti Karang Jambe No. 143 Yogyakarta 55198, Indonesia
            </span>
          </div>
          <div className='flex space-x-2 mb-3'>
            <IconClock />
            <span>08.00 - 16.00 WIB</span>
          </div>
          <div className='flex space-x-2'>
            <IconPhoneCall />
            <span>Help Desk PESONA : 0895363222638</span>
          </div>
        </div>
        <div className='mx-auto my-6 sm:my-0'>
          <h5 className='font-medium text-xl mb-2'>Sosial Media</h5>
          <div className='flex space-x-2'>
            <Link to='https://www.instagram.com/utdi_official/' target='_blank'>
              <IconBrandInstagram size={32} />
            </Link>
            <Link to='https://www.tiktok.com/@utdiofficial' target='_blank'>
              <IconBrandTiktok size={32} />
            </Link>
            <Link to='https://www.facebook.com/utdi.official/' target='_blank'>
              <IconBrandFacebook size={32} />
            </Link>
            <Link
              to='https://www.youtube.com/c/UniversitasTeknologiDigitalIndonesia'
              target='_blank'
            >
              <IconBrandYoutube size={32} />
            </Link>
          </div>
        </div>
        <div className='mx-auto my-6 sm:my-0'>
          <h5 className='font-medium text-xl mb-2'>Tautan</h5>
          <Link className='block mb-2'>SIAKAD</Link>
          <Link>KEUPORTAL</Link>
        </div>
      </div>
    </footer>
  )
}

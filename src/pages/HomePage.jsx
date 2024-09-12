import { Link } from "react-router-dom"
import App from "../App"
import { Card } from "flowbite-react"
import {
  IconBook,
  IconBrandZoom,
  IconBuildingSkyscraper,
  IconCalendarEvent,
  IconDeviceLaptop,
  IconMapPin2,
  IconShirt,
} from "@tabler/icons-react"

export default function HomePage() {
  return (
    <App>
      <section id='hero'>
        <img src='/hero.png' alt='hero' />
      </section>
      <section className='px-4 py-6 xl:py-16'>
        <div class='flex justify-center'>
          <iframe
            class='w-full sm:w-1/2 h-80 rounded-2xl border-8 border-yellow-300'
            src='https://www.youtube.com/embed/DGFmRbPJO5I'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen
          ></iframe>
        </div>
      </section>
      <section className='px-4 py-16 xl:px-24'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='px-4 py-8'>
            <h5 className='text-4xl font-semibold mb-6'>PESONA UTDI</h5>
            <p className='text-lg lg:text-lg mb-10'>
              Pesona merupakan sebuah proses seremonial penyambutan mahasiswa
              baru di Universitas Teknologi Digital Indonesia (UTDI).Pesona
              mengajarkan para mahasiswa untuk beradaptasi terhadap lingkungan
              kampus dan sekitarnya. Melalui kegiatan ini, peserta dapat
              menerapkan nilai-nilai penting sebagai bekal dalam menghadapi
              perkuliahan.
            </p>
            <Link
              className='bg-blue-700 border border-slate-900 py-4 px-6 rounded-xl font-medium text-white'
              to='/'
            >
              Lihat Selengkapnya
            </Link>
          </div>
          <div>
            <img src='/photo.jpg' alt='image-1' className='rounded-xl' />
          </div>
        </div>
      </section>
      <section className='px-4 py-16 xl:px-24'>
        <div className='flex justify-center mb-8'>
          <h5 className='text-4xl font-semibold'>INFORMASI KEGIATAN</h5>
        </div>
        <div className='grid grid-cols-1 space-y-3 xl:space-y-0 xl:grid-cols-3 xl:space-x-6'>
          <Card className='flex border-4 border-yellow-300 bg-yellow-100 rounded-2xl'>
            <IconBook
              className='mx-auto bg-yellow-200 rounded-full p-2'
              size={64}
              strokeWidth={2}
            />
            <h5 className='text-xl mx-auto font-medium'>Buku Panduan</h5>
          </Card>
          <Card className='flex border-4 border-yellow-300 bg-yellow-100 rounded-2xl'>
            <IconShirt
              className='mx-auto bg-yellow-200 rounded-full p-2'
              size={64}
              strokeWidth={2}
            />
            <h5 className='text-xl mx-auto font-medium'>
              Atribut & Perlengkapan
            </h5>
          </Card>
          <Link
            target='_blank'
            to='https://drive.google.com/drive/folders/1TT5449MKRg_p4rTDi5OuYGzTalZeYuCE'
          >
            <Card className='flex border-4 border-yellow-300 bg-yellow-100 rounded-2xl'>
              <IconBrandZoom
                className='mx-auto bg-yellow-200 rounded-full p-2'
                size={64}
                strokeWidth={2}
              />
              <h5 className='text-xl mx-auto font-medium'>
                Virtual Background
              </h5>
            </Card>
          </Link>
        </div>
      </section>
      <section className='bg-blue-500 border-2 border-slate-900 py-16 px-4 xl:px-24 rounded-2xl'>
        <div className='mb-6'>
          <h5 className='text-5xl text-yellow-300 font-semibold mb-4'>
            Teknopedia
          </h5>
          <p className='text-lg text-white'>
            Teknopedia merupakan kanal informasi mengenai Universitas Teknologi
            Digital Indonesia secara lebih luas. Melalui Teknopedia, Teknozen
            akan menambah banyak wawasan baru mengenai Universitas Teknologi
            Digital Indonesia. Yuk, simak Teknopedia dan telusuri hal baru!
          </p>
        </div>
        <div className='grid grid-cols-1 space-y-4 xl:space-y-0 xl:grid-cols-4 xl:space-x-4'>
          <Card className='flex justify-center'>
            <IconDeviceLaptop className='mx-auto' strokeWidth={2} size={64} />
            <span className='mx-auto font-medium'>E-Learning</span>
          </Card>
          <Card className='flex justify-center'>
            <IconCalendarEvent className='mx-auto' strokeWidth={2} size={64} />
            <span className='mx-auto font-medium'>Kegiatan Kampus</span>
          </Card>
          <Card className='flex justify-center'>
            <IconBuildingSkyscraper
              className='mx-auto'
              strokeWidth={2}
              size={64}
            />
            <span className='mx-auto font-medium'>Fasilitas Kampus</span>
          </Card>
          <Card className='flex justify-center'>
            <IconMapPin2 className='mx-auto' strokeWidth={2} size={64} />
            <span className='mx-auto font-medium'>Ormada dan Ormawa</span>
          </Card>
        </div>
      </section>
    </App>
  )
}

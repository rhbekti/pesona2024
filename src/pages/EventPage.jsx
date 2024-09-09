import { useEffect, useState } from "react"
import App from "../App"
import { Button, Card, Label, Modal, TextInput } from "flowbite-react"
import Skeleton from "../components/Skeleton"
export default function EventPage() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [nim, setNim] = useState("")
  const [event, setEvent] = useState("")
  const [kontak, setKontak] = useState("")
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwMNc-zcElTwbaBrdB-9n-_e8OIfjLqdYw4pd1cXzBxB5G2P5AdTO6-vEzMHxrI5PSc/exec?sheetName=Event",
      )
      if (!response.ok) {
        throw new Error("Network response was not ok.")
      }
      const data = await response.json()
      setData(data)
      setLoading(false)
    } catch (error) {
      setError(error.message)
      setLoading(false)
    }
  }

  const postData = async () => {
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwMNc-zcElTwbaBrdB-9n-_e8OIfjLqdYw4pd1cXzBxB5G2P5AdTO6-vEzMHxrI5PSc/exec",
        {
          method: "POST",
          body: JSON.stringify({
            nim: nim,
            eventId: event,
            kontak: kontak,
          }),
        },
      )
      if (!response.ok) {
        throw new Error("Network response was not ok.")
      }
      const data = await response.json()
      console.log(data)
    } catch (error) {
      setError(error.message)
    }
  }

  const handleEventSubmit = (e) => {
    e.preventDefault()
    postData()
  }

  const handleEventClick = (id) => {
    setEvent(id)
    setOpenModal(true)
  }

  return (
    <App>
      <div className='p-8'>
        {loading ? (
          <Skeleton />
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {data.data.map((item) => (
              <Card
                key={item.id}
                className='max-w-sm my-3'
                imgAlt={item.title}
                imgSrc={item.cover}
              >
                <span className='border border-blue-500 px-2 py-1 rounded-lg w-fit text-sm font-medium text-slate-700'>
                  {item.type}
                </span>
                <h5 className='text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  {item.title}
                </h5>
                <span className='text-sm text-slate-500'>
                  Oleh: {item.speaker}
                </span>
                <p className='font-normal text-gray-700 dark:text-gray-400'>
                  {item.description}
                </p>
                <Button
                  className='mt-auto'
                  onClick={() => handleEventClick(item.id)}
                >
                  Ikuti
                </Button>
              </Card>
            ))}
          </div>
        )}
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>Formulir Kehadiran</Modal.Header>
          <Modal.Body>
            <form onSubmit={handleEventSubmit}>
              <TextInput id='eventId' type='hidden' value={event} />
              <div className='mb-2'>
                <Label
                  htmlFor='nim'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Nomor Induk Mahasiswa
                </Label>
                <TextInput
                  id='nim'
                  type='text'
                  onChange={(e) => setNim(e.target.value)}
                  value={nim}
                />
              </div>
              <div>
                <Label
                  htmlFor='kontak'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Kontak
                </Label>
                <TextInput
                  id='kontak'
                  type='text'
                  inputMode='tel'
                  onChange={(e) => setKontak(e.target.value)}
                  value={kontak}
                />
              </div>
              <div className='flex justify-end mt-3'>
                <Button type='submit'>Kirim</Button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </App>
  )
}

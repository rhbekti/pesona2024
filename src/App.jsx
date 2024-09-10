import Root from "./routes/Root"
import Footer from "./components/Footer"
function App({ children }) {
  return (
    <>
      <Root />
      {children}
      <Footer />
    </>
  )
}

export default App

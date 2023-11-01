import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/home'
import Header from './component/header'
import Footer from './component/footer'
import Description from './page/Description'
import Auth from './UI/Auth'
import { AuthContext } from './Context/AuthContext'

const App = () => {

  const authContext = useContext(AuthContext)

  let content = <Auth />

  if(authContext.isAuth) {
      content = (
        <div>
          <header>
            <Header />
            <Header />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/description/:title" element = {<Description />} />
            </Routes>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      )
  }

  return (
    <BrowserRouter>
      {content}
    </BrowserRouter>
  )
}

export default App
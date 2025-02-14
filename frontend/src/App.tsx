import { FC, useState } from 'react'
import './App.css'
import { shortenUrl } from './helpers/urlHelper';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RedirectHandler from './RedirectHandler';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:shortcode" element={<RedirectHandler />} />
        <Route path="/not-found" element={<p>Short URL not found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

const Home: FC = () =>{
  const [url, setUrl] = useState<string>('');
  const [shortCode, setShortCode] = useState<string>('');

  const handleClick = async  (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const code = await shortenUrl(url)
    setShortCode(code);
  }

  return (
    <div className="app">
    <header className="header">
      <div className="logo">
        <img src="/placeholder.svg?height=40&width=40" alt="ShortLink Logo" width={40} height={40} />
        <span>ShortLink</span>
      </div>
    </header>

    <main>
      <section className="hero">
        <h1>Shorten Your Links, Expand Your Reach</h1>
        <p>Create short, memorable links in seconds with ShortLink</p>
        <form className="url-form">
          <input value={url} onChange={(e) => setUrl(e.target.value)} type="url" placeholder="Enter your long URL here" required/>
          <button type="submit" onClick={(e)=> handleClick(e)}>Shorten</button>
        </form>
        {
          shortCode &&
          <div className="short-code">
            <p>New link: <a href={`http://localhost:3000/${shortCode}`} target='_blank'>http://localhost:3000/{shortCode}</a></p>
          </div>
        }
      </section>

      <section id="features" className="features">
        <h2>Why Choose ShortLink?</h2>
        <div className="feature-grid">
          <div className="feature">
            <img src="/placeholder.svg?height=50&width=50" alt="Fast Icon" width={50} height={50} />
            <h3>Lightning Fast</h3>
            <p>Generate short links in milliseconds</p>
          </div>
          <div className="feature">
            <img src="/placeholder.svg?height=50&width=50" alt="Secure Icon" width={50} height={50} />
            <h3>Secure & Reliable</h3>
            <p>Your data is safe with our robust infrastructure</p>
          </div>
          <div className="feature">
            <img src="/placeholder.svg?height=50&width=50" alt="Analytics Icon" width={50} height={50} />
            <h3>Detailed Analytics</h3>
            <p>Track your link performance with ease</p>
          </div>
          <div className="feature">
            <img src="/placeholder.svg?height=50&width=50" alt="Customizable Icon" width={50} height={50} />
            <h3>Customizable Links</h3>
            <p>Create branded short links for your business</p>
          </div>
        </div>
      </section>
    </main>

    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>ShortLink</h4>
          <p>Making the web more accessible, one short link at a time.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 ShortLink. All rights reserved.</p>
      </div>
    </footer>
  </div>
  )
}

export default App

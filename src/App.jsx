import { useState } from 'react'
import './App.css'
import insta from './img/instagram (1).png'
import youTube from './img/youtube.png'
import logo from './img/pngwing.com2.png'
import corey from './img/slipknotcoreytaylor.jpg'
import joey from './img/joey_jordison.jpg'
import Jim from './img/jimRoot.jpg'
import one from './img/one.png'
import four from './img/four.png'
import eight from './img/eight.png'
import slipknot from './img/slipknot.png'
import chris from './img/Chris_Fehn.jpg'
import Craig from './img/Craig_Jones.jpg'
import Paul from './img/Paul_Gray.jpg'
import sid from './img/sid_Wilson.jpg'
import clown from './img/clown.jpg'
import zero from './img/number-circle-zero.png'
import two from './img/number-circle-two.png'
import three from './img/number-circle-three.png'
import five from './img/number-circle-five.png'
import six from './img/number-circle-six.png'
import seven from './img/number-circle-seven.png'
import Mick from './img/Mick_Thomson-JD.jpg'
import Root from './img/jim.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className="menuWithLogo">

        <img id='slipknotlogo' src={slipknot} alt="" />


      </div>

      <div className="cards">

        {/* Sid Wilson */}
        <div className="main">

          <div className="logo">

            <img src={logo} alt="" />

          </div>

          <img src={sid} alt="" id='corey' />

          <div className="name">

            <strong>Sid Wilson</strong>  <br />
            <img src={zero} alt="" />

          </div>

          <div className="details">

            <strong>DJ</strong>
          </div>

          <div className="socialMedia">

            <a href="https://www.instagram.com/coreytaylor/"><img src={insta} alt="" /></a>
            <a href="https://www.youtube.com/channel/UCLQ1zmTPoqXZ6Vk0LVtQvkg"><img src={youTube} alt="" /></a>

          </div>

        </div>

        {/* Joey Jordison */}

        <div className="main">

          <div className="logo">

            <img src={logo} alt="" />

          </div>

          <img src={joey} alt="" id='corey' />

          <div className="name">
            <strong>Joey Jordison</strong>  <br />
            <img src={one} alt="" />
          </div>

          <div className="details">

            <strong>Baterista</strong>
          </div>

          <div className="socialMedia">

            <a href="https://www.instagram.com/thejoeyjordison/"><img src={insta} alt="" /></a>
            <a href="https://www.youtube.com/@slipknot"><img src={youTube} alt="" /></a>

          </div>

        </div>

        {/* Paul Gray */}

        <div className="main">

          <div className="logo">

            <img src={logo} alt="" />

          </div>

          <img src={Paul} alt="" id='corey' />

          <div className="name">
            <strong>Paul Gray</strong>  <br />
            <img src={two} alt="" />
          </div>

          <div className="details">

            <strong>Baixista</strong>
          </div>

          <div className="socialMedia">

            <a href="https://www.youtube.com/@slipknot"><img src={insta} alt="" /></a>
            <a href="https://www.youtube.com/@slipknot"><img src={youTube} alt="" /></a>

          </div>

        </div>

      </div>

      <div className="cards">

        {/* Chris Fehn */}
        <div className="main">

          <div className="logo">

            <img src={logo} alt="" />

          </div>

          <img src={chris} alt="" id='corey' />

          <div className="name">

            <strong>Chris Fehn</strong>  <br />
            <img src={three} alt="" />

          </div>

          <div className="details">

            <strong>Percussionista</strong>
          </div>

          <div className="socialMedia">

            <a href="https://www.instagram.com/coreytaylor/"><img src={insta} alt="" /></a>
            <a href="https://www.youtube.com/channel/UCLQ1zmTPoqXZ6Vk0LVtQvkg"><img src={youTube} alt="" /></a>

          </div>

        </div>

        {/* James Root*/}

        <div className="main">

          <div className="logo">

            <img src={logo} alt="" />

          </div>

          <img src={Root} alt="" id='corey' />

          <div className="name">
            <strong>James Root</strong>  <br />
            <img src={four} alt="" />
          </div>

          <div className="details">

            <strong>Guitarrista</strong>
          </div>

          <div className="socialMedia">

            <a href="https://www.instagram.com/jamesroot/"><img src={insta} alt="" /></a>
            <a href="https://www.youtube.com/@slipknot"><img src={youTube} alt="" /></a>

          </div>

        </div>

        {/* Craig jones */}

        <div className="main">

          <div className="logo">

            <img src={logo} alt="" />

          </div>

          <img src={Craig} alt="" id='corey' />

          <div className="name">
            <strong>Craig Jones</strong>  <br />
            <img src={five} alt="" />
          </div>

          <div className="details">

            <strong>Tecladista</strong>
          </div>

          <div className="socialMedia">

            <a href="https://www.youtube.com/@slipknot"><img src={insta} alt="" /></a>
            <a href="https://www.youtube.com/@slipknot"><img src={youTube} alt="" /></a>

          </div>

        </div>

      </div>

      <div className="cards">

        {/* Clown */}
        <div className="main">

          <div className="logo">

            <img src={logo} alt="" />

          </div>

          <img src={clown} alt="" id='corey' />

          <div className="name">

            <strong>Shawn Crahan</strong>  <br />
            <img src={six} alt="" />

          </div>

          <div className="details">

            <strong>Percussionista</strong>
          </div>

          <div className="socialMedia">

            <a href="https://www.instagram.com/mshawncrahan/"><img src={insta} alt="" /></a>
            <a href="https://www.youtube.com/channel/UCLQ1zmTPoqXZ6Vk0LVtQvkg"><img src={youTube} alt="" /></a>

          </div>

        </div>

        {/* Mick Thomson */}

        <div className="main">

          <div className="logo">

            <img src={logo} alt="" />

          </div>

          <img src={Mick} alt="" id='corey' />

          <div className="name">
            <strong>Mick Thomson</strong>  <br />
            <img src={seven} alt="" />
          </div>

          <div className="details">

            <strong>Guitarrista</strong>
          </div>

          <div className="socialMedia">

            <a href="https://www.instagram.com/7mick7/"><img src={insta} alt="" /></a>
            <a href="https://www.youtube.com/@slipknot"><img src={youTube} alt="" /></a>

          </div>

        </div>

        {/* Corey Taylors */}

        <div className="main">

          <div className="logo">

            <img src={logo} alt="" />

          </div>

          <img src={corey} alt="" id='corey' />

          <div className="name">
            <strong>Corey Taylor</strong>  <br />
            <img src={eight} alt="" />
          </div>

          <div className="details">

            <strong>Vocalista</strong>
          </div>

          <div className="socialMedia">

            <a href="https://www.instagram.com/jamesroot/"><img src={insta} alt="" /></a>
            <a href="https://www.youtube.com/@slipknot"><img src={youTube} alt="" /></a>

          </div>

        </div>

      </div>

    </>
  )
}

export default App

/* that's it */

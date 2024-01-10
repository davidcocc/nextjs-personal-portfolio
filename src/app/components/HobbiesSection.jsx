// Import necessary libraries and components
"use client";
import React from "react";
import Slider from "react-slick";
import { Spotify } from "react-spotify-embed";
import { useMediaQuery } from "react-responsive";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Media query component
const ResponsiveSlider = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 4,
    slidesToScroll: 1,
    autoplay: true, // Abilita l'autoplay
    autoplaySpeed: 3000, // Imposta la velocità dell'autoplay in millisecondi (ad es. 3000 = 3 secondi)
    swipeToSlide: true,
    prevArrow: <button className="slick-prev">Previous</button>,
    nextArrow: <button className="slick-next">Next</button>,
  };

  return (
    <section id="hobbies">
      <h2 className="text-center text-4xl font-bold text-white mt-48 mb-2 md:mb-2">
        My Hobbies
      </h2>
      <p className="text-[#f1f1f1] sm:text-lg mb-2 lg:text-xl lg:text-center xl:text-center sm:text-center md:text-center">
      No doubt about it: without my passions, I would not be the person I am today. My greatest love is for <strong>music</strong>: I am a decent level self-taught <strong>guitarist</strong> and <strong>bassist</strong> with a little background of <strong>music production</strong>. Learning to play has taught me the value of dedication and sacrifice; I really love doing it, although I am not as skilled as I would like to be. But hey, <strong>the grind never stops</strong>!
      </p>
      <p className="text-[#f1f1f1] sm:text-lg mb-6 lg:text-xl lg:text-center xl:text-center sm:text-center md:text-center">
      {`Sure, I have a huge love for video games, manga and visual arts in general, but when it comes to listening to music, some say I'm a real fanatic! Here's a rundown of some albums that have had a profound impact on shaping who I am:`}
      </p>
    <div>
      <style>
        {`
          .image-container {
            position: relative;
          }

          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 180%;
            background: rgba(0, 0, 0, 0.5);
            opacity: 0;
            transition: opacity 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .image-container:hover .overlay {
            opacity: 1;
          }

          .overlay-text {
            color: white;
            font-size: 16px;
            text-align: center;
          }
        `}
      </style>
      
      <Slider {...settings}>
      <div className="image-container">
          <img src="/images/the-cure-disintegration-Cover-Art.webp" alt="The Cure - Disintegration" className="w-80" />
          <a href="https://open.spotify.com/intl-it/album/6DZNOsLXIU2zOQfQDwDpIS?si=6a912953dce04c25">
          <div className="overlay">
            <p className="overlay-text">The Cure - Disintegration</p>
          </div>
          </a>
        </div>
        <div className="image-container">
          <img src="/images/car-seat-headrest-twin-fantasy-Cover-Art.webp" alt="Car Seat Headrest - Twin Fantasy" className="w-80" />
          <a href="https://open.spotify.com/intl-it/album/6gDtROOIYa6OQxwhDNkDRM?si=rbuLQ0ZFR-OFeiIzlyQRMg">
          <div className="overlay">
            <p className="overlay-text">Car Seat Headrest - Twin Fantasy</p>
          </div>
          </a>
        </div>
        <div className="image-container">
          <img src="/images/福居良-ryo-fukui-scenery-cover-art.webp" alt="Ryo Fukui - シーナリィ" className="w-80" />
          <a href="https://open.spotify.com/intl-it/album/5Uny0mkKiVGDat7H6SNDyS?si=Yjk1cW_0QIizTa8kcIJtmg">
          <div className="overlay">
            <p className="overlay-text">Ryo Fukui - シーナリィ</p>
          </div>
          </a>
        </div>
        <div className="image-container">
          <img src="/images/radiohead-in-rainbows-Cover-Art.webp" alt="Radiohead - In Rainbows" className="w-80" />
          <a href="https://open.spotify.com/intl-it/album/5vkqYmiPBYLaalcmjujWxK?si=846135cb9e9a48d1">
          <div className="overlay">
            <p className="overlay-text">Radiohead - In Rainbows</p>
          </div>
          </a>
        </div>
        <div className="image-container">
          <img src="/images/david-bowie-station-to-station-Cover-Art.webp" alt="David Bowie - Station to Station" className="w-80" />
          <a href="https://open.spotify.com/intl-it/album/0MWrKayUshRuT8maG4ZAOU?si=cc9996d9ad2743be">
          <div className="overlay">
            <p className="overlay-text">David Bowie - Station to Station</p>
          </div>
          </a>
        </div>
        <div className="image-container">
          <img src="/images/franco-battiato-la-voce-del-padrone-Cover-Art.webp" alt="Franco Battiato - La voce del padrone" className="w-80" />
          <a href="https://open.spotify.com/intl-it/album/3vHxkAyC36Bi581ZUysCtZ?si=641c723d344b411d">
          <div className="overlay">
            <p className="overlay-text">Franco Battiato - La voce del padrone</p>
          </div>
          </a>
        </div>
        <div className="image-container">
          <img src="/images/fugazi-13-songs-Cover-Art.webp" alt="Fugazi - 13 Songs" className="w-80" />
          <a href="https://open.spotify.com/intl-it/album/1FcRwT7uoNdO8L9wbYsfAY?si=e1678e05203d4a10">
          <div className="overlay">
            <p className="overlay-text">Fugazi - 13 Songs</p>
          </div>
          </a>
        </div>
        <div className="image-container">
          <img src="/images/kraftwerk-die-mensch-maschine-Cover-Art.webp" alt="Kraftwerk - The Man Machine" className="w-80" />
          <a href="https://open.spotify.com/intl-it/album/3eyz60xEK5dGEeZF1JJSi9?si=owjt-XHsTAGLhjN2PmKjKw">
          <div className="overlay">
            <p className="overlay-text">Kraftwerk - The Man Machine</p>
          </div>
          </a>
        </div>
        <div className="image-container">
          <img src="/images/i-cani-glamour-Cover-Art.webp" alt="I Cani - Glamour" className="w-80" />
          <a href="https://open.spotify.com/intl-it/album/0f0KObbaX3ZKk3HYJak2we?si=cdeb55424164494b">
          <div className="overlay">
            <p className="overlay-text">I Cani - Glamour</p>
          </div>
          </a>
        </div>
        <div className="image-container">
          <img src="/images/joy-division-unknown-pleasures-Cover-Art.webp" alt="Joy Division - Unknown Pleasures" className="w-80" />
          <a href="https://open.spotify.com/intl-it/album/5Dgqy4bBg09Rdw7CQM545s?si=173f0fe8ac8144bc">
          <div className="overlay">
            <p className="overlay-text">Joy Division - Unknown Pleasures</p>
          </div>
          </a>
        </div>
        <div className="image-container">
          <img src="/images/king-crimson-in-the-court-of-the-crimson-king-cover-art.webp" alt="King Crimson - In the Court of the Crimson King" className="w-80" />
          <a href="https://open.spotify.com/intl-it/album/75ol9OP8bJaRqzGimpFHDm?si=7d3100cba2774e34">
          <div className="overlay">
            <p className="overlay-text">King Crimson - In the Court of the Crimson King</p>
          </div>
          </a>
        </div>
        <div className="image-container">
          <img src="/images/kraftwerk-computerwelt-Cover-Art.webp" alt="Kraftwerk - Computer World" className="w-80" />
          <a href="https://open.spotify.com/intl-it/album/42hCHiMtfs7mfBTVX3V6k7?si=9b25e3fc2bc04379">
          <div className="overlay">
            <p className="overlay-text">Kraftwerk - Computer World</p>
          </div>
          </a>
        </div>
        <div className="image-container">
          <img src="/images/lucio-battisti-anima-latina-Cover-Art.webp" alt="Lucio Battisti - Anima Latina" className="w-80" />
          <a href="https://open.spotify.com/intl-it/album/6Dm9F6WuFAbYrevLFAfyfZ?si=cbac403f8eab47d6">
          <div className="overlay">
            <p className="overlay-text">Lucio Battisti - Anima Latina</p>
          </div>
          </a>
        </div>
        <div className="image-container">
          <img src="/images/my-bloody-valentine-loveless-cover-art.webp" alt="my bloody valentine - loveless" className="w-80" />
          <a href="https://open.spotify.com/intl-it/album/3USQKOw0se5pBNEndu82Rb?si=deff15e72ad54d54">
          <div className="overlay">
            <p className="overlay-text">my bloody valentine - loveless</p>
          </div>
          </a>
        </div>
        <div className="image-container">
          <img src="/images/nujabes-modal-soul-cover-art.webp" alt="Nujabes - Modal Soul" className="w-80" />
          <a href="https://open.spotify.com/intl-it/album/6nVACH6a27eOWiumAJhDWS?si=634a025a3990407d">
          <div className="overlay">
            <p className="overlay-text">Nujabes - Modal Soul</p>
          </div>
          </a>
        </div>
        <div className="image-container">
          <img src="/images/oingo-boingo-nothing-to-fear-Cover-Art.webp" alt="Oingo Boingo - Nothing to Fear" className="w-80" />
          <a href="https://open.spotify.com/intl-it/album/14BomeBLJVLqsgVSdrC6Wc?si=a16bcd2621134f66">
          <div className="overlay">
            <p className="overlay-text">Oingo Boingo - Nothing to Fear</p>
          </div>
          </a>
        </div>
        <div className="image-container">
          <img src="/images/pink-floyd-meddle-Cover-Art.webp" alt="Pink Floyd - Meddle" className="w-80" />
          <a href="https://open.spotify.com/intl-it/album/7yKRvvqspSxfLkr7C7RaAI?si=e91bc52b60a64233">
          <div className="overlay">
            <p className="overlay-text">Pink Floyd - Meddle</p>
          </div>
          </a>
        </div>
        <div className="image-container">
          <img src="/images/joy-division-closer-Cover-Art.webp" alt="Joy Divison - Closer" className="w-80" />
          <a href="https://open.spotify.com/intl-it/album/0KBdfMTMxi0oD1oVqApTjr?si=318a0d681a084be6">
          <div className="overlay">
            <p className="overlay-text">Joy Divison - Closer</p>
          </div>
          </a>
        </div>
        <div className="image-container">
          <img src="/images/radiohead-ok-computer-Cover-Art.webp" alt="Radiohead - OK Computer" className="w-80" />
          <a href="https://open.spotify.com/intl-it/album/6dVIqQ8qmQ5GBnJ9shOYGE?si=ef8f88fa4cc643b2">
          <div className="overlay">
            <p className="overlay-text">Radiohead - OK Computer</p>
          </div>
          </a>
        </div>
        <div className="image-container">
          <img src="/images/sonic-youth-daydream-nation-Cover-Art.webp" alt="Sonic Youth - Daydream Nation" className="w-80" />
          <a href="https://open.spotify.com/intl-it/album/3BYlBcND6PeKoW6ZODjZO3?si=44ec33e7ad77471c">
          <div className="overlay">
            <p className="overlay-text">Sonic Youth - Daydream Nation</p>
          </div>
          </a>
        </div>
        <div className="image-container">
          <img src="/images/star.webp" alt="David Bowie - Blackstar" className="w-80" />
          <a href="https://open.spotify.com/intl-it/album/0vxg8oJKDu3i0bXQu7vEpi?si=t4l11ihaRuyI4qCx93wrgg">
          <div className="overlay">
            <p className="overlay-text">David Bowie - Blackstar</p>
          </div>
          </a>
        </div>
        <div className="image-container">
          <img src="/images/swans-soundtracks-for-the-blind-Cover-Art.webp" alt="Swans - Soundtrack for the Blind" className="w-80" />
          <a href="https://open.spotify.com/intl-it/album/7yV8WpwCChvzW3qr5MuzMf?si=0bb343e86ae3447b">
          <div className="overlay">
            <p className="overlay-text">Swans - Soundtrack for the Blind</p>
          </div>
          </a>
        </div>
        <div className="image-container">
          <img src="/images/the-cure-kiss-me-kiss-me-kiss-me-Cover-Art.webp" alt="The Cure - Kiss Me, Kiss Me, Kiss Me" className="w-80" />
          <a href="https://open.spotify.com/intl-it/album/6qRV8jXFV1fZG0TizFOuTE?si=a8bd6a65f1e745c7">
          <div className="overlay">
            <p className="overlay-text">The Cure - Kiss Me, Kiss Me, Kiss Me</p>
          </div>
          </a>
        </div>
        <div className="image-container">
          <img src="/images/the-smiths-the-queen-is-dead-Cover-Art.webp" alt="The Smiths - The Queen is Dead" className="w-80" />
          <a href="https://open.spotify.com/intl-it/album/5Y0p2XCgRRIjna91aQE8q7?si=cfd237dd9c9c4671">
          <div className="overlay">
            <p className="overlay-text">The Smiths - The Queen is Dead</p>
          </div>
          </a>
        </div>
        <div className="image-container">
          <img src="/images/pink-floyd-animals-Cover-Art.webp" alt="Pink Floyd - Animals" className="w-80" />
          <a href="https://open.spotify.com/intl-it/album/21jUB9RqplD6OqtsTjKBnO?si=bcfe60bb1d084cb3">
          <div className="overlay">
            <p className="overlay-text">Pink Floyd - Animals</p>
          </div>
          </a>
        </div>
        <div className="image-container">
          <img src="/images/star.webp" alt="David Bowie - Blackstar" className="w-80" />
          <a href="https://open.spotify.com/intl-it/album/0vxg8oJKDu3i0bXQu7vEpi?si=t4l11ihaRuyI4qCx93wrgg">
          <div className="overlay">
            <p className="overlay-text">David Bowie - Blackstar</p>
          </div>
          </a>
        </div>
        <div className="image-container">
          <img src="/images/tyler-the-creator-igor-cover-art.webp" alt="Tyler, The Creator - IGOR" className="w-80" />
          <a href="https://open.spotify.com/intl-it/album/5zi7WsKlIiUXv09tbGLKsE?si=ec8e6faead37441c">
          <div className="overlay">
            <p className="overlay-text">Tyler, The Creator - IGOR</p>
          </div>
          </a>
        </div>
        <div className="image-container">
          <img src="/images/weather-report-black-market-Cover-Art.webp" alt="Weather Report - Black Market" className="w-80" />
          <a href="https://open.spotify.com/intl-it/album/4COZn5okauxP5luXkwEPLd?si=4bf0d98930224021">
          <div className="overlay">
            <p className="overlay-text">Weather Report - Black Market</p>
          </div>
          </a>
        </div>
        <div className="image-container">
          <img src="/images/pink-floyd-the-dark-side-of-the-moon-Cover-Art.webp" alt="Pink Floyd - The Dark Side of the Moon" className="w-80" />
          <a href="https://open.spotify.com/intl-it/album/2WT1pbYjLJciAR26yMebkH?si=d350eb6246554825">
          <div className="overlay">
            <p className="overlay-text">Pink Floyd - The Dark Side of the Moon</p>
          </div>
          </a>
        </div>
        <div className="image-container">
          <img src="/images/radiohead-kid-a-Cover-Art.webp" alt="Radiohead - Kid A" className="w-80" />
          <a href="https://open.spotify.com/intl-it/album/6GjwtEZcfenmOf6l18N7T7?si=9b52392ec9ec43d3">
          <div className="overlay">
            <p className="overlay-text">Radiohead - Kid A</p>
          </div>
          </a>
        </div>
        <div className="image-container">
          <img src="/images/calcutta-mainstream-Cover-Art.webp" alt="Calcutta - Mainstream" className="w-80" />
          <a href="https://open.spotify.com/intl-it/album/11dh7pT3FRrGkI3TXl0e4k?si=efb0cb672ba643f9">
          <div className="overlay">
            <p className="overlay-text">Calcutta - Mainstream</p>
          </div>
          </a>
        </div>
        <div className="image-container">
          <img src="/images/the-strokes-room-on-fire-Cover-Art.webp" alt="The Strokes - Room on Fire" className="w-80" />
          <a href="https://open.spotify.com/intl-it/album/3HFbH1loOUbqCyPsLuHLLh?si=db82e07756bc4024">
          <div className="overlay">
            <p className="overlay-text">The Strokes - Room on Fire</p>
          </div>
          </a>
        </div>
        {/* Aggiungi altre immagini della card secondo lo stesso modello */}
      </Slider>
    </div>
    
    </section>
  );
};

// Your class component
export default class SimpleSlider extends React.Component {
  render() {
    return <ResponsiveSlider />;
  }
}

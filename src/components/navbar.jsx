import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {

    const navigate = useNavigate();

    const navigateToSpeakersPage=(event)=>{
        event.preventDefault();
        navigate({
            pathname: "/speakers",
        });
      }

  return (
    <nav className=" p-4 fixed w-full z-[1000]" style={{ background: 'rgba(24, 24, 24, 1)'}}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold ml-10">
        <svg width="50" height="50" viewBox="0 0 412 298" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M213.785 80.0105C201.261 70.9439 189.563 58.6175 178.14 41.8624C176.317 39.7336 173.108 39.4865 170.981 41.3112C170.012 42.138 169.386 43.3165 169.243 44.59C169.139 64.8805 166.338 81.6452 161.002 96.1669C86.399 116.248 26.2478 120.592 21.5098 105.091C16.2305 87.7941 81.9933 52.3356 168.398 25.8961C254.803 -0.543378 329.131 -7.95631 334.419 9.34054C339.148 24.8412 286.859 54.9016 213.785 80.0105Z" fill="#6356FE"/>
            <path d="M243.599 272.101C157.194 298.54 82.8668 305.953 77.5781 288.656C72.84 273.137 125.262 243.019 198.479 217.891C210.86 226.929 222.435 239.18 233.743 255.773C235.272 258.007 238.301 258.567 240.523 257.047C241.843 256.144 242.64 254.652 242.65 253.055C242.754 232.964 245.508 216.333 250.73 201.906C325.456 181.758 385.74 177.396 390.488 192.906C395.767 210.203 330.004 245.661 243.599 272.101Z" fill="#6356FE"/>
            <path d="M170.012 202.837C78.2902 226.283 6.18473 230.93 0.373758 211.923C-5.41823 192.953 56.6984 156.554 145.563 124.697C129.801 145.986 106.509 163.169 76.733 183.488C74.5112 184.999 73.9415 188.04 75.4512 190.273C76.3627 191.594 77.8534 192.393 79.4581 192.402C115.805 192.583 144.898 193.809 170.012 202.837Z" fill="#6356FE"/>
            <path d="M265.932 173.49C281.693 151.944 305.127 134.648 335.15 114.158C337.382 112.637 337.952 109.596 336.432 107.372C335.53 106.041 334.03 105.243 332.425 105.243C296.392 105.053 267.479 103.846 242.517 95.017C333.992 71.6947 405.822 67.1044 411.624 86.0739C417.425 105.081 355.071 141.576 265.932 173.49Z" fill="#6356FE"/>
            <path d="M335.15 114.158C305.127 134.648 281.693 151.944 265.932 173.49C250.758 178.916 234.816 184.21 218.295 189.266C201.783 194.322 185.613 198.855 170.012 202.837C144.898 193.809 115.805 192.583 79.4581 192.402C77.8534 192.393 76.3627 191.594 75.4512 190.273C73.9415 188.04 74.5112 184.999 76.733 183.487C106.51 163.168 129.801 145.986 145.563 124.697C151.981 116.03 157.156 106.688 161.002 96.1669C166.338 81.6452 169.139 64.8805 169.243 44.59C169.386 43.3165 170.012 42.138 170.981 41.3112C173.108 39.4865 176.317 39.7336 178.14 41.8624C189.563 58.6175 201.261 70.9439 213.785 80.0105C222.852 86.5681 232.357 91.4245 242.507 95.0169H242.517C267.479 103.846 296.392 105.053 332.425 105.243C334.03 105.243 335.53 106.041 336.432 107.372C337.952 109.596 337.382 112.637 335.15 114.158Z" fill="white"/>
            <path d="M265.932 173.49C259.608 182.119 254.518 191.433 250.73 201.906C242.146 204.215 233.373 206.734 224.467 209.461C215.56 212.189 206.882 215.002 198.479 217.891C189.487 211.333 180.068 206.458 170.012 202.837C185.613 198.855 201.783 194.322 218.295 189.266C234.816 184.21 250.758 178.916 265.932 173.49Z" fill="#6356FE"/>
            <path d="M250.73 201.906C245.508 216.332 242.754 232.964 242.65 253.055C242.65 254.652 241.843 256.144 240.523 257.047C238.301 258.567 235.272 258.006 233.743 255.773C222.435 239.18 210.86 226.929 198.479 217.891C206.882 215.002 215.56 212.189 224.467 209.461C233.373 206.734 242.146 204.215 250.73 201.906Z" fill="white"/>
        </svg>

        </div>
        
        {/* Navigation Links */}
        <ul className="flex space-x-12 text-gray-300 text-lg mr-10">
            <li className="relative group">
                <a href="/" className="inline-block transition-transform duration-1 group-hover:translate-y-[-10px] group-hover:opacity-0">
                    About
                </a>
                <a href="/" className="absolute text-white inline-block transition-transform duration-1 translate-y-[10px] translate-x-[-50px] opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                    About
                </a>
            </li>
            <li className="relative group"> 
                <a href="/" className="inline-block transition-transform duration-10 group-hover:translate-y-[-10px] group-hover:opacity-0">
                    Events
                </a>
                <a href="/" className="absolute text-white inline-block transition-transform duration-10 translate-y-[10px] translate-x-[-50px] opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                    Events
                </a>
            </li>
            <li className="relative group">
                <p onClick={navigateToSpeakersPage} className="inline-block transition-transform duration-10 group-hover:translate-y-[-10px] group-hover:opacity-0">
                    Speakers
                </p>
                <p onClick={navigateToSpeakersPage} className="absolute text-white inline-block transition-transform duration-10 translate-y-[10px] translate-x-[-70px] opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                    Speakers
                </p>
            </li>
            <li className="relative group">
                <a href="/" className="inline-block transition-transform duration-10 group-hover:translate-y-[-10px] group-hover:opacity-0">
                    FAQ
                </a>
                <a href="/" className="absolute text-white inline-block transition-transform duration-10 translate-y-[10px] translate-x-[-33px] opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                    FAQ
                </a>
            </li>
            <li className="relative group">
                <a href="/" className="inline-block transition-transform duration-10 group-hover:translate-y-[-10px] group-hover:opacity-0">
                    Sponsers
                </a>
                <a href="/" className="absolute text-white inline-block transition-transform duration-10 translate-y-[10px] translate-x-[-72px] opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                    Sponsers
                </a>
            </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

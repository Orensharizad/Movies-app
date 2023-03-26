import '../../assets/styles/main.scss'
import { LogoIcon } from "../../assets/icon-libary";

export default function Home() {
  return (
    <section className="home-page">
      <div className='home-page-header '>
        <div className="logo"><LogoIcon /></div>
        <button className='btn-sign-in'>Sign In</button>
      </div>

      <div className='home-page-content'>
        <h1 className='content-title'>Unlimited movies, TV shows, and more.</h1>
        <h3 className='content-subtitle'>Watch anywhere. Cancel anytime.</h3>
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <button className='content-btn'>
          Get Started
        </button>
      </div>





    </section>
  )
}

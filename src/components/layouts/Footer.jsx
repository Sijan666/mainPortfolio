import Container from "../Container"
import Flex from "../Flex"
import logo from '../../assets/logo.png'
import Images from "../Images"
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs"
import { GoHeartFill } from "react-icons/go"
import { SiGmail } from "react-icons/si"
import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <>
      <div className="py-7.5 bg-[#0F172B]">
        <Container className={'w-[360px] lg:w-[1140px]'}>
          <div className={'lg:flex lg:justify-between'}>
              {/* logo part start */}
              <div className="logo ">
                <Link to={'/'}>
                  <Images imgSrc={logo} className={'mx-auto mb-5 lg:mb-0'}/>
                </Link>
              </div>
              {/* logo part end */}
              {/* text part start */}
              <p className="text-[#E5E7EB] text-center mb-5 lg:mb-0 text-[15px]">© 2026 Majharul. Design by Majharul.</p>
              {/* text part end */}
              {/* social media links start */}
              <div className="socialIcons flex gap-x-5 text-white justify-center lg:justify-between pt-2 lg:pt-0 ">
                  <Link to={'/'}>
                    <BsGithub/>
                  </Link>
                  <Link to={'/'}>
                    <BsInstagram/>
                  </Link>
                  <Link to={'/'}>
                    <BsFacebook/>
                  </Link>
                  <Link to={'/'}>
                    <BsTwitter/>
                  </Link>
                  <Link to={'/'}>
                    <SiGmail/>
                  </Link>
              </div>
              {/* social media links end */}
          </div>
        </Container>
      </div>
    </>
  )
}

export default Footer

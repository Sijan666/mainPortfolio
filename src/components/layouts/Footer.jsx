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
        <Container>
          <Flex className={'justify-between'}>
              {/* logo part start */}
              <div className="logo">
                <Link to={'/'}>
                  <Images imgSrc={logo}/>
                </Link>
              </div>
              {/* logo part end */}
              {/* text part start */}
              <p className="text-[#E5E7EB] text-[15px]">© 2026 Majharul. Design by Majharul.</p>
              {/* text part end */}
              {/* social media links start */}
              <div className="socialIcons flex gap-x-4 text-white">
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
          </Flex>
        </Container>
      </div>
    </>
  )
}

export default Footer

import Container from "../Container"
import Flex from "../Flex"
import logo from '../../assets/logo.png'
import Images from "../Images"
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs"
import { GoHeartFill } from "react-icons/go"
import { SiGmail } from "react-icons/si"


const Footer = () => {
  return (
    <>
      <div className="py-7.5 bg-[#0F172B]">
        <Container>
          <Flex className={'justify-between'}>
              {/* logo part start */}
              <div className="logo">
                  <Images imgSrc={logo}/>
              </div>
              {/* logo part end */}
              {/* text part start */}
              <p className="text-[#E5E7EB] text-[15px]">© 2026 Dennis. Design with <GoHeartFill className="text-red-700 inline-block items-center"/> by Majharul.</p>
              {/* text part end */}
              {/* social media links start */}
              <div className="socialIcons flex gap-x-4 text-white">
                  <BsGithub/>
                  <BsInstagram/>
                  <BsFacebook/>
                  <BsTwitter/>
                  <SiGmail/>
              </div>
              {/* social media links end */}
          </Flex>
        </Container>
      </div>
    </>
  )
}

export default Footer

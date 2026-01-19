import Container from "../Container"
import Flex from "../Flex"
import Images from "../Images"
import logo from '../../assets/logo.png'
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs"


const Header = () => {
    return (
        <>
        <div className="bg-[#0F172B] py-6 fixed z-11 left-1/2 -translate-x-1/2 w-full">
            <Container>
                <Flex className={'justify-between'}>
                    {/* logo part start */}
                    <div className="logo">
                        <Images imgSrc={logo}/>
                    </div>
                    {/* logo part end */}
                    {/* menu part start */}
                    <ul className="flex gap-x-4">
                        <li className="text-[15px] font-medium text-[#FFFFFF]/60">Home</li>
                        <li className="text-[15px] font-medium text-[#FFFFFF]/60">About Me</li>
                        <li className="text-[15px] font-medium text-[#FFFFFF]/60">Services</li>
                        <li className="text-[15px] font-medium text-[#FFFFFF]/60">Experience</li>
                        <li className="text-[15px] font-medium text-[#FFFFFF]/60">Projects</li>
                        <li className="text-[15px] font-medium text-[#FFFFFF]/60">Blogs</li>
                        <li className="text-[15px] font-medium text-[#FFFFFF]/60">Contact Me</li>
                    </ul>
                    {/* menu part end */}
                    {/* social media links start */}
                    <div className="socialIcons flex gap-x-4 text-white">
                        <BsGithub/>
                        <BsInstagram/>
                        <BsFacebook/>
                    </div>
                    {/* social media links end */}
                </Flex>
            </Container>
        </div>
        </>
    )
}

export default Header
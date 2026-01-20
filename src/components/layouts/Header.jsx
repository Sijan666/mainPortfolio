import Container from "../Container"
import Flex from "../Flex"
import Images from "../Images"
import logo from '../../assets/logo.png'
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs"
import { Link } from "react-router-dom"


const Header = () => {
    return (
        <>
        <div className="bg-[#0F172B] py-6 fixed z-11 left-1/2 -translate-x-1/2 w-full">
            <Container>
                <Flex className={'justify-between'}>
                    {/* logo part start */}
                    <div className="logo">
                        <Link to={'/'}>
                            <Images imgSrc={logo}/>
                        </Link>
                    </div>
                    {/* logo part end */}
                    {/* menu part start */}
                    <ul className="flex gap-x-4">
                        <li className="text-[15px] font-medium text-[#FFFFFF]/60">
                            <Link to={'/'}>
                                Home
                            </Link>
                        </li>
                        <li className="text-[15px] font-medium text-[#FFFFFF]/60">
                            <Link to={'/'}>
                                About Me
                            </Link>
                        </li>
                        <li className="text-[15px] font-medium text-[#FFFFFF]/60">
                            <Link to={'/'}>
                                Services
                            </Link>
                        </li>
                        <li className="text-[15px] font-medium text-[#FFFFFF]/60">
                            <Link to={'/'}>
                                Experience
                            </Link>
                        </li>
                        <li className="text-[15px] font-medium text-[#FFFFFF]/60">
                            <Link to={'/'}>
                                Projects
                            </Link>
                        </li>
                        <li className="text-[15px] font-medium text-[#FFFFFF]/60">
                            <Link to={'/'}>
                                Blogs
                            </Link>
                        </li>
                        <li className="text-[15px] font-medium text-[#FFFFFF]/60">
                            <Link to={'/'}>
                                Contact Me
                            </Link>
                        </li>
                    </ul>
                    {/* menu part end */}
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
                    </div>
                    {/* social media links end */}
                </Flex>
            </Container>
        </div>
        </>
    )
}

export default Header
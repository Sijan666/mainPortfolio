import Container from "../Container"
import Flex from "../Flex"
import Images from "../Images"
import logo from '../../assets/logo.png'
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs"
import { Link } from "react-router-dom"


const Header = () => {
    return (
        <>
        <div className="bg-[#0F172B] py-6 lg:fixed z-11 lg:left-1/2 lg:-translate-x-1/2 lg:w-full w-[395px]">
            <Container className={'w-[360px] lg:w-[1140px]'}>
                <div className='lg:flex lg:justify-between'>
                    {/* logo part start */}
                    <div className="logo">
                        <Link to={'/'}>
                            <Images imgSrc={logo} className={'mx-auto mb-5 lg:mb-0'}/>
                        </Link>
                    </div>
                    {/* logo part end */}
                    {/* menu part start */}
                    <ul className="flex gap-x-3 justify-between mx-auto">
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
                        {/* <li className="text-[15px] font-medium text-[#FFFFFF]/60">
                            <Link to={'/'}>
                                Experience
                            </Link>
                        </li> */}
                        <li className="text-[15px] font-medium text-[#FFFFFF]/60">
                            <Link to={'/'}>
                                Projects
                            </Link>
                        </li>
                        {/* <li className="text-[15px] font-medium text-[#FFFFFF]/60">
                            <Link to={'/'}>
                                Blogs
                            </Link>
                        </li> */}
                        <li className="text-[15px] font-medium text-[#FFFFFF]/60">
                            <Link to={'/'}>
                                Contact Me
                            </Link>
                        </li>
                    </ul>
                    {/* menu part end */}
                    {/* social media links start */}
                    <div className="socialIcons flex gap-x-5 text-white justify-center lg:justify-between pt-5 lg:pt-0 ">
                        <Link to={'/'}>
                            <BsGithub className="text-2xl lg:text-[15px]"/>
                        </Link>
                        <Link to={'/'}>
                            <BsInstagram className="text-2xl lg:text-[15px]"/>
                        </Link>
                        <Link to={'/'}>
                            <BsFacebook className="text-2xl lg:text-[15px]"/>
                        </Link>
                    </div>
                    {/* social media links end */}
                </div>
            </Container>
        </div>
        </>
    )
}

export default Header
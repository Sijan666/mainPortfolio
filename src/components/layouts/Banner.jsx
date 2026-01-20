import Container from "../Container"
import Flex from "../Flex"
import Images from "../Images"
import bannerImg from '../../assets/bannerImg.png'
import Button from "../Button"
import { Typewriter } from "react-simple-typewriter"


const Banner = () => {
    return (
        <>
        <div className="bg-[#0F172B] relative">
            <div className="absolute inset-0 bg-[#FE9A00]/5 opacity-50"></div>
            <Container className={'relative z-10'}>
                <Flex className={'justify-between'}>
                    <div className="leftSide">
                        <h2 className="font-bold text-[40px] text-white pb-0.5">Hey! I'm </h2>
                        <h1 className="text-[#FE9A00] font-bold text-[40px]">
                            <Typewriter
                                words={['Full Stack Developer', 'Majharul Islam']}
                                loop={true}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </h1>
                        {/* <h3 className="">Front-End Web Developer</h3> */}
                        <p className="text-[15px] text-[#90A1B9] py-[15px]">A passionate Full-Stack Developer from Bangladesh . Always curious to learn, explore, and collaborate.</p>
                        <Button btnText={'Hire Me'}/>
                        <Button btnText={'Download CV'} className={'ml-2'}/>
                    </div>
                    <div className="rightSide">
                        <Images imgSrc={bannerImg}/>
                    </div>
                </Flex>
            </Container>
        </div>
        </>
    )
}

export default Banner


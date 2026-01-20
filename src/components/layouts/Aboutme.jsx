import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import about from '../../assets/about.png'
import Button from '../Button'

const Aboutme = () => {
    return (
        <>
        <div className="py-[95px] bg-[#1D293D]">
            <Container>
                <Flex className={'justify-between gap-x-15'}>
                    <div className="left w-[40%]">
                        <Images imgSrc={about} className={'w-full'}/>
                    </div>
                    <div className="right w-[60%]">
                        <h3 className='font-semibold text-[24px] text-white'>I'm a Passionate Web Designer</h3>
                        <p className='text-[#90A1B9] text-[15px] py-6'>Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development cycle for dynamic web projects. The as opposed to using 'Content here, content here', making it look like readable English.</p>
                        <p className='text-[#90A1B9] text-[15px] pb-8'>I'm a professional web designer. My motive is to build a best web design with my all years of experience.</p>
                        <Button btnText={'See Work'}/>
                    </div>
                </Flex>
            </Container>
        </div>
        </>
    )
}

export default Aboutme
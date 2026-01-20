import React from 'react'
import Container from '../Container'
import Button from '../Button'

const Hireme = () => {
    return (
        <>
        <div className="bg-[url('/src/assets/Section.png')] bg-center bg-cover bg-no-repeat py-20">
            <Container>
                <div className="text-center mx-auto">
                    <h3 className='text-[24px] text-white font-semibold'>I Am Available For Freelancer Projects.</h3>
                    <p className='text-[#FFFFFF]/80 text-[15px] pt-6'>Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.</p>
                    <Button btnText={'Hire Me'} className={'mt-8'}/>
                </div>
            </Container>
        </div>
        </>
    )
}

export default Hireme
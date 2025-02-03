import React from 'react'
import Header from './Header'
import Button from './Button'
import About from './About'

const Hero = () => {
    return (
        <div id='home' className='px-auto w-full h-[1077px] p-4 bg-[url(BannerBackground.png)] bg-no-repeat bg-[length:45%_1077px] bg-right-top relative'>
            <Header />
            <div className='max-w-[1240px] mx-auto my-2 md:flex items-center justify-center'>

                <div className='p-[1.5rem] mx-auto text-[#4C4C4C] font-semibold md:text-start text-center'>
                    <h1 className='text-[1.8rem] md:text-[2.2rem] md:leading-[63.14px] font-bold'>Your Favourite Food <br />
                        Delivered Hot & <br />
                        Fresh</h1>
                    <p className='mb-[1.5rem]'>Healthy switcher chefs do all the prep work, like <br />
                        peeding, chopping & marinating, so you can cook <br />
                        a fresh food.</p>
                    <Button text='Order Now' />
                </div>
                <div className='w-[18rem] h-[18rem] sm:w-[25rem] sm:h-[25rem] mx-auto md:w-[35rem] md:h-[35rem]'><img src="Bowl.png" className='' /></div>
            </div>
            <About />
        </div>
    )
}

export default Hero
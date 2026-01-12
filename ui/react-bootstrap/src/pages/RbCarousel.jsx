import { Carousel, CarouselItem } from 'react-bootstrap'

const RbCarousel = () => {
    const images = [
        "https://images.unsplash.com/photo-1761839258075-585182da7521?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1762542208030-f85b5f59fa15?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1767867102530-b757e80a55c9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
    return <>
        <Carousel>
            {
                images.map(item => <CarouselItem key={item} >
                    <img src={item} alt="" className='w-100' />
                </CarouselItem>)
            }
        </Carousel>
    </>
}

export default RbCarousel
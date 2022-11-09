import {Carousel, Image} from 'react-bootstrap';

export default function HomeCarousel() {
return (
    <div >
    <Carousel className='vh-75 w-100 d-inline-block mb-5 shadow' fade>
    <Carousel.Item>
        <Image
        className="d-block mx-auto img-fit  carousel-height carousel-caption-bg"
        src="https://www.inspirationsyndication.com/wp-content/uploads/2021/09/samsung-memory-J8Cfm4W8gd8-unsplash.jpg"
        alt="First slide"
        />
        <Carousel.Caption className='container d-flex flex-column align-items-center justify-content-center vh-25 '>
        <div  className='carousel-text'>
        <h1>Gift yourself a new tech!</h1>
        <p>Buy the cheapest tech products in TechTrends using your computer or smartphone</p>
        </div>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <Image
        className="d-block mx-auto img-fit carousel-height carousel-caption-bg"
        src="https://iwanttobeproductive.com/wp-content/uploads/2019/04/office-gadgets.jpg"
        alt="Second slide"
        />

        <Carousel.Caption className='container d-flex flex-column align-items-center justify-content-center vh-25'>
        <div  className='carousel-text'>
        <h1>Life is incredible with new technology</h1>
        <p>Get yourself updated with the latest and cheapest smart devices in the market</p>
        </div>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <Image
        className="d-block mx-auto img-fit carousel-height carousel-caption-bg"
        src="https://helios-i.mashable.com/imagery/articles/04Xg9z0OpmENu16hFQ4XGcs/hero-image.fill.size_1248x702.v1652732411.png"
        alt="Third slide"
        />

        <Carousel.Caption className='container d-flex flex-column align-items-center justify-content-center vh-25'>
        <div  className='carousel-text'>
        <h1>Ran out of cash?</h1>
        <p>
            Don't worry, we got you. Use your E-wallet instead!
        </p>
        </div>
        </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
    </div>
);
}

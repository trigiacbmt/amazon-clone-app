import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <div className="relative">
            <div className ="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-10"/>
            <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={5000}>
                <div>
                    <img loading="lazy" src="https://links.papareact.com/gi1" alt="Amazon carousel 1"/>
                </div>
                <div>
                    <img loading="lazy" src="https://links.papareact.com/6ff" alt="Amazon carousel 2"/>
                </div>
                <div>
                    <img loading="lazy" src="https://links.papareact.com/7ma" alt="Amazon carousel 3"/>
                </div>
            </Carousel>
        </div>
    )
}

export default Banner;
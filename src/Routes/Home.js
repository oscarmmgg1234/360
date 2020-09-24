import React from "react";
import '../RoutesCSS/Home.css'
import {Container,Row,Carousel,Col} from 'react-bootstrap'

export default class home extends React.Component{
render() {
    return(
    <>
        <div className={"topHeader"}>
        JS AUTO DETAIL SUPPLIES OUTLET PD
        </div>
        <div className={"content"}>
            <Carousel interval={4000}>

                <Carousel.Item>

                    <img
                        className={"carouselImage"}
                        src={require('../Assets /Products/crystalCleaner.png')}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>360 Crystal Cleaner</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={"carouselImage"}
                        src={require('../Assets /Products/BrazilianMist.png')}
                        alt="second slide"
                    />

                    <Carousel.Caption>
                        <h3>360 Brazilian Mist</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={"carouselImage"}
                        src={require('../Assets /Products/HydroMist.png')}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>360 Hydro Mist</h3>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
        <div className={"contact"}>
        contact
        </div>
    </>

    );
}
}

let styles ={

}
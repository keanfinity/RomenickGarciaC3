import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function FeaturedProducts() {
    return (
        <div className='d-flex flex-column my-5 banner-bg p-5 text-white '>
        <h2>Check your favorite brands</h2>
        <Row className="my-3 text-dark h-100">
            <Col className="my-2" xs={12} md={6} lg={3}>
                <Card className="card-height" >
                <Card.Img  variant="top" src="https://www.bosshunting.com.au/wp-content/uploads/2020/08/Be076f5.jpg" />
                <Card.Header>
                <Card.Title>Apple</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                    Explore all-new personalization features, privacy and security enhancements, and more ways to communicate seamlessly.
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='text-center'>
                <Button className="w-50" as = {Link} to={"/products"} >View</Button>
                </Card.Footer>
                </Card>
            </Col>
            <Col className="my-2" xs={12} md={6} lg={3}>
                <Card className="card-height">
                <Card.Img variant="top" src="https://p.kindpng.com/picc/s/2-24676_samsung-logo-transparent-image-samsung-foundry-logo-hd.png" />
                <Card.Header>
                    <Card.Title>Samsung</Card.Title>
                    </Card.Header>
                <Card.Body>
                    <Card.Text>
                    Buy with discounts the cutting-edge technology of Samsung's mobile phones, home electronics, shop Galaxy watches and earbuds at the best price.
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='text-center'>
                <Button className="w-50" as = {Link} to={"/products"} >View</Button>
                </Card.Footer>
                </Card>
            </Col>
            <Col className="my-2" xs={12} md={6} lg={3}>
                <Card className="card-height">
                <Card.Img variant="top" src="https://indiatechnologynews.in/wp-content/uploads/2019/05/Oppos-New-Logo-30-05-19-750x460-750x400.jpg" />
                <Card.Header>
                    <Card.Title>Oppo</Card.Title>
                    </Card.Header>
                <Card.Body>
                    <Card.Text>
                    View latest OPPO phone with high camera quality, trendy design and advanced specifications. A mobile phone brand designs innovative mobile photography & video technology.
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='text-center'>
                <Button className="w-50" as = {Link} to={"/products"} >View</Button>
                </Card.Footer>
                </Card>
            </Col>
            <Col className="my-2" xs={12} md={6} lg={3}>
                <Card className="card-height">
                <Card.Img variant="top" src="https://images6.alphacoders.com/115/1155279.jpg" />
                <Card.Header>
                    <Card.Title>Xiaomi</Card.Title>
                    </Card.Header>
                <Card.Body>
                    <Card.Text>
                As a top-three global smartphone company and a leading consumer AIoT platform, Xiaomi is fully committed to leveraging its scale and efficiency to create a sustainable economy for our users, employees, partners and the planet.
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='text-center'>
                <Button className="w-50" as = {Link} to={"/products"} >View</Button>
                </Card.Footer>
                </Card>
            </Col>
        </Row>
        </div>
    );
}

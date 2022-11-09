import { Card, Button, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
import HomeBanner from './HomeBanner';


export default function CourseCard({props}) {


	const { _id, productName,productBrand, productModel, productType, description, price, stocks, imgSource } = props;


    return (
        <>
        <Col className="my-2" xs={12} md={6} lg={3}>
            <Card className="my-3 card-height  card-border shadow-md card-bg">
            <Card.Img className='img-fluid w-100 product-img-fit'
                src={imgSource}
            />
                <Card.Header className='py-3 mb-3 d-flex align-items-center justify-content-center'>
                <Card.Title>
                    {productBrand} {productName} - {productModel}
                </Card.Title>
                </Card.Header>
                <Card.Body>
                <Card.Subtitle>
                    Description:
                </Card.Subtitle>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Subtitle>
                    Price:
                </Card.Subtitle>
                <Card.Text>
                    Php {price}
                </Card.Text>
                <Card.Subtitle>
                    Stocks:
                </Card.Subtitle>
                <Card.Text>
                    <p id='stocks'>{stocks} available</p>
                </Card.Text>

            </Card.Body>
            <Card.Footer>
            <Button className='w-100 my-3 btn-outline-dark' variant='none' as={Link} to={`/products/buy/${_id}`}>BUY</Button>
            </Card.Footer>
        </Card>
            </Col>
        
        </>
    )
}
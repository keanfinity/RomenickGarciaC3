import { Row, Col, Card } from "react-bootstrap";

export default function HotDeals(){

	return(
		<Row className="my-3">
            <Col className="my-2" xs={12} md={4}>
                <Card className="cardHighlight">
                    <Card.Body>
                    <Card.Header className="th-bg p-3 my-3">
                        <Card.Title>
                            <h2>Receive Your Parcel at Home</h2>
                        </Card.Title>
                    </Card.Header>
                        <Card.Text>
                            Pariatur adipisicing aute do amet dolore cupidatat. Eu labore aliqua eiusmod commodo occaecat mollit ullamco labore minim. Minim irure fugiat anim ea sint consequat fugiat laboris id. Lorem elit irure mollit officia incididunt ea ullamco laboris excepteur amet. Cillum pariatur consequat adipisicing aute ex.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col className="my-2" xs={12} md={4}>
                <Card className="cardHighlight">
                    <Card.Body>
                    <Card.Header className="th-bg p-3 my-3">
                        <Card.Title>
                            <h2>Buy Now, Pay Later</h2>
                        </Card.Title>
                        </Card.Header>
                        <Card.Text>
                            Ex Lorem cillum consequat ad. Consectetur enim sunt amet sit nulla dolor exercitation est pariatur aliquip minim. Commodo velit est in id anim deserunt ullamco sint aute amet. Adipisicing est Lorem aliquip anim occaecat consequat in magna nisi occaecat consequat et. Reprehenderit elit dolore sunt labore qui.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col className="my-2" xs={12} md={4}>
                <Card className="cardHighlight">
                    <Card.Body>
                        <Card.Header className="th-bg p-3 my-3">
                        <Card.Title>
                            <h2>Easy Pay, with your E-Wallet</h2>
                        </Card.Title>
                        </Card.Header>
                        <Card.Text>
                            Minim nostrud dolore consequat ullamco minim aliqua tempor velit amet. Officia occaecat non cillum sit incididunt id pariatur. Mollit tempor laboris commodo anim mollit magna ea reprehenderit fugiat et reprehenderit tempor. Qui ea Lorem dolor in ad nisi anim. Culpa adipisicing enim et officia exercitation adipisicing.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
	)
}
import { NextPage } from 'next';
import { Col, Row } from 'react-bootstrap';

const Home: NextPage = () => {
	return (
		<>
			<Row className="text-center mt-5">
				<Col>
					<h1>Elköltözött</h1>
					<p>
						Az MVM saját kalkulátort adott ki, ami sokkal pontosabb
						ennél a kalkulátornál, így inkább az alábbi linkeket
						használd!
					</p>
				</Col>
			</Row>
            <Row xs={1} sm={2} className="text-center mt-5">
                <Col>
                    <h2>Áram</h2>
                    <a className='btn btn-primary' href="https://www.mvmnext.hu/aram/pages/online/arkalkulator.jsf">
                        MVM Áram Kalkulátor
                    </a>
                </Col>

                <Col>
                    <h2>Földgáz</h2>
                    <a className='btn btn-primary' href="https://www.mvmnext.hu/foldgaz/Egyetemes-Szolgaltatas/Ugyintezes/Arak-dijszabasok/Eves-dijkalkulator/dijkalkulator">
                        MVM Földgáz Kalkulátor
                    </a>
                </Col>
            </Row>
		</>
	);
};

export default Home;
import { ChangeEvent } from 'react';
import { Col, FormControl, InputGroup, Row } from 'react-bootstrap';

const NagyCsaladosInput = ({
	setNagyCsaladosKedvezmeny,
}: {
	setNagyCsaladosKedvezmeny: (kedvezmeny: number) => void;
}) => {
	const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
        let gyerekSzam = parseInt(e.target.value);
		let kedvezmeny = 0;
		if (gyerekSzam >= 3) {
			kedvezmeny = 50 + (gyerekSzam - 3) * 25;
        }
		setNagyCsaladosKedvezmeny(kedvezmeny);
	};
	return (
		<Row className="gy-3" xs={1} md={2}>
			<Col>
				<p className="h3">Gyermekek száma</p>
				<InputGroup>
					<InputGroup.Text>Gyermekek száma</InputGroup.Text>
					<FormControl
						type="number"
						defaultValue={0}
						inputMode="numeric"
						aria-label='Gyermekek száma'
						onChange={inputChange}
					/>
				</InputGroup>
			</Col>
		</Row>
	);
};

export default NagyCsaladosInput;

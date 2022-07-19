import type { NextPage } from "next";
import { Col, FormControl, InputGroup, Row } from "react-bootstrap";
import { useState, useEffect, ChangeEvent } from "react";

const Home: NextPage = () => {
	const ARAM_ARA_REGI_PER_KWH = 36.9;
	const ARAM_ARA_UJ_PER_KWH = 140;
	const ARAM_ATLAG_FOGYASZTAS_HATAR = 210;

	const [aramForintban, setAramForintban] = useState<number>();
	const [aramKWHban, setAramKWHban] = useState<number>();

    function parseInput(input: string) {
        return parseFloat(input.replace(",", ".").replace(/\s/g, ""));
    }

	const forintChange = (e: ChangeEvent<HTMLInputElement>) => {
		let forint = 0;
		if (e.target.value) {
			forint = parseInput(e.target.value.replace(/\s/g, ''));
		}
        setAramForintban((parseInput(e.target.value) || 0))
		setAramKWHban(forint / ARAM_ARA_REGI_PER_KWH);
	};


    const [ujRezsi, setUjRezsi] = useState<number>(0);
    useEffect(() => {
        let sum = 0;
        if (aramKWHban) {
            if (aramKWHban > ARAM_ATLAG_FOGYASZTAS_HATAR) {
                sum = 
                    (ARAM_ATLAG_FOGYASZTAS_HATAR * ARAM_ARA_REGI_PER_KWH) // rezsicsokkentett hanyad
                    + 
                    ((aramKWHban - ARAM_ATLAG_FOGYASZTAS_HATAR) * ARAM_ARA_UJ_PER_KWH); // atlag feletti rezsi ar
            } else {
                sum = aramKWHban * ARAM_ARA_REGI_PER_KWH;
            }
        }
        setUjRezsi(sum);
    }, [aramForintban, aramKWHban]);
	return (
		<>
            <h3></h3>
			<p>
				Adja meg, hogy mennyit fizetett eddig, vagy mennyit fogyaszt
				havonta!
			</p>
			<form>
				<Row className="gy-3" xs={1} md={2}>
					<Col>
						<InputGroup>
							<FormControl
								size="sm"
								placeholder="Havi fogyasztás forintban"
								onChange={forintChange}
                                inputMode="numeric"
								value={aramForintban ? Intl.NumberFormat('hu-HU').format(aramForintban) : ""}
							/>
							<InputGroup.Text>Ft</InputGroup.Text>
						</InputGroup>
						<span><br /></span>
						<InputGroup>
							<FormControl
                                disabled
								size="sm"
								placeholder="Havi fogyasztás kW-ban"
                                inputMode="numeric"
								value={aramKWHban ? Intl.NumberFormat('hu-HU').format(aramKWHban) : ""}
							/>
							<InputGroup.Text>kWh</InputGroup.Text>
						</InputGroup>
					</Col>

					<Col>
						<p>Ezentúl fizetendő: <strong className="fw-bold">{Intl.NumberFormat('hu-HU').format(ujRezsi)} Ft</strong></p>
					</Col>
				</Row>
			</form>
		</>
	);
};

export default Home;

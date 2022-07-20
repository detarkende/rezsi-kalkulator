import { Col, FormControl, InputGroup, Row } from "react-bootstrap";
import { useState, useEffect, ChangeEvent } from "react";
import { ReactNode } from "react";

const Calculator = ({
    cim,
	mertekEgyseg,
	regiAr,
	ujAr,
	atlagFogyasztasHatara,
    setKoltsegek,
}: {
    cim: string,
	mertekEgyseg: string | ReactNode,
	regiAr: number,
	ujAr: number,
	atlagFogyasztasHatara: number,
    setKoltsegek: (setter: (prev: Map<string, number>) => Map<string, number>) => void,
}) => {
	const REZSI_ARA_REGI_PER_EGYSEG = regiAr;
	const REZSI_ARA_UJ_PER_Egyseg = ujAr;
	const REZSI_ATLAG_FOGYASZTAS_HATAR = atlagFogyasztasHatara;

	const [rezsiForintban, setRezsiForintban] = useState<number>();
	const [rezsiEgysegben, setRezsiEgysegben] = useState<number>();

	function parseInput(input: string) {
		return parseFloat(input.replace(",", ".").replace(/\s/g, ""));
	}

	const forintChange = (e: ChangeEvent<HTMLInputElement>) => {
		let forint = 0;
		if (e.target.value) {
			forint = parseInput(e.target.value.replace(/\s/g, ""));
		}
		setRezsiForintban(parseInput(e.target.value) || 0);
		setRezsiEgysegben(forint / REZSI_ARA_REGI_PER_EGYSEG);
	};

    const rezsiChange = (e: ChangeEvent<HTMLInputElement>) => {
        let rezsi = 0;
        if (e.target.value) {
            rezsi = parseInput(e.target.value);
        }
        setRezsiEgysegben(parseInput(e.target.value) || 0);
        setRezsiForintban(rezsi * REZSI_ARA_REGI_PER_EGYSEG);
    }

	const [ujRezsi, setUjRezsi] = useState<number>(0);
	useEffect(() => {
		let sum = 0;
		if (rezsiEgysegben) {
			if (rezsiEgysegben > REZSI_ATLAG_FOGYASZTAS_HATAR) {
				sum =
					REZSI_ATLAG_FOGYASZTAS_HATAR * REZSI_ARA_REGI_PER_EGYSEG + // rezsicsokkentett hanyad
					(rezsiEgysegben - REZSI_ATLAG_FOGYASZTAS_HATAR) *
						REZSI_ARA_UJ_PER_Egyseg; // atlag feletti rezsi ar
			} else {
				sum = rezsiEgysegben * REZSI_ARA_REGI_PER_EGYSEG;
			}
		}
		setUjRezsi(sum);
	}, [rezsiForintban, rezsiEgysegben]);

    useEffect(() => {
        setKoltsegek((prev: Map<string, number>) => {
            prev.set(cim, ujRezsi);
            return new Map(Array.from(prev));
        });
    }, [ujRezsi])

	return (
		<>
			<h3>{cim}</h3>
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
                                value={
                                    rezsiForintban
										? Intl.NumberFormat("hu-HU").format(
												rezsiForintban
										  )
										: ""
                                }
							/>
							<InputGroup.Text>Ft</InputGroup.Text>
						</InputGroup>
						<span>
							vagy
						</span>
						<InputGroup>
							<FormControl
								//disabled
								size="sm"
								placeholder="Havi fogyasztás"
								inputMode="numeric"
								value={
									rezsiEgysegben
										? Intl.NumberFormat("hu-HU").format(
												rezsiEgysegben
										  )
										: ""
								}
                                onChange={rezsiChange}
							/>
							<InputGroup.Text>{mertekEgyseg}</InputGroup.Text>
						</InputGroup>
					</Col>

					<Col>
						<p>
							Ezentúl fizetendő:{" "}
							<strong className="fw-bold">
								{Intl.NumberFormat("hu-HU").format(ujRezsi)} Ft
							</strong>
						</p>
					</Col>
				</Row>
			</form>
		</>
	);
};

export default Calculator;

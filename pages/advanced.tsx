import FormField from "@/components/Advanced/FormField";
import { useState, useEffect } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Fogyasztasok from "@/components/Advanced/Fogyasztasok";

function Advanced() {
	const [rezsi, setRezsi] = useState({
		aram: 0,
		ejszakaiAram: 0,
		gaz: 0,
	});
	const [gyerekek, setGyerekek] = useState(0);

	const aramTarifak = [
		{ id: 1, nev: "A1/A2", ar: 70.104 },
		{ id: 2, nev: "B", ar: 62.884 },
	];
	const [aramTarifa, setAramTarifa] = useState(aramTarifak[0]);

	return (
		<>
            <Row xs={1} sm={2} lg={3}>
                <Col>
                    <Form.Group>
                        <Form.Label>Áramtarifa</Form.Label>
                        <Form.Select onChange={(e) => setAramTarifa(aramTarifak.find(t => t.id === Number(e.target.value)) || aramTarifak[0])}>
                            { aramTarifak.map((tarifa) => (
                                <option key={tarifa.id} value={tarifa.id}>{tarifa.nev}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>

                <Col>
                    <FormField 
                        type="number"
                        label="Gyermekek száma"
                        value={gyerekek || ""}
                        onChange={(e) => setGyerekek(Number(e.target.value))}
                    />
                </Col>
            </Row>           

			<Row xs={1} sm={2} lg={3}>
				<Fogyasztasok rezsi={rezsi} setRezsi={setRezsi} />
			</Row>

			<pre className="mt-5">
				<code>{JSON.stringify(rezsi, null, "\t")}</code>
			</pre>
            <pre className="mt-5">
				<code>{JSON.stringify(aramTarifa, null, "\t")}</code>
			</pre>
		</>
	);
}

export default Advanced;

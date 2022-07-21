import FormField from "@/components/Advanced/FormField";
import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";

function Advanced() {
    const [rezsi, setRezsi] = useState({
        aram: 0,
        ejszakaiAram: 0,
        gaz: 0,
    });
    const [gyerekek, setGyerekek] = useState(0);

    const [valto, setValto] = useState({
        aram: {}
    });

    return (
        <>
            <Row xs={1} sm={2} lg={3}>
                <Col>
                    <FormField
                        label="Havi nappali áram fogyasztás"
                        type="number"
                        postfix={"kWH"}
                        value={ rezsi.aram || "" }
                        onChange={(e) => {setRezsi(rezsi => ({...rezsi, aram: Number(e.target.value)}))}}
                    />
                </Col>

                <Col>
                    <FormField
                        label="Havi éjszakai áram fogyasztás"
                        type="number"
                        postfix={"kWH"}
                        value={ rezsi.ejszakaiAram || "" }
                        onChange={(e) => {setRezsi(rezsi => ({...rezsi, ejszakaiAram: Number(e.target.value)}))}}
                    />
                </Col>

                <Col>
                    <FormField
                        label="Havi gáz fogyasztás"
                        type="number"
                        postfix={<span>m<sup>3</sup></span>}
                        value={ rezsi.gaz || "" }
                        onChange={(e) => {setRezsi(rezsi => ({...rezsi, gaz: Number(e.target.value)}))}}
                    />
                </Col>
            </Row>

            <pre className="mt-5">
                <code>
                    {JSON.stringify(rezsi, null, '\t')}
                </code>
            </pre>
        </>
    );
}

export default Advanced;
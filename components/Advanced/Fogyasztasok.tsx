import { Col } from "react-bootstrap";
import FormField from "./FormField";

interface Rezsi {
    aram: number,
    ejszakaiAram: number,
    gaz: number,
}

interface FogyasztasokProps {
    rezsi: Rezsi,
    setRezsi: (setterFn: (rezsi: Rezsi) => Rezsi) => void,
}

function Fogyasztasok({rezsi, setRezsi}: FogyasztasokProps) {
    return (
        <>
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
        </>
    );
}

export default Fogyasztasok;
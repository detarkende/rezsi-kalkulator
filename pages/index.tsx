import type { NextPage } from "next";
import { Col, FormControl, InputGroup, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import Calculator from "@/components/Calculator";

const Home: NextPage = () => {
    const [koltsegek, setKoltsegek] = useState<Map<string, number>>(new Map());
    const getMapValueSum = (map: Map<string, number>) => {
        let sum = 0;
        map.forEach((value) => {
            sum += value;
        }
        );
        return sum;
    }
    useEffect(() => {
        console.log('update');
    }, [koltsegek]);
	return (
		<>
			<div>
				<Calculator
                    setKoltsegek={setKoltsegek}
					cim="Áram"
					mertekEgyseg="kWh"
					regiAr={36.9}
					ujAr={140}
					atlagFogyasztasHatara={210}
				/>
			</div>
			<hr />
			<div>
				<Calculator
                    setKoltsegek={setKoltsegek}
					cim="Gáz"
					mertekEgyseg={
						<>
							m<sup>3</sup>
						</>
					}
					regiAr={109.9}
					ujAr={912.3}
					atlagFogyasztasHatara={144}
				/>
			</div>
            <p className="mt-3 fs-4">
                Összesen:&nbsp;
                <strong>{Intl.NumberFormat('hu-HU', {style: 'currency', currency: 'HUF'}).format(getMapValueSum(koltsegek))}</strong>
            </p>
		</>
	);
};

export default Home;
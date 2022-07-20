import type { NextPage } from "next";
import { Col, FormControl, InputGroup, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import Kalkulator from "@/components/Kalkulator";
import NagyCsaladosInput from "@/components/NagyCsaladosInput";
import { formatAsForint, getMapValuesSum } from '@/helpers';

const Home: NextPage = () => {
	const [koltsegek, setKoltsegek] = useState<Map<string, number>>(new Map());
	const [nagyCsaladosKedvezmeny, setNagyCsaladosKedvezmeny] = useState<number>(0);
    
	return (
		<>
			<div>
				<NagyCsaladosInput setNagyCsaladosKedvezmeny={setNagyCsaladosKedvezmeny} />
			</div>
			<hr className="my-4" />
			<div>
				<Kalkulator
                    setKoltsegek={setKoltsegek}
					cim="Áram"
					mertekEgyseg="kWh"
					regiAr={36.9}
					ujAr={140}
					atlagFogyasztasHatara={210}
				/>
			</div>
			<hr className="my-4" />
			<div>
				<Kalkulator
                    setKoltsegek={setKoltsegek}
					cim="Gáz"
					mertekEgyseg={
						<>
							m<sup>3</sup>
						</>
					}
					regiAr={109.9}
					ujAr={912.3}
					atlagFogyasztasHatara={144 + nagyCsaladosKedvezmeny}
				/>
			</div>
            <p className="mt-3 fs-4">
                Összesen:&nbsp;
                <strong>{formatAsForint(getMapValuesSum(koltsegek))}</strong>
            </p>
		</>
	);
};

export default Home;
import type { NextPage } from 'next';
import { Col, Form, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Kalkulator from '@/components/Kalkulator';
import NagyCsaladosInput from '@/components/NagyCsaladosInput';
import { formatAsForint, getMapValuesSum } from '@/helpers';
import { parseInput } from '@/helpers';

const Home: NextPage = () => {
	const [koltsegek, setKoltsegek] = useState<Map<string, number>>(new Map());
	const [nagyCsaladosKedvezmeny, setNagyCsaladosKedvezmeny] =
		useState<number>(0);

	const [aramRegiAr, setAramRegiAr] = useState<number>(36.9);
	const [aramUjAr, setAramUjAr] = useState<number>(70.1);

	const [gazRegiAr, setGazRegiAr] = useState<number>(102);
	const [gazUjAr, setGazUjAr] = useState<number>(747);

	const [varialasOpen, setVarialasOpen] = useState<boolean>(false);

	return (
		<>
			<div>
				<NagyCsaladosInput
					setNagyCsaladosKedvezmeny={setNagyCsaladosKedvezmeny}
				/>
			</div>
			<hr className="my-4" />
			<div>
				<Kalkulator
					setKoltsegek={setKoltsegek}
					cim="Áram"
					mertekEgyseg="kWh"
					regiAr={aramRegiAr}
					ujAr={aramUjAr}
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
					regiAr={gazRegiAr}
					ujAr={gazUjAr}
					atlagFogyasztasHatara={144 + nagyCsaladosKedvezmeny}
				/>
			</div>
			<p className="mt-3 fs-4">
				Összesen:&nbsp;
				<strong>{formatAsForint(getMapValuesSum(koltsegek))}</strong>
			</p>

			<div className="rounded bg-light p-3">
				<p className="text-muted">
					A kalkulátor az alábbi árakkal számol. Variáld kedvedre az
					árakat. (
					<a
						href="https://www.portfolio.hu/gazdasag/20220721/nemeth-szilard-rendkivuli-rezsibejelentest-tett-megvannak-az-uj-energia-es-foldgaz-arak-557387"
						target="_blank"
						rel="noreferrer"
						className="fs-italic text-muted"
					>
						Forrás
					</a>
					)

				</p>
				<button
					className='btn-unstyled border-0 bg-transparent px-0 mb-3'
					aria-expanded={varialasOpen}
					aria-controls='arak-modositasa'
					onClick={() => setVarialasOpen(prev => !prev)}
				>
					Árak módosítása
				</button>
				<Form id='arak-modositasa' className={`collapse ${varialasOpen ? 'show' : ''}`}>
					<Row xs={1} sm={2}>
						<Col>
							<Form.Group>
								<Form.Label>Áram csökkentett ár</Form.Label>
								<Form.Control
									type="number"
									inputMode="decimal"
									defaultValue={aramRegiAr}
									onChange={(e) =>
										setAramRegiAr(parseInput(e.target.value))
									}
								/>
							</Form.Group>
						</Col>
						<Col>
							<Form.Group>
								<Form.Label>Áram átlag feletti ár</Form.Label>
								<Form.Control
									type="number"
									inputMode="decimal"
									defaultValue={aramUjAr}
									onChange={(e) =>
										setAramUjAr(parseInput(e.target.value))
									}
								/>
							</Form.Group>
						</Col>
					</Row>
					<Row xs={1} sm={2}>
						<Col>
							<Form.Group>
								<Form.Label>Gáz csökkentett ár</Form.Label>
								<Form.Control
									type="number"
									inputMode="decimal"
									defaultValue={gazRegiAr}
									onChange={(e) =>
										setGazRegiAr(parseInput(e.target.value))
									}
								/>
							</Form.Group>
						</Col>
						<Col>
							<Form.Group>
								<Form.Label>Gáz átlag feletti ár</Form.Label>
								<Form.Control
									type="number"
									inputMode="decimal"
									defaultValue={gazUjAr}
									onChange={(e) =>
										setGazUjAr(parseInput(e.target.value))
									}
								/>
							</Form.Group>
						</Col>
					</Row>
				</Form>
			</div>
		</>
	);
};

export default Home;

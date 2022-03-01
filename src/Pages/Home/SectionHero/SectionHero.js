import "./SectionHero.scss";
import Touro from "../../../Assets/bull.svg";

import IconeValor1 from "../../../Assets/iconevalor1.svg";
import IconeValor2 from "../../../Assets/iconevalor2.svg";
import IconeValor3 from "../../../Assets/iconevalor3.svg";
import IconeValor4 from "../../../Assets/iconevalor4.svg";

const ListaValores = [
	{
		icone: `${IconeValor1}`,
		titulo: "total nsd",
		valor: "122,237",
	},
	{
		icone: `${IconeValor2}`,
		titulo: "nsd price",
		valor: "$ 829,984",
	},
	{
		icone: `${IconeValor3}`,
		titulo: "Total Donated",
		valor: "Total Donated",
	},
	{
		icone: `${IconeValor4}`,
		titulo: "total users",
		valor: "122,237",
	},
];

const SectionHero = () => {
	return (
		<section className="s-hero">
			<div className="container">
				<div className="main">
					<div className="txt">
						<span>The power of three</span>
						<h1>Nasdacoin Crypto Cycle System</h1>
					</div>
					<img src={Touro} alt="Tource" className="touro" />
				</div>

				<ul>
					{ListaValores &&
						ListaValores.map(({icone, titulo, valor}, index) => (
							<li key={index}>
								<div className="icone">
									<img src={icone} alt="icone" />
								</div>
								<div className="info">
									<p>{titulo}</p>
									<strong>{valor}</strong>
								</div>
							</li>
						))}
				</ul>
			</div>
		</section>
	);
};

export default SectionHero;

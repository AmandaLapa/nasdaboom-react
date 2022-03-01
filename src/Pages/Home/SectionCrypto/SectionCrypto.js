import "./SectionCrypto.scss";

import IconeCrypto1 from "../../../Assets/icon-heart.svg";
import IconeCrypto2 from "../../../Assets/icon-idea.svg";
import IconeCrypto3 from "../../../Assets/icon-diamond.svg";
import Player from "../../../Assets/play.svg";
import IconeNumero1 from "../../../Assets/iconeNumeros1.svg";
import IconeNumero2 from "../../../Assets/iconeNumeros2.svg";

const ListaCrypto = [
	{
		icone: `${IconeCrypto1}`,
		titulo: "Decentralization",
		texto: "NasdaBoom operates using Nasdacoin, which is a cryptocurrency with its own blockchain that can be freely used, quickly and safely, without the interference of any bank or government.",
	},

	{
		icone: `${IconeCrypto2}`,
		titulo: "Sustainability",
		texto: "NasdaBoom works from a robust system of cycles and sustainable slots allowing the community to expand continuously without losing stability.",
	},

	{
		icone: `${IconeCrypto3}`,
		titulo: "Reliability",
		texto: "NasdaBoom is a project developed by the same team responsible for Nasdacoin, a cryptocurrency which has, for two years been promoting financial freedom around the world.",
	},
];

const ListaNumeros = [
	{
		icone: `${IconeNumero1}`,
		titulo: "Circulating Supply",
		numero: "22.369.008 NSD",
	},
	{
		icone: `${IconeNumero2}`,
		titulo: "Max Supply",
		numero: "84.000.000 NSD",
	},
];

const SectionCrypto = () => {
	return (
		<section className="s-crypto">
			<div className="container">
				<div className="content">
					<div className="box">
						<div className="box-video">
							<div className="thumb"></div>
							<div className="player">
								<img src={Player} alt="player" />
								<span>VIEW DEMO</span>
							</div>
						</div>
						<div className="box-texto">
							<h2>
								Nasdacoin <span>Crypto</span>
							</h2>
							<p>Listed since 2018 in the cryptocurrency market, Nasdacoin celebrates its consolidation with NasdaBoom, a pioneer and completely safe Crypto Cycle project that will boost the crypto-currency from an open community.</p>
							<p>Using the power of number three ("The Power of Three") to provide financial freedom to its users, NasdaBoom is another audacious step on the path that will place Nasdacoin amongst the 10 largest cryptocurrencies in the world.</p>
						</div>
					</div>

					<ul className="info">
						{ListaCrypto &&
							ListaCrypto.map(({icone, titulo, texto}, index) => (
								<li key={index}>
									<img src={icone} alt="icone" />
									<h3>{titulo}</h3>
									<p>{texto}</p>
								</li>
							))}
					</ul>
				</div>

				<div className="numeros">
					<h3>
						Nasdacoin <span>numbers</span>
					</h3>

					<ul className="numb">
						{ListaNumeros &&
							ListaNumeros.map(({icone, titulo, numero}, index) => (
								<li key={index}>
									<div className="icone">
										<img src={icone} alt="icone" />
									</div>
									<div className="txt">
										<p>{titulo}</p>
										<strong>{numero}</strong>
									</div>
								</li>
							))}
					</ul>
				</div>
			</div>
		</section>
	);
};
export default SectionCrypto;

import "./SectionHow.scss";

import Reticencias from "../../../Assets/reticencias.svg";
import Fluxo from "../../../Assets/fluxo.svg";

import Icone1 from '../../../Assets/icon-return.svg'
import Icone2 from '../../../Assets/icon-wallet.svg'

const Item = [
	{
		numero: "1",
		texto: "You must purchase Nasdacoin (NSD) on exchanges, thus boosting currency market value.",
	},
	{
		numero: "2",
		texto: "You must register with NasdaBoom using your sponsor's ID and purchase your first slot.",
	},
	{
		numero: "3",
		texto: " Become a sponsor, invite your friends and complete your own cycles.",
	},
	{
		numero: "4",
		texto: "Purchase new slots to boost your earnings and accumulate NSD.",
	},
	{
		numero: "5",
		texto: "Trade or sell your crypto currencies on any exchange that has Nasdacoin listed.",
	},
];

const Lista = [
 {
  icone: `${Icone1}`,
  texto: 'Nulla at elit in ante elementum aliquam.'
 },
 {
  icone: `${Icone2}`,
  texto: 'Nulla at elit in ante elementum aliquam.'
 },
];

const SectionHow = () => {
	return (
		<section className="s-how">
			<div className="container">
				<div className="txt txt-center">
					<h2 className="title">
						How the <span>project works</span>
					</h2>
					<p>NasdaBoom is a donation system based on cycles in which users carry out transactions using Nasdacoin, which enables high turnover of earnings and duplication of assets, in addition to contributing to currency increasing in value.</p>
				</div>

				<div className="content">
					{Item &&
						Item.map(({numero, texto}, index) => (
							<div className="item" key={index}>
								<div className="num">{numero}</div>
								<p>{texto}</p>
							</div>
						))}

					<div className="item">
						<img src={Reticencias} alt="reticências" />
						<p>Etiam mattis, mauris sed sollicitudin lacinia, nulla</p>
					</div>
				</div>

				<div className="numbers">
					<div className="txts">
						<h3>
							Nasdacoin <span>numbers</span>
						</h3>
						<p>Donec maximus a sapien ac ornare. In tempor, urna a interdum malesuada, dolor neque tincidunt nisi, vel congue quam elit quis lorem. Integer ultricies et libero quis bibendum. Sed id cursus ligula, vehicula ultrices metus. Etiam dolor nulla.</p>
					</div>

					<div className="box">
						<img src={Fluxo} alt="fluxo" />
						<ul>
							{Lista &&
								Lista.map(({icone, texto}, index) => (
									<li key={index}>
										<div className="icone">
											<img src={icone} alt="icone" />
										</div>
										<p>{texto}</p>
									</li>
								))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SectionHow;

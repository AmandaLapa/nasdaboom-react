import FaqItem from "../../../Components/FaqItem/FaqItem";
import "./SectionFaq.scss";

const Faq = [
	{
		titulo: "What is NasdaBoom?",
		resposta: "NasdaBoom project is a Crypto Cycle System that seeks to integrate, in a single community, all users of Nasdacoin. Nasdacoin is an innovative cryptocurrency, which has been in the market for two years already.",
	},
	{
		titulo: "What is the main goal of NasdaBoom?",
		resposta: "NasdaBoom project is a Crypto Cycle System that seeks to integrate, in a single community, all users of Nasdacoin. Nasdacoin is an innovative cryptocurrency, which has been in the market for two years already.",
	},
	{
		titulo: "Why should I join NasdaBoom?",
		resposta: "NasdaBoom project is a Crypto Cycle System that seeks to integrate, in a single community, all users of Nasdacoin. Nasdacoin is an innovative cryptocurrency, which has been in the market for two years already.",
	},
	{
		titulo: "How to be part of NasdaBoom Project?",
		resposta: "NasdaBoom project is a Crypto Cycle System that seeks to integrate, in a single community, all users of Nasdacoin. Nasdacoin is an innovative cryptocurrency, which has been in the market for two years already.",
	},
	{
		titulo: "How to earn with NasdaBoom?",
		resposta: "NasdaBoom project is a Crypto Cycle System that seeks to integrate, in a single community, all users of Nasdacoin. Nasdacoin is an innovative cryptocurrency, which has been in the market for two years already.",
	},
	{
		titulo: "Why is NasdaBoom sustainable?",
		resposta: "NasdaBoom project is a Crypto Cycle System that seeks to integrate, in a single community, all users of Nasdacoin. Nasdacoin is an innovative cryptocurrency, which has been in the market for two years already.",
	},
	{
		titulo: "What are cycles?",
		resposta: "NasdaBoom project is a Crypto Cycle System that seeks to integrate, in a single community, all users of Nasdacoin. Nasdacoin is an innovative cryptocurrency, which has been in the market for two years already.",
	},
	{
		titulo: "What is cycle compression?",
		resposta: "NasdaBoom project is a Crypto Cycle System that seeks to integrate, in a single community, all users of Nasdacoin. Nasdacoin is an innovative cryptocurrency, which has been in the market for two years already.",
	},
	{
		titulo: "What happens if my referred person advances to the second slot and I have not yet purchased and activated that slot?",
		resposta: "NasdaBoom project is a Crypto Cycle System that seeks to integrate, in a single community, all users of Nasdacoin. Nasdacoin is an innovative cryptocurrency, which has been in the market for two years already.",
	},
];

const SectionFaq = () => {
	return (
		<section className="s-faq">
			<div className="container">
				<h2 className="title">
					<span>faq -</span> frequently asked questions
				</h2>

				<div className="content">{Faq && Faq.map(({titulo, resposta}, index) => <FaqItem key={index} titulo={titulo} resposta={resposta} />)}</div>
			</div>
		</section>
	);
};

export default SectionFaq;

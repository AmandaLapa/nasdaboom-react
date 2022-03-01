import React from "react";
import Header from "../../Components/Header/Header";
import "./Home.scss";

import SectionHero from "./SectionHero/SectionHero";
import SectionCrypto from "./SectionCrypto/SectionCrypto";
import SectionValues from "./SectionValues/SectionValues";
import SectionHow from "./SectionHow/SectionHow";
import SectionFaq from "./SectionFaq/SectionFaq";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
	return (
		<>
			<Header />
			<SectionHero />
			<SectionCrypto />
			<SectionValues />
			<SectionHow />
			<SectionFaq/>
			<Footer/>
		</>
	);
};
export default Home;

import "./SectionValues.scss";

import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, FreeMode} from "swiper/core";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import View from "../../../Assets/icon-group.svg";
import Icone1 from "../../../Assets/icon-money.svg";
import Icone2 from "../../../Assets/icon-coin.svg";
import Icone3 from "../../../Assets/icon-businees.svg";
import Icone4 from "../../../Assets/icon-rocket.svg";

import Seta from "../../../Assets/arrow-slide.svg";

const CardSlide = [
	{
		numero: "ID 8679",
		view: "275",
		info: [
			{
				icone: `${Icone1}`,
				titulo: "USD balance",
				valor: "$ 829,984",
			},
			{
				icone: `${Icone2}`,
				titulo: "USD balance",
				valor: "$ 829,984",
			},
			{
				icone: `${Icone3}`,
				titulo: "USD balance",
				valor: "$ 829,984",
			},
			{
				icone: `${Icone4}`,
				titulo: "USD balance",
				valor: "$ 829,984",
			},
		],
	},
	{
		numero: "ID 8679",
		view: "275",
		info: [
			{
				icone: `${Icone1}`,
				titulo: "USD balance",
				valor: "$ 929,984",
			},
			{
				icone: `${Icone2}`,
				titulo: "USD balance",
				valor: "$ 129,984",
			},
			{
				icone: `${Icone3}`,
				titulo: "USD balance",
				valor: "$ 329,984",
			},
			{
				icone: `${Icone4}`,
				titulo: "USD balance",
				valor: "$ 429,984",
			},
		],
	},
	{
		numero: "ID 8679",
		view: "275",
		info: [
			{
				icone: `${Icone1}`,
				titulo: "USD balance",
				valor: "$ 929,984",
			},
			{
				icone: `${Icone2}`,
				titulo: "USD balance",
				valor: "$ 129,984",
			},
			{
				icone: `${Icone3}`,
				titulo: "USD balance",
				valor: "$ 329,984",
			},
			{
				icone: `${Icone4}`,
				titulo: "USD balance",
				valor: "$ 429,984",
			},
		],
	},
	{
		numero: "ID 8679",
		view: "275",
		info: [
			{
				icone: `${Icone1}`,
				titulo: "USD balance",
				valor: "$ 929,984",
			},
			{
				icone: `${Icone2}`,
				titulo: "USD balance",
				valor: "$ 129,984",
			},
			{
				icone: `${Icone3}`,
				titulo: "USD balance",
				valor: "$ 329,984",
			},
			{
				icone: `${Icone4}`,
				titulo: "USD balance",
				valor: "$ 429,984",
			},
		],
	},
	{
		numero: "ID 8679",
		view: "275",
		info: [
			{
				icone: `${Icone1}`,
				titulo: "USD balance",
				valor: "$ 929,984",
			},
			{
				icone: `${Icone2}`,
				titulo: "USD balance",
				valor: "$ 129,984",
			},
			{
				icone: `${Icone3}`,
				titulo: "USD balance",
				valor: "$ 329,984",
			},
			{
				icone: `${Icone4}`,
				titulo: "USD balance",
				valor: "$ 429,984",
			},
		],
	},
	{
		numero: "ID 8679",
		view: "275",
		info: [
			{
				icone: `${Icone1}`,
				titulo: "USD balance",
				valor: "$ 929,984",
			},
			{
				icone: `${Icone2}`,
				titulo: "USD balance",
				valor: "$ 129,984",
			},
			{
				icone: `${Icone3}`,
				titulo: "USD balance",
				valor: "$ 329,984",
			},
			{
				icone: `${Icone4}`,
				titulo: "USD balance",
				valor: "$ 429,984",
			},
		],
	},
	{
		numero: "ID 8679",
		view: "275",
		info: [
			{
				icone: `${Icone1}`,
				titulo: "USD balance",
				valor: "$ 929,984",
			},
			{
				icone: `${Icone2}`,
				titulo: "USD balance",
				valor: "$ 129,984",
			},
			{
				icone: `${Icone3}`,
				titulo: "USD balance",
				valor: "$ 329,984",
			},
			{
				icone: `${Icone4}`,
				titulo: "USD balance",
				valor: "$ 429,984",
			},
		],
	},
];

const SectionValues = () => {
	return (
		<section className="s-values">
			<div className="container">
				<div className="txt txt-center">
					<h2 className="title">
						Result <span>partners</span>
					</h2>
					<p>Suspendisse sapien magna, tristique sit amet tristique pharetra</p>
				</div>
			</div>

			<Swiper
				slidesPerView={5}
				spaceBetween={32}
				freeMode={true}
				centeredSlides={true}
				speed={800}
				loop={true}
				pagination={{
					clickable: true,
				}}
				navigation={{
					nextEl: ".swiper-btn-next",
					prevEl: ".swiper-btn-prev",
				}}
				modules={[FreeMode, Pagination, Navigation]}
				className="Swiper"
			>
				{CardSlide &&
					CardSlide.map(({numero, view, info}, index) => (
						<SwiperSlide key={index}>
							<div className="card">
								<div className="top-card">
									<div className="num">{numero}</div>
									<div className="view">
										<img src={View} alt="icone" />
										<span>{view}</span>
									</div>
								</div>
								<ul>
									{info.map(({icone, titulo, valor}, index) => (
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
						</SwiperSlide>
					))}
			</Swiper>

			<div className="actions">
				<div className="btn swiper-btn-prev"><img src={Seta} alt="anterior" /></div>
				<div className="swiper-pagination"></div>
				<div className="btn swiper-btn-next"><img src={Seta} alt="proximo" /></div>
			</div>
		</section>
	);
};

export default SectionValues;

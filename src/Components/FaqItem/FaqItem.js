import "./FaqItem.scss";
import {useState} from "react";
import Seta from "../../Assets/seta.svg";

const FaqItem = ({titulo, resposta}) => {
	const [expandir, setExpandir] = useState(false);

	const handleToggle = () => {
		setExpandir(!expandir);
	};

	return (
		<>
			<div className={`faq ${expandir ? "active" : ""}`} onClick={handleToggle}>
				<div className="top-faq">
					<h3>{titulo}</h3>
					<div className="icone">
						<img src={Seta} alt="expandir" />
					</div>
				</div>
				{expandir && (
					<div className="resposta">
						<p>{resposta}</p>
					</div>
				)}
			</div>
		</>
	);
};

export default FaqItem;

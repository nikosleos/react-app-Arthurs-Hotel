import React from "react";

import Button from "../../../../Common/Files/MenuButton";

const Text = () => {
	return (
		<div className="text">
			<div className="title">Столовая</div>
			<div className="title_p">
				<div className="p">
					В нашей гостинице работает ресторан, в котором вы сможете вкусно
					поесть и хорошо провести время! <br />
					Здесь какой-то текст о том, как все вкусно и классно. <br />
					Какие свежие продукты, какие рецепты, какой повар - все супер.
					Завтраки, ужины и все такое
				</div>
			</div>
			<Button />
		</div>
	);
};

export default Text;

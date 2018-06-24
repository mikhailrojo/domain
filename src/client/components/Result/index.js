"use strict";

import SnackbarContent from '@material-ui/core/SnackbarContent';

const russifyObj = (obj) => `
	Домен: ${obj.domain}
	Владелец: ${obj.person}
	Создан: ${obj.created}
	Оплачен до: ${obj['paid-till']}
`;

export default ({result, error}) => {
	if (!result && !error) {
		return null;
	}

	return (
		<div>
			{result && <SnackbarContent
				message={result}
			/>}
			{error && <SnackbarContent
				style={{backgroundColor:'#d32f2f'}}
				message={`Ошибка: ${error}`}
			/>}
			<style jsx>
				{`
					padding-top: 20px;
					white-space: pre-line;
				`}
			</style>
		</div>
	)
}


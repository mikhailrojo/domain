"use strict";

import SnackbarContent from '@material-ui/core/SnackbarContent'

export default ({result, error}) => {
	if (!result && !error) {
		return null;
	}
	const ok = result === 'ok';

	return (
		<div>
			{result && <SnackbarContent
				message={ok ? `Данный домен уже зарегестирован`: 'Данный домен свободен'}
			/>}
			{error && <SnackbarContent
				style={{backgroundColor:'#d32f2f'}}
				message={`Произошла странная ошибка: ${error}`}
			/>}
			<style jsx>
				{`
					padding-top: 20px;
				`}
			</style>
		</div>
	)
}
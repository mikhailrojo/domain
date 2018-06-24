"use strict";

import SnackbarContent from '@material-ui/core/SnackbarContent'

export default ({result, error}) => {
	if (!result && !error) {
		return null;
	}

	return (
		<div>
			{result && <SnackbarContent
				message={result ? `Данный домен уже зарегестирован: ${result}`: 'Данный домен свободен'}
			/>}
			{error && <SnackbarContent
				style={{backgroundColor:'#d32f2f'}}
				message={`Ошибка: ${error}`}
			/>}
			<style jsx>
				{`
					padding-top: 20px;
				`}
			</style>
		</div>
	)
}
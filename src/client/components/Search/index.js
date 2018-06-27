'use strict';

import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

export default class extends React.Component {
	onChange = (e) => {
		this.props.onChange(e.target.value);
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmit(e);
	};

	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<Input
					fullWidth
					autoFocus
					placeholder='Проверить домен .ru на занятость'
					onChange={this.onChange}
				/>
				<Button
					color='primary'
				    type="submit"
				>
					Найти
				</Button>
				<style jsx>
					{`
					width: 40%;
					display: flex;
					margin-top: 40vh;
					`}
				</style>
			</form>
		);
	}
}
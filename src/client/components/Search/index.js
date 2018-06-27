'use strict';

import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import debounce from 'lodash/debounce';


export default class extends React.Component {
	throttleRate = 500;

	onChange = (e) => {
		this.props.onChange(e.target.value);
	};

	debouncedSubmit = debounce(() => this.props.onSubmit(), this.throttleRate);

	onSubmit = (e) => {
		e.preventDefault();
		this.debouncedSubmit();
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
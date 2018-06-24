import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const menuInfo = [
	'',
	'Здесь можно узнать насколько уникален выбранный пароль, попадал ли он когда либо в базы данных взломанных паролей.',
	`Часто кажется что наш пароль уникален и ни у кого нет похожего.
	 Поэтому полезно узнать был ли конкретный пароль хотя раз скомпрометирован`,
	`Это безопасно. Чтобы получить доступ к чему-либо - нужен логин и пароль. Не зная логина, знание пароля не имеет смысла`,
	`Когда вы вводите пароль, он в вашем же браузере хешируется алгоритмом sha-1
	 и на проверку отправляются только 5 символов хэша. Введенные символы нигде не сохраняются`,
	'https://github.com/mikhailrojo'
];

const PaperMenu = ({index}) => {
	return (
		<div>
			<Typography >
				{menuInfo[index]}
			</Typography>

			<style jsx>
				{`
				padding: 20px 10px;
				margin-left: 200px;
				white-space: pre-line;
				`}
			</style>
		</div>
	)
};

export default class extends React.Component {
	state = {
		value: 0,
	};

	handleChange = (event, value) => {
		this.setState({value});
	};


	render() {
		const {value} = this.state;
		return (
			<div>
				<Tabs
					onChange={this.handleChange}
					textColor="primary"
					indicatorColor="primary"
					value={value}
				>
					<Tab label="Уникальность пароля" />
					<Tab label="О чем" />
					<Tab label="Зачем" />
					<Tab label="Безопасность" />
					<Tab label="Технология" />
					<Tab label="Обо мне" />
				</Tabs>
				<PaperMenu index={value}/>
				<style jsx>
					{`
						position: absolute;
					`}
				</style>
			</div>
		);
	}
}


/**

 <div>Сайты взламываются. Базы данных с паролями сливаются в сеть. Здесь можно узнать сколько раз
 конкретный пароль был слит.
 </div>

 */
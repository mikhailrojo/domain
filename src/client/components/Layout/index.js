import Head from 'next/head'

export default class extends React.Component {
	ym() {
		return (
			`<script src='https://mc.yandex.ru/metrika/watch.js' type='text/javascript'></script>
			<script type='text/javascript'>
				  try {
						new Ya.Metrika({
						id:49399237,
						clickmap:true,
						trackLinks:true,
						accurateTrackBounce:true,
						webvisor:true,
						trackHash:true
						});
				  } catch(e) { }
			</script>`
		);
	}

	render() {

		const {children} = this.props;
		return (
			<div>
				<Head>
					<title>Проверка домена в зоне .ru</title>
					<link rel='shortcut icon' type='image/x-icon' href='/static/favicon.ico' />
					<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
					<meta name="description" content="Проверка домена на занятость в ру" />
					<meta name="keywords" content="проверка домена, домен, свободен ли домен, домены" />
					<meta charset="UTF-8" />
				</Head>
				{children}
				<div dangerouslySetInnerHTML={{__html: this.ym()}}/>
			</div>
		);
	}
}
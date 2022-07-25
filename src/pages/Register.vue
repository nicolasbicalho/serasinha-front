<template>
  <div class="login">
		<div style="margin-bottom: 20px">
			<div class="justify-center">
				<div class="pink-box"></div>
			</div>
			<div style="margin-top: 8px" class="login-big">Cadastro</div>
		</div>
		<div>
			<InputWithLabel
				placeholder="Nome"
				inputPadding="8px 10px"
				@input="setNameValue"
				style="margin-bottom: 12px"
				label="Nome"/>
			<InputWithLabel
				placeholder="Telefone"
				inputPadding="8px 10px"
				@input="setPhoneValue"
				style="margin-bottom: 12px"
				label="Telefone"/>
			<InputWithLabel
				placeholder="E-mail"
				inputPadding="8px 10px"
				@input="setEmailValue"
				style="margin-bottom: 12px"
				label="E-mail"/>
			<InputWithLabel
				placeholder="Senha"
				inputPadding="8px 10px"
				type="password"
				class="mb-2"
				@input="setPasswordValue"
				label="Escolha uma senha"/>
			<a class="login-button" @click="goToLogin">fazer login</a>
		</div>
		<div style="margin-top: 32px">
			<RoundButton @click="register" buttonText="CADASTRAR" :backgroundColor="buttonBackgroundColor" />
			
		</div>
  </div>
</template>

<script>
import InputWithLabel from '../components/InputWithLabel.vue';
import RoundButton from '../components/RoundButton.vue';
import { SerasinhaService } from '../SerasinhaService';

export default {
	name: 'LoginPage',
	data: () => ({
		email: '',
		password: '',
		name: '',
		phone: '',
		buttonBackgroundColor: "#000000",
	}),
	components: {
		InputWithLabel,
		RoundButton,
	},
	methods: {
		setEmailValue(value) {
			this.email = value;
		},
		setPasswordValue(value) {
			this.password = value;
		},
		setNameValue(value) {
			this.name = value;
		},
		setPhoneValue(value) {
			this.phone = value;
		},
		register () {
			console.log('email', this.email);
			console.log('password', this.password);
			console.log('name', this.name);
			console.log('phone', this.phone);
			return SerasinhaService.register({
				email: this.email,
				password: this.password,
				name: this.name,
				phone: this.phone,
				});
		},
		goToLogin() {
			this.$router.push({ path: '/login' });
		}
	}

};

</script>

<style scoped>

.login {
	margin: auto;
	margin-top: 30px;
	text-align: center;
}

.register {
	letter-spacing: 0.374px;
	font-family: 'Abel';
	font-style: normal;
	font-weight: 400;
	font-size: 20px;

	color: #4C6EB0;
	text-decoration: none;
}

.login-big {
	font-family: 'Abel';
	font-style: normal;
	font-weight: 400;
	font-size: 34px;
	line-height: 41px;

	letter-spacing: 0.374px;

	/* Gray 5 */
	color: #E0E0E0;
	
}
.justify-center {
	display: flex;
	justify-content: center;
}

.pink-box {
	background: #FFC7C7;
	border: 1px solid #000000;
	border-radius: 20px;
	height: 98px;
	width: 104px;
}

.login-button {
	letter-spacing: 0.374px;
	font-family: 'Abel';
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	/* text-align: center; */

	color: #4C6EB0;
	text-decoration: none;
}

.login-button:hover {
	cursor: pointer;
}
</style>
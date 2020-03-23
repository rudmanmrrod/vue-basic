<template>
	<div>
		<label>{{ $t('email') }}</label>
		<input type="text" v-model="email"><br/>
		<label>{{ $t('password') }}</label>
		<input type="password" v-model="password"><br/>
		<button @click="submit">{{ $t('send') }}</button>
	</div>
</template>
<script src="./Login.js"></script>
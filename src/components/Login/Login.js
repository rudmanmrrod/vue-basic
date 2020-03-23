export default{
	data(){
		return {
			email: '',
			password: ''
		}
	},
	methods:{
		submit(){
			console.log(this.email, this.password)
		}
	}
}
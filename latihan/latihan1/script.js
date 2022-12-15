const app = Vue.createApp({
	data() {
		return {
			senin: [
				{matkul: 'Riset Operasional'},
				{matkul: 'Rekayasa Perangkat Lunak'}
			],
			selasa: [
				{matkul: 'E-Commerce'},
				{matkul: 'Komputer Grafik'}
			],
			rabu: [
				{matkul: 'Sistem Berbasis Pengetahuan'},
				{matkul: 'Keamanan Komputer'}
			],
			kamis: [
				{matkul: 'Libur'}
			],
			jumat: [
				{matkul: 'Filsafat Ilmu'},
				{matkul: 'Etika Profesi'}
			],
			isShowingSenin: true,
			isShowingSelasa: true,
			isShowingRabu: true,
			isShowingKamis: true,
			isShowingJumat: true,
		}
	},
	methods: {
		showListSenin() {
			this.isShowingSenin = this.isShowingSenin = !this.isShowingSenin
		},
		showListSelasa() {
			this.isShowingSelasa = this.isShowingSelasa = !this.isShowingSelasa
		},
		showListRabu() {
			this.isShowingRabu = this.isShowingRabu = !this.isShowingRabu
		},
		showListKamis() {
			this.isShowingKamis = this.isShowingKamis = !this.isShowingKamis
		},
		showListJumat() {
			this.isShowingJumat = this.isShowingJumat = !this.isShowingJumat
		}
	}
})

app.mount('#content');
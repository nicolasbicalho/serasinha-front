<template>
	<div>
		<b-button v-b-modal="'bv-modal'">
			{{buttonText}}
		</b-button>
		<b-modal
            id="bv-modal"
            class="b-modal"
            ref="modal"
			hide-footer
			size="sm"
            :title="modalTitle"
			centered>
			<slot />
			<b-button class="confirm-button" @click="confirmButton">
				{{confirmText}}
			</b-button>
		</b-modal>
	</div>
</template>

<script>

export default {
	props: {
		buttonText: String,
		confirmText: String,
		modalTitle: String,
		confirmCallback: Function,
	},
	methods: {
		confirmButton () {
            document.querySelector('#bv-modal').classList.remove('show');
            document.querySelectorAll('.modal-backdrop').forEach(el => el.classList.remove('show'));
			this.confirmCallback()
		}
	},
}
</script>

<style scoped>
.confirm-button {
    width: 100%;
}
</style>

<template>
	<div>
		<b-button :disabled="disabled" :class="buttonCss || {}" v-b-modal="'bv-modal'">
			{{buttonText}}
		</b-button>
		<b-modal
            id="bv-modal"
			hide-footer
			size="sm"
            :title="modalTitle"
			centered>
			<!-- <b-table v-if="modalTable && modalTableFields"
				:items="modalTable"
				:fixed="true"
				:fields="modalTableFields"
				responsive="sm"/> -->
			<slot />
			<b-button :class="confirmCSS" @click="confirmButton">
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
		buttonCss: Object,
		confirmCSS: Object,
		modalTitle: String,
		confirmCallback: Function,
		modalTable: Array,
		modalTableFields: Array,
		disabled: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		confirmButton () {
			this.$refs.modal.hide()
			this.confirmCallback()
		}
	},
}
</script>

<style>

</style>

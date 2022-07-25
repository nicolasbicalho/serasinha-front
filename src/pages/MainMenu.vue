<template>
  <div class="container">
    <MainNavbar />
    <div class="content">
      <div class="d-flex justify-content-between">
        <div class="welcome-title">
          Bem vindo, {{ sanitizedName }}.
        </div>
        <div>
          <div class="wallet">
            <div class="wallet-text">
              Carteira:
            </div>
            <div class="wallet-value">
              R$ {{ walletValue }}
            </div>
          </div>
          <ScoreCard :score="score"/>
        </div>
      </div>
      <div class="transaction-history">
        <div style="width: 50%;" class="card">
          <div class="transaction-label">Histórico de Transações</div>
          <b-table class="m-0" striped hover :items="transactions"></b-table>
        </div>
      </div>
      <div class="button-modal">
        <ButtonWithModal
          confirmText="Transferir"
          modalTitle="Nova Transferência"
          buttonText="Criar Nova Transferência"
          :confirmCallback="generateNewTransfer"
        >
          <InputWithLabel placeholder="E-mail" inputPadding="10px 12px" @input="setEmailToSend" label="Para qual usuário deseja transferir?" />
          <InputWithLabel style="margin-top: 20px; margin-bottom: 20px;" placeholder="R$" inputPadding="10px 12px" @input="setTransferValue" label="Qual valor deseja transferir? (Em reais)" />
        </ButtonWithModal>
      </div>
    </div>
  </div>
</template>

<script>
import MainNavbar from '../components/MainNavbar.vue';
import ScoreCard from '../components/ScoreCard.vue';
import ButtonWithModal from '../components/ButtonWithModal.vue';
import InputWithLabel from '../components/InputWithLabel.vue';
import { SerasinhaService } from '../SerasinhaService';
export default {
    name: 'MainMenu',
    components: {
      MainNavbar,
      ScoreCard,
      ButtonWithModal,
      InputWithLabel,
    },
    data: () => ({
      sanitizedName: '',
      walletValue: 0,
      score: 0,
      emailToSend: '',
      transferValue: 0,
      transactions: [],
    }),
    methods: {
      setEmailToSend(value) {
			this.emailToSend = value;
		},
      setTransferValue(value) {
        this.transferValue = value;
      },
      async generateNewTransfer() {
        if (!this.emailToSend || !this.transferValue) return null;
        if (this.transferValue > this.walletValue) return alert('Você não pode transferir essa quantidade!')
        await SerasinhaService.transferValue({
          emailToSend: this.emailToSend,
          transferValue: this.transferValue,
        });
        
        this.transferValue = 0;
        this.emailToSend = '';
      }
    },
    async mounted () {
      this.sanitizedName = localStorage.getItem('email') ? localStorage.getItem('email').split('@')[0] : 'humano';
      const { walletValue, score, transactions } = await SerasinhaService.getMainMenuData();

      this.walletValue = walletValue;
      this.score = score;
      this.transactions = transactions;
    }
}
</script>

<style scoped>
  .content {
    margin-top: 30px;
  }

  .welcome-title {
    font-weight: 400;
    font-size: 34px;
    line-height: 41px;
    letter-spacing: 0.374px;
    color: #818181;
  }

  .wallet {
    display: flex;
    border: 1px solid #E0E0E0;
    border-radius: 100px;
    padding: 10px;
    margin-bottom: 12px;
  }

  .wallet-text {
    font-weight: 400;
    font-size: 22px;
    line-height: 28px;
    letter-spacing: 0.352px;
    color: #382F2F;
    margin-right: 40px;
    align-self: center;
  }

  .wallet-value {
    font-weight: 400;
    font-size: 36px;
    line-height: 16px;
    display: flex;
    align-items: center;
    margin-right: 12px;
    color: #000000;
  }

  .transaction-history {
    margin-top: 50px;
    display: flex;
    justify-content: center;
  }

  .transaction-label {
    margin-top: 16px;
    margin-bottom: 24px;
    font-family: 'Abel';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 22px;
    align-self: center;
    letter-spacing: -0.408px;
    color: #000000;
  }

  .button-modal {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
</style>
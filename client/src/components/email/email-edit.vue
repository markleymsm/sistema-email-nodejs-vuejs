<template>
  <div class="row">
    <div class="col s12">
      <h5>Editando campanha</h5>
    </div>
    <div class="col s12">
      <a href="'#/emails/view/' + email._id" class="btn">ver</a>
    </div>
    <div class="col s12">
      <div class="card grey lighten-4">
        <div class="card-content">
          <form action="" @submit.prevent="save()">
            <div class="input-field">
              <input type="text" id="campanhaTitle" v-model="email.title" />
              <label for="campanhaTitle">Título</label>
            </div>
            <div class="input-field">
              <textarea
                class="materialize-textarea"
                rows="30"
                id="campanhaBody"
                v-model="email.body"
              />
              <label for="campanhaBody">Conteúdo</label>
            </div>
            <div class="input-field">
              <input type="text" id="campanhaStart" v-model="email.start" />
              <label for="campanhaStart">Data de inicio</label>
            </div>
            <input type="submit" value="Salvar" class="btn" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    email: function () {
      return this.$store.state.email.email
    }
  },
  methods: {
    save: function () {
      this.$store.dispatch('update', this.email).then(() => {
        this.$router.push('/emails/view/' + this.email._id)
      })
    }
  },
  mounted () {
    this.$store.dispatch('getOne', this.$route.params.id)
  }
}
</script>
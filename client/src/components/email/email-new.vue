<template>
  <div class="row">
    <div class="col s12">
      <h5>Nova Campanha</h5>
    </div>
    <div class="col s12">
      <div class="card grey lighten-4">
        <div class="card-content">
          <form action="" @submit.prevent="save()">
            <div class="input-field">
              <input type="text" id="campanhaTitle" v-model="data.title" />
              <label for="campanhaTitle">Título</label>
            </div>
            <div class="input-field">
              <textarea
                class="materialize-textarea"
                rows="30"
                id="campanhaBody"
                v-model="data.body"
              />
              <label for="campanhaBody">Conteúdo</label>
            </div>
            <div class="input-field">
              <input type="text" id="campanhaStart" v-model="data.start" />
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
  data: function () {
    return {
      data: {}
    }
  },
  methods: {
    save: function () {
      this.$store.dispatch('insert', this.data).then(() => {
        this.$router.push('/email')
      })
    }
  }
}
</script>

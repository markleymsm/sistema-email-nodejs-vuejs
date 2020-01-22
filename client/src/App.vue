<template>
  <div>
    <menu type="context" id="menu">
      <ul class="side-nav">
        <li>
          <div class="user-view">
            <span>Markley</span>
          </div>
        </li>
      </ul>
    </menu>
    <section id="page">
      <header id="header">
        <ul id="dropdown1" class="dropdown-content">
          <li>
            <a href>Temos 2 novos leads</a>
          </li>
          <li>
            <a href>Sua campanha teve novos clicks</a>
          </li>
        </ul>
        <nav class="row ligth-blue">
          <div class="nav-wrapper col s12">
            <a href class="brand-logo hide-on-med-and-down">Digital Marketing</a>
            <a href class="brand-logo hide-on-large-only">DM</a>
            <ul id="nav-mobile" class="right">
              <li>
                <a href class="dropdown-button" data-activates="dropdown1">
                  <i class="material-icons black-text">notifications_active</i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main id="content">
        <section class="row">
          <div class="col s12">
            <router-view></router-view>
          </div>
        </section>
      </main>
    </section>

    <footer id="footer" class="row grey lighten-3">
      <div class="col s12">
        <small>By Markley da Silva Mendes</small>
      </div>
    </footer>
  </div>
</template>

<script>
</script>

<style>
@import "https://fonts.googleapis.com/icon?family=Material+Icons";
body {
  background-color: #fafafa !important;
}

#page {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

#footer {
  width: 100%;
  margin-bottom: 0;
}

main {
  flex: 1 0 auto;
}

</style>

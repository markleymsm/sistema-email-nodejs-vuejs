<template>
  <div>
    <menu type="context" id="menu">
      <ul class="sidenav">
        <li>
          <div class="user-view">
            <img
              src="http://avatarbox.net/avatars/img37/sandman_avatar_picture_24863.jpg"
              class="circle">
            <span>Markley</span>
          </div>
        </li>
        <li>
          <a href>
            <i class="material-icons">home</i>
          </a>
        </li>
        <li>
          <a href>
            <i class="material-icons">email</i>
          </a>
        </li>
        <li>
          <a href>
            <i class="material-icons">supervisor_account</i>
          </a>
        </li>
        <li>
          <a href>
            <i class="material-icons">lock</i>
          </a>
        </li>
        <li>
          <a href>
            <i class="material-icons">exit_to_app</i>
          </a>
        </li>
      </ul>
    </menu>
    <section id="page">
      <header id="header">
        <ul id="dropdown1" class="dropdown-content">
          <li><a href="">Temos 2 novos leads</a></li>
          <li><a href="">Sua campanha teve novos clicks</a></li>
        </ul>
        <nav class="row ligth-blue">
          <div class="nav-wrapper col s12">
            <a href="" class="brand-logo hide-on-med-and-down">Digital Marketing</a>
            <a href="" class="brand-logo hide-on-large-only">DM</a>
            <ul id="nav-mobile" class="right">
              <li>
                <a href="" class="dropdown-button" data-activates="dropdown1">
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
      <footer id="footer" class="row grey lighten-3">
        <div class="col s12">
          <small>By Markley da Silva Mendes</small>
        </div>
      </footer>
    </section>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'app',
  mounted () {
    $('.dropdown-button').dropdown({
      belowOrigin: true
    })
  }
}
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

#menu {
  text-align: center;
  padding: 0;
  margin: 0;
}

#menu .user-view .material-icons {
  display: block;
  font-size: 60px;
}

#menu .sidenav,
#menu .sidenav li > a > i.material-icons {
  text-align: center;
  color: inherit;
}

#menu .sidenav li > a > i.material-icons {
  float: none;
  display: inline-block;
  margin: 0;
  font-size: 30px;
}

#menu .sidenav li > a {
  border: 1px solid #424242;
  margin-right: 4px;
  margin-bottom: 4px;
  color: #9e9e9e;
}

#menu .sidenav li > a:hover {
  color: #757575;
  background-color: #000;
}

#menu .sidenav {
  transform: translateX(0);
  width: 150px;
  background-color: #212121;
  color: #9e9e9e;
}

#menu + #page {
  margin-left: 150px;
}

#dropdown1 {
  width: 200px !important;
}
</style>

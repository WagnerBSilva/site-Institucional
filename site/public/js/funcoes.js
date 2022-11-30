// sessão
function validarSessao() {


    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var isAtivo = sessionStorage.ISATIVO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null && isAtivo == 't') {
        
        validarTpUsuario()
    } else if (isAtivo != 't') {
        limparSessao()
        window.alert('Conta inativa')
        window.location = "../login.html";
    } else {
        limparSessao()
        window.location = "../login.html";

    }
}

function validarTpUsuario(){
    var tpUsuario = sessionStorage.TIPO_USUARIO

    if(tpUsuario == 2){
        mostrarSideBarGerente()

    }else if(tpUsuario == 3){
        mostrarSideBarAnalista()
    }
    
}

function limparSessao() {

    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.innerHTML = texto;
    }
}


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}

function mostrarSideBarGerente() {
    sideBar.innerHTML = `
    <div class="logo_content">
    <div class="logo">
        <img src="sources/2.png" alt="" height="35px">
        <div class="logo_name">Gerencie</div>
    </div>

    <i onclick="abrirSideBar()" class='bx bx-menu' id="btn"></i>
</div>
<ul class="navlist">
    <li>
        <a href="dashboardPrincipal.html">
            <i class='bx bxs-dashboard'></i>
            <span class="links_name">Dashboard</span>
        </a>

    </li>
    <li>
        <a href='totens.html'>
            <i class='bx bxs-error'></i>
            <span class="links_name">Atenção!</span>
        </a>

    </li>
    <li>
        <a href="funcionarios-cadastrados.html">
            <i class='bx bxs-user'></i>
            <span class="links_name"> Funcionários </span>
        </a>
    </li>
    <li>
        <a href="Fast-foods-cadastrados.html">
            <i class='bx bxs-store'></i>
            <span class="links_name">Fast-Foods</span>
        </a>
    </li>
    <li>
        <a href="Totens-cadastrados.html">
            <i class='bx bx-mobile-alt'></i>
            <span class="links_name"> Totens</span>
        </a>
    </li>
    <li>
        <a href="cadastrar-funcionario.html">
            <i class='bx bxs-user-plus'></i>
            <span class="links_name">Cadastrar funcionário</span>
        </a>
    </li>
    <li>
        <a href="cadastrar-fastfood.html">
            <i class='bx bx-plus'></i>
            <span class="links_name">Cadastrar Fast-foods</span>
        </a>
    </li>
    <li>
        <a href="cadastrar-totem.html">
            <i class='bx bx-plus'></i>
            <span class="links_name">Cadastrar Totem</span>
        </a>
    </li>
    <li>
        <a href="faq.html">
            <i class="fas fa-question-circle"></i>
            <span class="links_name">FAQ</span>
        </a>

    </li>
</ul>
<div class="profile_content">
      <div class="profile">
        <div class="profile_details">
          <div class="name">
            <div><b id="b_usuario">${sessionStorage.NOME_USUARIO}!</b></div>
          </div>
        </div>
          <i class='bx bx-log-out' id="log_out" onclick="limparSessao()"></i>
      </div>
    </div>`;
}

function mostrarSideBarAnalista() {
    sideBar.innerHTML = `
    <div class="logo_content">
    <div class="logo">
        <img src="sources/2.png" alt="" height="35px">
        <div class="logo_name">Gerencie</div>
    </div>

    <i onclick="abrirSideBar()" class='bx bx-menu' id="btn"></i>
</div>
<ul class="navlist">
    
    <li>
        <a href='totens.html'>
            <i class='bx bxs-error'></i>
            <span class="links_name">Atenção!</span>
        </a>

    </li>
    
    <li>
        <a href="Fast-foods-cadastrados.html">
            <i class='bx bxs-store'></i>
            <span class="links_name">Fast-Foods</span>
        </a>
    </li>
    <li>
        <a href="Totens-cadastrados.html">
            <i class='bx bx-mobile-alt'></i>
            <span class="links_name"> Totens</span>
        </a>
    </li>
    
    <li>
        <a href="faq.html">
            <i class="fas fa-question-circle"></i>
            <span class="links_name">FAQ</span>
        </a>

    </li>
</ul>
<div class="profile_content">
      <div class="profile">
        <div class="profile_details">
          <div class="name">
            <div><b id="b_usuario">${sessionStorage.NOME_USUARIO}!</b></div>
          </div>
        </div>
          <i class='bx bx-log-out' id="log_out" onclick="limparSessao()"></i>
      </div>
    </div>`;
}

function abrirSideBar(){
    let sidebar = document.querySelector(".sidebar");

    sidebar.classList.toggle("active");
}
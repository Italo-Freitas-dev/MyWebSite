function abrirWpp(){
    const numero = "5585982040219";
    const mensagem = encodeURIComponent("Olá, vi seu portfólio e gostaria de conversar!");
    const link = `https://wa.me/${numero}?text=${mensagem}`;
    window.open(link, "_blank");
}

function abrirCurriculo(){
    window.open('assets/cv_italo_freitas.pdf', '_blank')
}

function abrirGitHub(){
    const link = `https://github.com/Italo-Freitas-dev`;
    window.open(link, "_blank");
}

function abrirLinkedin(){
    const link = `https://www.linkedin.com/in/italo-mf`;
    window.open(link, "_blank");
}

function enviarEmail() {
  const destinatario = "italomateusf1@gmail.com";
  const assunto = encodeURIComponent("Contato via portfólio");
  const corpo = encodeURIComponent("Olá Ítalo, vi seu portfólio e gostaria de conversar!");
  const link = `mailto:${destinatario}?subject=${assunto}&body=${corpo}`;
  window.location.href = link;
}

function escolherEnvioEmail() {
  // Cria o popup se ainda não existir
  if (!document.getElementById("popup-email")) {
    const popup = document.createElement("div");
    popup.id = "popup-email";
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.padding = "20px";
    popup.style.backgroundColor = "#fff";
    popup.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
    popup.style.zIndex = "9999";
    popup.style.borderRadius = "12px";
    popup.innerHTML = `
      <h5>Escolha como deseja enviar o e-mail:</h5>
      <button class="btn btn-outline-primary my-2" onclick="enviarEmailWindows()">Enviar pelo Windows</button>
      <button class="btn btn-outline-success my-2" onclick="enviarEmailGmail()">Enviar pelo Gmail</button><br>
      <button class="btn btn-sm btn-secondary mt-2" onclick="fecharPopup()">Cancelar</button>
    `;
    document.body.appendChild(popup);
  }
}

function enviarEmailWindows() {
  const destinatario = "italomateusf1@gmail.com";
  const assunto = encodeURIComponent("Contato via portfólio");
  const corpo = encodeURIComponent("Olá Ítalo, vi seu portfólio e gostaria de conversar!");
  const link = `mailto:${destinatario}?subject=${assunto}&body=${corpo}`;
  window.location.href = link;
  fecharPopup();
}

function enviarEmailGmail() {
  const destinatario = "italomateusf1@gmail.com";
  const assunto = encodeURIComponent("Contato via portfólio");
  const corpo = encodeURIComponent("Olá Ítalo, vi seu portfólio e gostaria de conversar!");
  const link = `https://mail.google.com/mail/?view=cm&fs=1&to=${destinatario}&su=${assunto}&body=${corpo}`;
  window.open(link, "_blank");
  fecharPopup();
}

function fecharPopup() {
  const popup = document.getElementById("popup-email");
  if (popup) {
    popup.remove();
  }
}

let carosseis = document.getElementsByClassName('carossel-Container')

for(let i = 0; i < carosseis.length; i++){
  let carossel = carosseis[i]
  let btnBack = carossel.getElementsByClassName('BtnBack')[0]
  let btnNext = carossel.getElementsByClassName('BtnNext')[0]

  let itens = carossel.getElementsByClassName('produto-card')
  const maxPosicao = (itens.length - 1)
  let posicaoArrayAtual = 4
  let posicaoAnterior = 0
  let mover = posicaoAnterior + 95

  function atualizarBotoes() {
    btnNext.disabled = posicaoArrayAtual == maxPosicao-1;
    btnBack.disabled = posicaoAnterior == 1;

    // Adiciona ou remove uma classe para indicar estado visual (opcional)
    btnNext.classList.toggle('disabled', btnNext.disabled);
    btnBack.classList.toggle('disabled', btnBack.disabled);
  }

  btnNext.addEventListener('click', ()=>{
    if( posicaoArrayAtual < maxPosicao-1){
      posicaoArrayAtual = posicaoArrayAtual + 3;
      mover = posicaoAnterior + 95

      for(let c = 0; c < itens.length; c++ ){

      itens[c].style.right=  mover + '%'

      posicaoAnterior = mover}

      atualizarBotoes();
    }

  })

  btnBack.addEventListener('click', ()=>{
    if (posicaoArrayAtual > 1) {
      posicaoArrayAtual = posicaoArrayAtual - 3;
      mover = posicaoAnterior - 95

      for(let c = 0; c < itens.length; c++ ){

      itens[c].style.right=  mover + '%'

      posicaoAnterior = mover}

      atualizarBotoes();
    }

  })
}

$(document).ready(function() {
  // Toggling do menu no mobile
  $('#mobile_btn').on('click', function () {
    $('#mobile_menu').toggleClass('active');
    $('#mobile_btn').find('i').toggleClass('fa-x');
  });

  $('#contactForm-2').on('submit', function(e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    $('#successMessage').fadeIn();

    // Após 3 segundos, a mensagem de sucesso desaparece
    setTimeout(function() {
      $('#successMessage').fadeOut();
    }, 3000);

    // Limpa o formulário
    $('#contactForm-2')[0].reset();
  });

  // Seções e itens de navegação
  const sections = $('section');
  const navItems = $('.nav-item');

  // Scroll suave
  $('.nav-item a').on('click', function(e) {
    e.preventDefault(); // Impede o comportamento padrão de navegação

    const targetSection = $(this).attr('href'); // Pega o atributo href do link
    const targetOffset = $(targetSection).offset().top; // Pega a posição da seção no topo da página

    // Anima o scroll até a posição da seção
    $('html, body').animate({
      scrollTop: targetOffset
    }, 800); // 800 é a duração da animação em milissegundos
  });

  // Evento de scroll para destacar o item ativo no menu
  $(window).on('scroll', function () {
      const header = $('header');
      const scrollPosition = $(window).scrollTop() - header.outerHeight();

      let activeSectionIndex = 0;

      if (scrollPosition <= 0) {
          header.css('box-shadow', 'none');
      } else {
          header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
      }

      // Determina qual seção está visível e ativa o item de navegação correspondente
      sections.each(function(i) {
          const section = $(this);
          const sectionTop = section.offset().top - 200;
          const sectionBottom = sectionTop + section.outerHeight();

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
              activeSectionIndex = i;
              return false;
          }
      });

      // Remove a classe 'active' de todos os itens e aplica no item correto
      navItems.removeClass('active');
      $(navItems[activeSectionIndex]).addClass('active');
  });

  ScrollReveal().reveal('#cta', {
      origin: 'left',
      duration: 2000,
      distance: '20%'
  });

  ScrollReveal().reveal('.carossel-Container', {
      origin: 'left',
      duration: 2000,
      distance: '20%'
  });

  ScrollReveal().reveal('.sobre-card', {
      origin: 'left',
      duration: 1000,
      distance: '20%'
  })

  ScrollReveal().reveal('.contato', {
      origin: 'right',
      duration: 1000,
      distance: '20%'
  })
});


const filterFish = type => {
    const cards = document.querySelectorAll('.fish-card');
    const buttons = document.querySelectorAll('.filters button');
    buttons.forEach(btn => btn.classList.remove('active'));
    if (window.event && window.event.target) {
        window.event.target.classList.add('active');
    }
    cards.forEach(card => {
        if (type === 'all') {
            card.style.display = 'block';
        } else if (card.classList.contains(type)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
const alterarConteudo = botao => {
    let fieldset = botao.parentElement.nextElementSibling;
    if(fieldset && fieldset.classList.contains("showFieldset")) {
        if (fieldset.style.display === "none") {
            fieldset.style.display = "block";
            botao.textContent = "[Fechar]";
        }
        else {
            fieldset.style.display = "none";
            botao.textContent = "[Mostrar]";
        }
    }
}
const toggleDetalhes = botao => {
    const card = botao.closest('.itemPersonagens');
    const detalhes = card.querySelector('.detalhesAdicionais');
    if (detalhes.style.display === 'none' || detalhes.style.display === '') {
        detalhes.style.display = 'block';
        botao.textContent = '[Recolher Detalhes]';
    } else {
        detalhes.style.display = 'none';
        botao.textContent = botao.getAttribute('data-original-text') || '[Expandir Detalhes]';
    }
}
const toggleSpoiler = botao => {
    const card = botao.closest('.itemPersonagens');
    const spoiler = card.querySelector('.hiddenSpoilersPersonagens');
    if (spoiler.style.display === 'none' || spoiler.style.display === '') {
        spoiler.style.display = 'block';
        botao.textContent = '[Ocultar Spoilers]';
        botao.style.backgroundColor = '#b22222';
    } else {
        spoiler.style.display = 'none';
        botao.textContent = '[Mostrar Spoilers]';
        botao.style.backgroundColor = '#4a1515';
    }
}
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.btnToggleDetalhes').forEach(btn => {
        btn.setAttribute('data-original-text', btn.textContent);
    });
});
const switchPhotos = (clickedButton, srcImage) => {
    const clicked = clickedButton.closest('.itemPersonagens');
    const img = clicked.querySelector('.imgCardPersonagens img');
    img.src = srcImage;
    const buttons = clicked.querySelectorAll('.buttonColorsHoodedFigures');
    buttons.forEach(btn => btn.classList.remove('active'));
    clickedButton.classList.add('active');
}
const filterSystem = region => {
    const character = document.querySelectorAll('.itemPersonagens');
    const buttons = document.querySelectorAll('.gridFilters button');
    buttons.forEach(btn => btn.classList.remove('active'));
    if (window.event && window.event.target) window.event.target.classList.add('active');
    character.forEach (card => {
        const sidebarLink = document.querySelector(`.sidebarPersonagens a[href="#${card.id}"]`);
        const sidebarItem = sidebarLink ? sidebarLink.parentElement : null;
        if (region === "all") {
            card.style.display = '';
            if (sidebarItem) sidebarItem.style.display = '';
        }
        else if (card.classList.contains(region)) {
            card.style.display = '';
            if (sidebarItem) sidebarItem.style.display = '';
        }
        else {
            card.style.display = 'none';
            if (sidebarItem) sidebarItem.style.display = 'none';    
        }
    });
}
const alterContent = botao => {
    let fieldset = botao.parentElement.nextElementSibling;
    if(fieldset && fieldset.classList.contains("showFieldset")) {
        if (fieldset.style.display === "none") {
            fieldset.style.display = "block";
            botao.textContent = "[Close]";
        }
        else {
            fieldset.style.display = "none";
            botao.textContent = "[Show]";
        }
    }
}
const toggleDetails = botao => {
    const card = botao.closest('.itemPersonagens');
    const detalhes = card.querySelector('.detalhesAdicionais');
    if (detalhes.style.display === 'none' || detalhes.style.display === '') {
        detalhes.style.display = 'block';
        botao.textContent = '[Read Less]';
    } else {
        detalhes.style.display = 'none';
        botao.textContent = botao.getAttribute('data-original-text') || '[Read More]';
    }
}
const toggleSpoilerEn = botao => {
    const card = botao.closest('.itemPersonagens');
    const spoiler = card.querySelector('.hiddenSpoilersPersonagens');
    if (spoiler.style.display === 'none' || spoiler.style.display === '') {
        spoiler.style.display = 'block';
        botao.textContent = '[Hide Spoilers]';
        botao.style.backgroundColor = '#b22222';
    } else {
        spoiler.style.display = 'none';
        botao.textContent = '[Show Spoilers]';
        botao.style.backgroundColor = '#4a1515';
    }
}
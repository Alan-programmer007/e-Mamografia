// Não fez a cirugia desabilita os outros campos
export function naoFezCirugia() { 
    const checkNaoFez = document.getElementById('nao-fez-cirurgia'); 
    const naoFez = document.querySelectorAll('.nao-fez'); 
    checkNaoFez.addEventListener('change', () => { 
        naoFez.forEach(input => { 
            if (checkNaoFez.checked) { 
                // desativa 
                input.disabled = true; 
                // limpa valor 
                input.value = ''; 
                // adiciona classe para borda diferente 
                input.classList.add('desativado'); 
            } else { 
                // reativa 
                input.disabled = false; 
                // remove classe 
                input.classList.remove('desativado'); 
            }
        }); 
    }); 
}
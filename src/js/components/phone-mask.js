export function initPhoneMasks() {
    const $phones = document.querySelectorAll('.phone-mask');

    $phones.forEach(item => {
        IMask(item, {
            mask: '+7(700)-000-00-00' 
        });
    })
}
initPhoneMasks();
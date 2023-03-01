const $btn_contact = document.getElementById('btn_contact');
const $btn_cerrar_modal = document.getElementById('btn_cerrar_modal');
const $modal = document.getElementById('modal');


const modalVentana = () => {
    $btn_contact.addEventListener('click', () => {
        $modal.classList.toggle('section_modal_active');
    });

    $btn_cerrar_modal.addEventListener('click', () => {
        $modal.classList.remove('section_modal_active');
    });

}

modalVentana();
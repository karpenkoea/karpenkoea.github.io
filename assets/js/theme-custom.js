// File for your custom JavaScript
// const doorsSliderItems = document.querySelectorAll('.products-swiper .swiper-slide')
// const main = document.querySelector('main')


// if (doorsSliderItems.length > 0) {
//    doorsSliderItems.forEach((card, index) => {
//       const cardModalTitle =  card.querySelector('.card-body .card-title')
//       const currentCardImgSrc = card.querySelector('.card-img-top').getAttribute('src');
//       // console.log(cardModalImgSrc)

//       // / Найдем позицию последнего слеша в строке src
//       const lastSlashPosition = currentCardImgSrc.lastIndexOf('/');
      
//       // Отрежем имя файла изображения
//       const imgPath = currentCardImgSrc.substring(0, lastSlashPosition + 1); // +1 чтобы включить последний слеш
      
//       // Отрежем расширение файла изображения
//       const imgFilename = currentCardImgSrc.substring(lastSlashPosition + 1);
      
//       // Создадим новый src с приставкой "_start"
//       const newImgSrc = `${imgPath}start/${imgFilename.split('.')[0]}_start.jpg`;
//       const sectionImgSrc = `${imgPath}start/${imgFilename.split('.')[0]}_section.jpg`;
//       // Установим новый src для изображения в модальном окне
//       // modalImg.setAttribute('src', newImgSrc);

//       const cardModalTitleText = cardModalTitle.textContent;
//       const detailButton = card.querySelector('.card-footer button');
      

//       const cardModal = document.createElement('div');
//       cardModal.classList.add('modal', 'fade');
//       let cardModalId = index + 1;
//       cardModal.setAttribute('id', `doorModal${cardModalId}`);
//       cardModal.setAttribute('tabindex', '-1');
//       cardModal.setAttribute('role', 'dialog');
//       cardModal.setAttribute('aria-labelledby', `${cardModalId}Title`);
//       cardModal.setAttribute('aria-hidden', 'true');

//       cardModal.innerHTML = `
//          <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl" role="document">
//             <div class="modal-content">
//                <div class="modal-header">
//                   <h5 class="modal-title">${cardModalTitleText}</h5>
//                   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                </div>
//                <div class="modal-body">
//                   <div class="row">
//                      <div class="col-md-6 col-lg-4 mx-lg-auto">
//                         <img class="img-fluid" style="min-width: 400px;" src="${newImgSrc}" alt="">
//                      </div>
//                      <div class="col-md-6 col-lg-4 mx-lg-auto">
//                         <img class="img-fluid" style="min-width: 400px;" src="${sectionImgSrc}" alt="">
//                      </div>
//                      <div class="col-md-6">
//                      some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text

//                      some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text

//                      some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text

//                         some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text
//                      </div>
//                   </div>
//                </div>
//                <div class="modal-footer">
//                   <button type="button" class="btn btn-white" data-bs-dismiss="modal">Закрыть</button>
//                   <button type="button" class="btn btn-primary">Заказать дверь</button>
//                </div>
//             </div>
//          </div>
//       `;

//       main.insertAdjacentElement('afterend', cardModal)


//       cardModalTitle.addEventListener('click', (e) => {
//          e.preventDefault();
//          e.stopPropagation();
//          const modal = new bootstrap.Modal(document.getElementById(cardModal.getAttribute('id')));
//          modal.show();
//       });

//       detailButton.addEventListener('click', (e) => {
//          e.preventDefault();
//          e.stopPropagation();
//          const modal = new bootstrap.Modal(document.getElementById(cardModal.getAttribute('id')));
//          modal.show();
//       });
//    });
// }




function scrollToSection(sectionId) {
   const section = document.getElementById(sectionId);
   if (section) {
     const yOffset = -36;
     const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
     window.scrollTo({ top: y, behavior: 'smooth' });
   }
}
 
const scrollTargets = document.querySelectorAll('[data-scroll-target]');
 
scrollTargets.forEach(target => {
   target.addEventListener('click', function(e) {
      e.preventDefault();
   
      if (e.target.classList.contains('btn')) {
         e.target.blur();
      }
   
      if (e.target.classList.contains('nav-link')) {
         const navbar = e.target.closest('.navbar')
         const offcanvas = e.target.closest('.offcanvas')

         if (navbar) {
            const navbarToggler = navbar.querySelector('.navbar-toggler')
            const navbarCollapse = e.target.closest('.navbar').querySelector('.navbar-collapse')

            if (navbarToggler && navbarCollapse) {
               navbarToggler.classList.add('collapsed');
               navbarToggler.setAttribute('aria-expanded', 'false');
               navbarCollapse.classList.remove('show');
            }
         }

         if (offcanvas) {
            const offcanvasBtnClose = offcanvas.querySelector('.btn-close')
            if (offcanvasBtnClose) {
               offcanvasBtnClose.click()
            }
         }
      }

      const sectionId = target.getAttribute('data-scroll-target');
      if (sectionId) {
         scrollToSection(sectionId);
      }
   });
});
 





// <!-- Modal -->
// <div id="exampleModalCenter" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
//   <div class="modal-dialog modal-dialog-centered" role="document">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//         <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-white" data-bs-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>
// <!-- End Modal -->
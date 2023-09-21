$(document).ready(function () {

    $(".postnav ul").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top - 105 }, 1500);
    });

    const links = document.querySelectorAll('.postnav li a');
    window.addEventListener('scroll', () => {
        const anchors = document.querySelectorAll('article [id]');
        anchors.forEach(anchor => {
            if (anchor.closest('article')) {
                const anchorTop = anchor.getBoundingClientRect().top + window.pageYOffset;
                if (window.pageYOffset >= anchorTop - 110) {
                    links.forEach(link => {
                        const correspondingLink = document.querySelector(`.postnav li a[href="#${anchor.id}"]`);
                        if (correspondingLink) {
                            link.classList.remove('active');
                            correspondingLink.classList.add('active');
                        }
                    });
                }
            }
        });
    });















});
$(document).ready(function() {

    /* ANIMATION DU MENU HAMBURGER */
    $('.menu-toggle').click(function(){
        $('.site-nav').toggle(200);
        $(this).toggleClass('open');
    })

    /* ANIMATION DU COMPTEUR */ 
    function countDown() {
        $('.count').each(function() {
            $(this).prop('Counter', 0).delay(200).animate({
                Counter: $(this).html()
            }, {
            duration: 2000,
            easing: 'swing',
            step: function (i) {
                $(this).text(Math.ceil(i));
                }      
            });
        }); 
     };

     /* ON CREE L'INTERACTION AU CLICK  */ 
    function scrollToEvents() {
        var tag = $('#events');
        $('html, body').animate({scrollTop: tag.offset().top}, 1500);
    }
    
    /* ON APPELLE LA FONCTION AU CLICK  */ 
    $("#dir").click(function() {
        scrollToEvents('#events');
        countDown();
    });  

  //  $("#events").click(function() {
        //scrollToEvents('#events');
        //countDown();
    // });  

    /* EFFET TAPE (Typewriter) */

    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

});



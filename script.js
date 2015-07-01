 $(document).ready(function ($) {
                var options = { $AutoPlay: true };
                $('#slider1_container').width($('.image-spinner')[0].width);
                $('#slides-container').width($('.image-spinner')[0].width);
                var jssor_slider1 = new $JssorSlider$('slider1_container', options);
            });
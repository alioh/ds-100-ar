$( document ).ready(function() {

    // url
    var url = window.location.pathname;

    // Fix back button cache problem
    window.onunload = function(){};

    // Set theme
    var theme = localStorage.getItem('theme');
    if (theme === null) { theme = 'light'; }

    set_theme(theme);


    var KEY_CODES = {
        PREVIOUS_KEY: 37,
        NEXT_KEY: 39
    };

    $(document).on('keydown', function (e) {
        switch (e.keyCode) {
            case KEY_CODES.NEXT_KEY:
                e.preventDefault();
                if($('.nav-chapters.next').length) {
                    window.location.href = $('.nav-chapters.next').attr('href');
                }
                break;
            case KEY_CODES.PREVIOUS_KEY:
                e.preventDefault();
                if($('.nav-chapters.previous').length) {
                    window.location.href = $('.nav-chapters.previous').attr('href');
                }
                break;
        }
    });

    // Interesting DOM Elements
    var html = $("html");
    var sidebar = $("#sidebar");
    var page_wrapper = $("#page-wrapper");
    var content = $("#content");


    // Add anchors for all content headers
    content.find("h1, h2, h3, h4, h5").wrap(function(){
        var wrapper = $("<a class=\"header\">");
        wrapper.attr("name", $(this).text());
        // Add so that when you click the link actually shows up in the url bar...
        wrapper.attr("href", $(location).attr('href') + "#" + $(this).text());
        return wrapper;
    });


    // Toggle sidebar
    $("#sidebar-toggle").click(function(event){
        if ( html.hasClass("sidebar-hidden") ) {
            html.removeClass("sidebar-hidden").addClass("sidebar-visible");
            localStorage.setItem('sidebar', 'visible');
        } else if ( html.hasClass("sidebar-visible") ) {
            html.removeClass("sidebar-visible").addClass("sidebar-hidden");
            localStorage.setItem('sidebar', 'hidden');
        } else {
            if(sidebar.position().left === 0){
                html.addClass("sidebar-hidden");
                localStorage.setItem('sidebar', 'hidden');
            } else {
                html.addClass("sidebar-visible");
                localStorage.setItem('sidebar', 'visible');
            }
        }
    });


    // Scroll sidebar to current active section
    var activeSection = sidebar.find(".active");
    if(activeSection.length) {
        sidebar.scrollTop(activeSection.offset().top);
    }


    // Print button
    $("#print-button").click(function(){
        var printWindow = window.open("print.html");
    });

    if( url.substring(url.lastIndexOf('/')+1) == "print.html" ) {
        window.print();
    }


    // Theme button
    $("#theme-toggle").click(function(){
        if($('.theme-popup').length) {
            $('.theme-popup').remove();
        } else {
            var popup = $('<div class="theme-popup"></div>')
                .append($('<div class="theme" id="light">خفيف <span class="default">(الأفتراضي)</span><div>'))
                .append($('<div class="theme" id="rust">بني</div>'))
                .append($('<div class="theme" id="coal">أسود فحمي</div>'))
                .append($('<div class="theme" id="navy">أزرق بحري</div>'));


            popup.insertAfter(this);

            $('.theme').click(function(){
                var theme = $(this).attr('id');

                set_theme(theme);
            });
        }

    });

    // share button
    $("#share-toggle").click(function(){
        if($('.theme-popup').length) {
            $('.theme-popup').remove();
        } else {
            var popup = $('<div class="theme-popup"></div>')
                .append($('<div class="theme"><a id="share-button" href="https://twitter.com/intent/tweet?text=%D9%85%D8%A8%D8%A7%D8%AF%D8%A6%20%D9%88%D8%AA%D9%82%D9%86%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A7%D9%86%D8%A7%D8%AA&url=https://alioh.github.io/ds-100-ar/&hashtags=%D8%B9%D9%84%D9%85_%D8%A7%D9%84%D8%A8%D9%8A%D8%A7%D9%86%D8%A7%D8%AA" target="_blank"><i class="fa fa-twitter" title="المشاركة في تويتر"></i></a></div>'))
                .append($('<div class="theme"><a id="share-button" href="https://www.linkedin.com/sharing/share-offsite/?url=https://alioh.github.io/ds-100-ar/" target="_blank"><i class="fa fa-linkedin" title="المشاركة في لينكد ان"></i></a></div>'))
                .append($('<div class="theme"><a id="share-button" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Falioh.github.io%2Fds-100-ar" target="_blank"><i class="fa fa-facebook" title="المشاركة في فيس بوك"></i></a></div>'))
                .append($('<div class="theme"><a id="share-button" href="https://github.com/alioh/ds-100-ar" target="_blank"><i class="fa fa-github" title="صفحة الكتاب في قيت هب"></i></a></div>'));
            popup.insertAfter(this);

            $('.theme').click(function(){
                var theme = $(this).attr('id');

                set_theme(theme);
            });
        }

    });

    // hide all items with id 'hidden_item'
    $('#hidden_item').hide();

    // click to show itmes inside list
    $(".chapter_title").click(function(){
        $(this).next("ul").toggle("slow");
      });

    // click to show itmes inside list
    $(".chapter_title").click(function(){
        $(this).next("a").toggle("slow");
        });

    function set_theme(theme) {
        if (theme == 'coal' || theme == 'navy') {
            $("[href='tomorrow-night.css']").prop('disabled', false);
            $("[href='highlight.css']").prop('disabled', true);
        } else {
            $("[href='tomorrow-night.css']").prop('disabled', true);
            $("[href='highlight.css']").prop('disabled', false);
        }

        localStorage.setItem('theme', theme);

        $('body').removeClass().addClass(theme);
    }
});

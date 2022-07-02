$(document).ready(function () {

    $(document).on('click', 'a', function (e) {
        e.preventDefault();
        var url = $(this).attr('href');
        window.open(url, '_blank');
    });

    $('.calendar-container').calendar({
        // text for prev/next buttons
        prevButton: "<",
        nextButton: ">",
        enableYearView:true,
        showYearDropdown:true,

        // custom separator between the month and the year in the month view.
       
    });
});
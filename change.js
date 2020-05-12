let details = {
    galaxy: {
        
    },
    other_galaxies: {
        
    },
    redshift: {
        
    }
}

$(".button").click(function () {
    const el = $(this)
    $(".active").removeClass("active");
    el.addClass("active")
    
    let section = el.data("section");
    let det = details[section];
    
    $(`[data-for]`).hide();
    $(`[data-for="${section}"]`).show();
})
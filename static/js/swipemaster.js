function renderListings(data) {
    $(".swipe-3-mas").empty()

    //insert all the new data
    $.each(data, function(i, datum){
        renderListingsFull(datum["img"], datum["address"], datum["neighborhood"], datum["apt-type"], datum["dates"], datum["price"])
    })
}

function renderListingsFull(img, address, neighborhood, apartment_type, date, prices) {
     
    var listing = $("<div class='swipe-3-mas'>")

    var location_img = $("<img class='swipe-2-image' src='" + img + "'/>")

    var dates_full = $("<div class='swipe-1'>")
    var dates_label = $("<div class='lable'>")
    var dates_text_wrap = $("<div class='may-31-august-15-wrapper'>")
    var dates_text = $("<div class='may-31-'>")

    var addr_text = $("<b class='name2'>")

    var neigh_apt_full = $("<div class='location-parent'>")
    var map_pin = $("<div class='location2'>")
    var map_pin_img = $("<img class='map-pin-icon2' src ='../static/img/mappin.svg'>")
    var neigh_apt_text = $("<div class='greenwich-village'>")

    var price_full = $("<div class='lable1'>")
    var price_wrapper = $("<div class='may-31-august-15-wrapper'>")
    var price_text = $("<div class='may-31-'>")

    var archive_full = $("<div class='ellipse-parent3'>")
    var archive_warpper = $("<div class='group-child3'>")
    var archive_icon = $("<img class='icons8-bookmark-96-3-11' src='../static/img/icons8bookmark96-3-11@2x.png'>")

    var saved_full = $("<div class='ellipse-parent4'>")
    var saved_wrapper = $("<div class='group-child3'>")
    var saved_icon = $("<img class='icons8-message-96-1-13' src='../static/img/icons8message96-1-11@2x.png'>")

    $(dates_text).html(date)
    $(addr_text).html(address)
    $(neigh_apt_full).html(neighborhood + " : " + apartment_type)
    $(price_text).html(prices)

    $(".swipe-3-mas").append(location_img)
    
    $(dates_text_wrap).append(dates_text)
    $(dates_label).append(dates_text_wrap)
    $(dates_full).append(dates_label)
    $(".swipe-3-mas").append(dates_full)

    $(".swipe-3-mas").append(addr_text)

    $(map_pin).append(map_pin_img)
    $(neigh_apt_full).append(map_pin)
    $(neigh_apt_full).append(neigh_apt_text)
    $(".swipe-3-mas").append(neigh_apt_full)

    $(price_wrapper).append(price_text)
    $(price_full).append(price_wrapper)
    $(".swipe-3-mas").append(price_full)

    $(archive_warpper).append(archive_icon)
    $(archive_full).append(archive_warpper)
    $(".swipe-3-mas").append(archive_full)

    $(saved_wrapper).append(saved_icon)
    $(saved_full).append(saved_wrapper)
    $(".swipe-3-mas").append(saved_full)


}

function saveListing() {

}

function archiveListing() {

}

$(document).ready(function(){
    renderListings(data)
    $("#save-button").click(function(){
        saveListings()
    })
    $("#archive-button").click(function(){
        archiveListings()
    })
})
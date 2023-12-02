function renderListings(data) {
    $(".swipe-3-mas").empty()

    //insert all the new data
    $.each(data, function(i, datum){
        renderListingsFull(datum["id"], datum["img"], datum["address"], datum["neighborhood"], datum["apt-type"], datum["dates"], datum["price"])
    })
}

function renderListingsFull(L_id, img, address, neighborhood, apartment_type, date, prices) {
     
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
    var archive_button = $("<button class='archive_button_swipe' value = '" + L_id + "'>")
    var archive_wrapper = $("<div class='group-child3'>")
    var archive_icon = $("<img class='icons8-bookmark-96-3-11' src='../static/img/icons8bookmark96-3-11@2x.png'>")

    var saved_full = $("<div class='ellipse-parent4'>")
    var saved_button = $("<button class='save_button_swipe' value = '" + L_id + "'>")
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

    $(archive_wrapper).append(archive_icon)
    $(archive_button).append(archive_wrapper)
    $(archive_full).append(archive_button)
    $(".swipe-3-mas").append(archive_full)

    $(saved_wrapper).append(saved_icon)
    $(saved_button).append(saved_wrapper)
    $(saved_full).append(saved_button)
    $(".swipe-3-mas").append(saved_full)


}

function saveListings(id, data, page) {
    $.each(data, function(i, datum){
        if (id = datum["id"]) {
            var dataToSave = {
                "id": datum["id"],
                "img": datum["img"],
                "name": datum["name"],
                "address": datum["address"],
                "neighborhood": datum["neighborhood"],
                "apt-type": datum["apt-type"],
                "dates": datum["dates"],
                "price": datum["price"],
                "page_on": page
            }

            $.ajax({
                type: "POST",
                url: "save_listing",
                dataType : "json",
                contentType: "application/json; charset=utf-8",
                data : JSON.stringify(dataToSave),
                success: function(result) {
                    var allData = result["data"]
                    data = allData
                    renderListings(data)
                },
                error: function(request, status, error) {
                    console.log("Error");
                    console.log(request)
                    console.log(status)
                    console.log(error)
                }
            });
        }


    })
}

function archiveListings(id, data, page) {
    $.each(data, function(i, datum){
        if (id = datum["id"]) {
            var dataToSave = {
                "id": datum["id"],
                "img": datum["img"],
                "name": datum["name"],
                "address": datum["address"],
                "neighborhood": datum["neighborhood"],
                "apt-type": datum["apt-type"],
                "dates": datum["dates"],
                "price": datum["price"]
            }

            $.ajax({
                type: "POST",
                url: "archive_listing",
                dataType : "json",
                contentType: "application/json; charset=utf-8",
                data : JSON.stringify(dataToSave),
                success: function(result) {
                    var allData = result["data"]
                    data = allData
                    renderListings(data)
                },
                error: function(request, status, error) {
                    console.log("Error");
                    console.log(request)
                    console.log(status)
                    console.log(error)
                }
            });
        }


    })
}

$(document).ready(function(){
    renderListings(data)
    
    $(".save_button_swipe").click(function(){
        var L_id = $(".save_button_swipe").val()
        saveListings(L_id, data, "swipe")
    })

    $(".archive_button_swipe").click(function(){
        var L_id = $(".archive_button_swipe").val()
        archiveListings(L_id, data)
    })
})
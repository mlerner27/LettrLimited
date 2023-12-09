function renderTopPanel(data) {
    $(".likes_panel").empty()

    //insert all the new data
    $.each(data, function(i, datum){
        renderPanel(datum["img"])
    })
}

function renderPanel(img) {
     
    var awaiting_responses_panel = $("<div class='likes-panel'>")

    var panel_img = $("<img class='like-preview-4' src='" + img + "'/>")

    $(".likes-panel").append(panel_img)
}

function renderAllChats(data) {
    $(".chat-2").empty()
    $(".chat-3").empty()
    $(".overlap-5").empty()
    $(".div").empty()

    //insert all the new data
    $.each(data, function(i, datum){
        renderPreview(datum["img"], datum["address"], datum["name"], datum["last_message"])
    })
}

function renderPreview(img, addr, name, last_message) {
    var full_preview = $("<div class='chat-2'>")

    var preview_img = $("<img class='chat-preview' src='" + img + "'/>")
    var preview_message = $("<p class='text-wrapper-5'>")
    var name_addr = $("<div class='name-addr'>")

    $(preview_message).html(last_message)
    $(name_addr).html(name + ": " + addr)

    $(".chat-2").append(preview_img)
    $(".chat-2").append(name_addr)
    $(".chat-2").append(preview_message)
}

$(document).ready(function(){
    renderTopPanel(data)
    
    renderAllChats(data)
    
})
let coordinates={}
$(document).ready(function(){
    getcoordinates()
})

function getcoordinates(){
    let searchparams = new URLSearchParams(window.location.search)

    if (searchparams.has("source") && searchparams.has("destination")) {
        let source = searchparams.get("source")
        let destination = searchparams.get("destination")
        coordinates.source_lat = source.split(";")[0]
        coordinates.source_lng = source.split(";")[1]

        coordinates.destination_lat = destination.split(";")[0]
        coordinates.destination_lng = destination.split(";")[1]
    }
    else{
        alert("Coordinates not selected")
        window.history.back()
    }
}
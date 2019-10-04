
var _selectSize = "";
var _teeCount = 6;
var _size_l_count = 3;
var _size_s_count = 1;
var _size_m_count = 2;
// init count
$(document).ready(function () {
    _teeCount = _size_l_count + _size_s_count + _size_m_count;
    $("#count")[0].innerText = _teeCount;
});
// implement tee object
var tee = {
    name: "Classic Tee",
    price: "$75",
    size: ""
}
// implement size changes event
var sizeOnClick = function(btn){
    
    var size = $(btn).text();
    $("#sizeno")[0].innerText = size;
    _selectSize = size;
}
var onHover = function(evt){
    
    if($(".minicart")[0].style.display=="none" || $(".minicart")[0].style.display==""){
        $(".minicart")[0].style.display="block"
    }
    else{
        $(".minicart")[0].style.display="none"
    }
    
}
var onMouseOut = function(evt){
    
    $(".minicart")[0].style.display="none"
    
}
    
// implement event of adding tees to cart
var add_to_cart = function (evt){

    tee.size = _selectSize;
    if(tee.size == ""){
        confirm("please select your size first!");
        return
    }

    _teeCount += 1;
    $("#count")[0].innerText = _teeCount;
    handle_count(tee);
   
} 
var handle_count = function(item){
    if($(".minicart")[0].style.display=="none" || $(".minicart")[0].style.display==""){
        $(".minicart")[0].style.display="block"
    }
    console.log(item.size)
    switch(item.size) {
        case "S":
            _size_s_count += 1;
            $("#size_s_count")[0].innerText = `${_size_s_count}x `;
            break;
        case "L":
            _size_l_count += 1;
            $("#size_l_count")[0].innerText = `${_size_l_count}x `;
            break;
        case "M":
            _size_m_count += 1;
            $("#size_m_count")[0].innerText = `${_size_m_count}x `;
            break; 
    }

}

if ("geolocation" in navigator) {
    navigator.geolocation.watchPosition(
        function(position){
            let speed = position.coords.speed;
            if(speed === null){
                document.getElementById("speed").textContent = "0 KM/HR"
            }else{
                let kmh = (speed*3.6)
                document.getElementById("speed").textContent = kmh;
            }
        }
    
    )
}
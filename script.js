function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  
function toS2(){
    document.querySelector("#Section1").style.opacity = "0";
}


function toS2(){
    // document.querySelector("#Section1").style.opacity = "0";
    document.querySelector("#Section1").style.position = "absolute";
    document.querySelector("#Section1").style.left = "-1000px";
    sleep(5000).then(() => {
        document.querySelector("#Section1").style.display = "none";
    });

data = 1

}function nextData(){
    console.log(data)
    let s = "#TD" + data.toString()
    document.querySelector(s).style.display = "none";
    data++
}
let navToggled = isNavToggled

function isNavToggled(){
    if (document.getElementById("menuDiv").style.display === "none"){
        return false
    } else{
        return true
    }
}

function openNav(){
    // document.getElementById("content").style.gridColumn = "3 / -1"
    document.getElementById("menuDiv").style.display = "initial"
    navToggled = true
}

function closeNav() {
    // document.getElementById("content").style.gridColumn = "1 / -1"
    document.getElementById("menuDiv").style.display = "none"
    navToggled = false
  } 

  function toggleNav(){
    if (navToggled){
        closeNav()
    } else {
        openNav()
    }
  }
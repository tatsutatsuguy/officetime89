if (window.outerWidth <= 650){
    document.getElementById("hero").innerHTML = "<img src='img/ot89_banner_reduced.png' class='img-fluid navbardrp' alt='OfficeTime89 Splash Image'>";
  }else {
    document.getElementById("hero").innerHTML = "<img src='img/ot89_banner_2560.png' class='img-fluid navbardrp' alt='OfficeTime89 Splash Image'>";
}

function resize(){
  if (window.outerWidth <= 650){
      document.getElementById("hero").innerHTML = "<img src='img/ot89_banner_reduced.png' class='img-fluid navbardrp' alt='OfficeTime89 Splash Image'>";
    }else {
      document.getElementById("hero").innerHTML = "<img src='img/ot89_banner_2560.png' class='img-fluid navbardrp' alt='OfficeTime89 Splash Image'>";
  }
}

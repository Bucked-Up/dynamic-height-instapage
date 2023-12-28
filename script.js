const dynamicHeight = (sectionId) =>{
  const section = document.getElementById(sectionId)

  const itemAbsolute = section.querySelectorAll(".widget.item-absolute");
  itemAbsolute.forEach(item=>{
    item.style.position = "relative";
    item.style.height = "100%";
  })

  section.querySelector(".section-block").style.height = "100%";

  section.style.height = "100%";
}
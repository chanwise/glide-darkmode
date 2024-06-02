window.function = function () {
  
  if (window.matchMedia) {
  // Check if the dark-mode Media-Query matches
  if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    return "Dark"
  } else {
    return "Light"
  }
} else {
  return "Light"
}
}

function brightnessHandler(self, b_color, d_color){
    var links = document.querySelectorAll('a');
    var target = document.querySelector('body').style;
    if(self.value === 'make it bright'){
      var i = links.length -1;
      while(i+1){
        links[i].style.color = b_color;
        i--;
      }
      target.backgroundColor='white';
      target.color = 'black';
      self.value = 'make it dark';
    }
    else{
      var i = links.length -1;
      while(i+1){
        links[i].style.color = d_color;
        i--;
      }
      document.querySelector('body').style.backgroundColor='black';
      document.querySelector('body').style.color = 'white';
      self.value = 'make it bright';
    }
  }
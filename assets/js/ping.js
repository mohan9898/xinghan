var tim = 1;
      setInterval("tim++",100);
      obj = document.querySelectorAll('.enter-link a');
      sbj = document.querySelectorAll('.enter-ping span');
      for(var i = 0;i < obj.length; i++){
        var pobj = document.querySelector('.field');
        var img = document.createElement('img');
        img.setAttribute('src', obj[i].href + '/' + Math.random());
        img.setAttribute('onerror', 'uomg("' + i + '")');
        img.setAttribute('style', 'display:none');
        pobj.appendChild(img);
      }
      function uomg(index){
        console.log(sbj[index]);
        sbj[index].innerText = '访问:' + tim * 10 + 'ms';
      }
function main() {
    var operandon;
    var calc ={
      bot: {
        display:document.getElementById('display'),
        uno:document.getElementById('uno'),
        dos:document.getElementById('dos'),
        tres:document.getElementById('tres'),
        cuatro:document.getElementById('cuatro'),
        cinco:document.getElementById('cinco'),
        seis:document.getElementById('seis'),
        siete:document.getElementById('siete'),
        ocho:document.getElementById('ocho'),
        nueve:document.getElementById('nueve'),
        cero:document.getElementById('cero'),
        suma:document.getElementById('suma'),
        resta:document.getElementById('resta'),
        division:document.getElementById('division'),
        multiplicacion:document.getElementById('multiplicacion'),
        igual:document.getElementById('igual'),
        del:document.getElementById('del'),
      },
      add_element: function(input){
        this.bot.display.innerHTML += input;
      },
      reset: function(operandon){
        var operandoa = 0;
        var operandob = 0;
        operandon = '';
        this.bot.display.innerHTML = '';
      },
      resultado: function(){
        var res = '';
        var operandoa = new Array();
        var doc = document.getElementById("display").innerText;
        switch(operandon){
          case "+":
            var operandob= doc.split('+')[1];
            res = parseFloat(doc.split('+')[0]) + parseFloat(operandob);
            operandoa.push (res);
            this.bot.display.innerHTML = res;
            console.log(operandoa);
            break;
          case "-":
            var operandoa = doc.split('-')[0];
            var operandob= doc.split('-')[1];
            res = parseFloat(operandoa) - parseFloat(operandob);
            this.bot.display.innerHTML = res;
            break;
          case "x":
            var operandoa = doc.split('x')[0];
            var operandob= doc.split('x')[1];
            res = parseFloat(operandoa) * parseFloat(operandob);
            this.bot.display.innerHTML = res;
            break;
          case "/":
            var operandoa = doc.split('/')[0];
            var operandob= doc.split('/')[1];
            res = parseFloat(operandoa) / parseFloat(operandob);
            this.bot.display.innerHTML = res;
            break;
          }
      }
    }
    calc.bot.uno.onclick = () => {
       calc.add_element(calc.bot.uno.name);
    }
    calc.bot.dos.onclick = () => {
       calc.add_element(calc.bot.dos.name);
    }
    calc.bot.tres.onclick = () => {
       calc.add_element(calc.bot.tres.name);
    }
    calc.bot.cuatro.onclick = () => {
       calc.add_element(calc.bot.cuatro.name);
    }
    calc.bot.cinco.onclick = () => {
       calc.add_element(calc.bot.cinco.name);
    }
    calc.bot.seis.onclick = () => {
       calc.add_element(calc.bot.seis.name);
    }
    calc.bot.siete.onclick = () => {
       calc.add_element(calc.bot.siete.name);
    }
    calc.bot.ocho.onclick = () => {
       calc.add_element(calc.bot.ocho.name);
    }
    calc.bot.nueve.onclick = () => {
       calc.add_element(calc.bot.nueve.name);
    }
    calc.bot.cero.onclick = () => {
       calc.add_element(calc.bot.cero.name);
    }
    calc.bot.suma.onclick = () => {
       calc.add_element(calc.bot.suma.name);
       operandon = "+";
   }
   calc.bot.resta.onclick = () => {
      calc.add_element(calc.bot.resta.name);
      operandon = "-";
    }
    calc.bot.multiplicacion.onclick = () => {
       calc.add_element(calc.bot.multiplicacion.name);
       operandon = "x";
    }
    calc.bot.division.onclick = () => {
       calc.add_element(calc.bot.division.name);
       operandon = "/";
     }
     calc.bot.del.onclick = () => {
      calc.reset();
    }
    calc.bot.igual.onclick = () => {
      calc.resultado();
     }
}

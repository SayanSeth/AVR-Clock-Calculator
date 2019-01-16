function update_all(tt, of, rm, rt, nf)
{
  document.getElementById("TotalTicks").value = tt;
  document.getElementById("Overflows").value = of;
  document.getElementById("Remainder").value = rm;
  document.getElementById("RealTime").value = rt;
  document.getElementById("NewFreq").value = nf;
}

function calc_total()
{
  var tt = document.getElementById("TotalTicks").value;

  var cf = document.getElementById("ClkFreq").value;
  var ps = document.getElementById("Prescaler").value;
  var freq = cf / ps;
  var res = document.getElementById("TimerRes").value;

  var of = Math.floor(tt / Math.pow(2, res));
  var rm = tt - (of * Math.pow(2, res));

  var rt = tt / freq;
  var nf = freq / tt;

  update_all(tt, of, rm, rt);
}

function calc_ofrm()
{
  var of = document.getElementById("Overflows").value;
  var rm = document.getElementById("Remainder").value;

  var cf = document.getElementById("ClkFreq").value;
  var ps = document.getElementById("Prescaler").value;
  var freq = cf / ps;
  var res = document.getElementById("TimerRes").value;

  var tt = of * Math.pow(2, res) + parseInt(rm);

  var rt = tt / freq;
  var nf = freq / tt;

  update_all(tt, of, rm, rt, nf);
}

function calc_rt()
{
  var rt = document.getElementById("RealTime").value;
  var nf = 1 / rt;

  var cf = document.getElementById("ClkFreq").value;
  var ps = document.getElementById("Prescaler").value;
  var freq = cf / ps;
  var res = document.getElementById("TimerRes").value;

  var tt = rt * freq;

  var of = Math.floor(tt / Math.pow(2, res));
  var rm = tt - (of * Math.pow(2, res));

  update_all(tt, of, rm, rt, nf);
}

function calc_nf()
{
  var nf = document.getElementById("NewFreq").value;
  var rt = 1 / nf;

  var cf = document.getElementById("ClkFreq").value;
  var ps = document.getElementById("Prescaler").value;
  var freq = cf / ps;
  var res = document.getElementById("TimerRes").value;

  var tt = rt * freq;

  var of = Math.floor(tt / Math.pow(2, res));
  var rm = tt - (of * Math.pow(2, res));

  update_all(tt, of, rm, rt, nf);
}


function cokluDersEkle()
{
  document.getElementById('tbody_id').innerHTML="";
  var sayac= document.getElementById('inp_ders_sayi').value;
  var satir=[];

  for (var i = 0; i <sayac; i++)
  {
    satir[i]='<tr>'+
      '<td><input id="ders_adi'+i+'" class="inp-icerik"  type="text" name="" placeholder="ders adı" /></td>'+
      '<td><input id="akts'+i+'" class="inp-icerik s_akts" type="number" name="akts" min="1" max="10" placeholder="akts" required/></td>'+
      '<td><input id="vize'+i+'" class="inp-icerik" type="number" name="vize" min="1" max="100"  placeholder="vize notu" required /></td>'+
      '<td><input id="vize_agr'+i+'" class="inp-icerik" type="number" name="vize_agr"  min="1" max="100" placeholder="vize ağırlığı" required/></td>'+
      '<td><input id="odev'+i+'" class="inp-icerik" type="number" name="odev"  min="1" max="100"/ placeholder="ödev notu" ></td>'+
      '<td><input id="odev_agr'+i+'" class="inp-icerik" type="number" name="odev_agr"  min="1" max="100"placeholder="ödev ağırlığı" /></td>'+
      '<td><input id="final'+i+'" class="inp-icerik" type="number" name="final"  min="1" max="100" placeholder="final notu" required/></td>'+
      '<td><input id="final_agr'+i+'" class="inp-icerik" type="number" name="final_agr"  min="1" max="100"/ placeholder="final ağırlığı" required></td>'+
      '</tr>';
    };

  if(sayac!="" && sayac<15 && sayac>0)
  {
    for (var k = 0; k < sayac; k++)
    {
      document.getElementById('tbody_id').innerHTML+=satir[k];
    }
    document.getElementById('hesap_alani').style.display="block";
  }
  else
  {
    alert("Ders sayısını girin (1-15 arası) !");
  }

}

function ortHesapla() {
  var sayac= document.getElementById('inp_ders_sayi').value;
  var satir_ort=[];
  var akts=[];
  var vize= [];
  var vize_agr= [];
  var final= [];
  var final_agr=[];
  var odev= [];
  var odev_agr= [];
  var agirliklar;
  var basari_notu=0;
  var toplam_akts=0;
  toplam_not=0.0;
  var cevap;

  for (var i = 0; i <sayac; i++) {

      var akts_el= parseInt(document.getElementById('akts'+i).value);
      akts.push(akts_el);
      var vize_el= parseInt(document.getElementById('vize'+i).value);
      vize.push(vize_el);
      var vize_agr_el= parseInt(document.getElementById('vize_agr'+i).value);
      vize_agr.push(vize_agr_el);
      var final_el= parseInt(document.getElementById('final'+i).value);
      final.push(final_el);
      var final_agr_el= parseInt(document.getElementById('final_agr'+i).value);
      final_agr.push(final_agr_el);

      var odev_el=document.getElementById('odev'+i).value;
      odev.push(odev_el);
      var odev_agr_el= document.getElementById('odev_agr'+i).value;
      odev_agr.push(odev_agr_el);

      if ( vize[i] == null || vize_agr[i] == null || final[i] == null || final_agr[i] == null)
      {
        alert("İstenilen bilgileri doğru girin");
      }
      else
      {

        if(odev[i] == null || odev_agr[i]== null)
        {
          odev[i]=0;
          odev_agr[i]=0;
        }
        else{

        }


        agirliklar=vize_agr[i]+final_agr[i]+odev_agr[i];


        if (agirliklar==100 )
        {
          var not_temp= vize[i]*(vize_agr[i]/100)+final[i]*(final_agr[i]/100)+odev[i]*(odev_agr[i])/100;

          if (not_temp>=0 && not_temp<=29)
          {
             not_temp=0;
          }
          else if(not_temp>=30 && not_temp<=49)
          {
            not_temp=1;
          }
          else if(not_temp>=50 && not_temp<=59)
          {
            not_temp=1.5;
          }
          else if(not_temp>=60 && not_temp<=64)
          {
            not_temp=2;
          }
          else if(not_temp>=65 && not_temp<=69)
          {
            not_temp= 2.50;
          }
          else if(not_temp>=70 && not_temp<=79)
          {
              not_temp=3.00;
          }
          else if(not_temp>=80 && not_temp<=89)
          {
              not_temp=3.50;
          }
          else
          {
              not_temp=4.00;
          }

          satir_ort[i]=akts[i]*not_temp;
          toplam_not+=parseFloat(satir_ort[i]);
          toplam_akts+=parseInt(akts[i]);
          basari_notu=parseFloat(toplam_not/toplam_akts);
          document.getElementById('not_ort').innerHTML=basari_notu;

        }
        else
        {
          cevap="not agırlıkları yanlış girilmiş yada girilmemiş";
          alert(cevap);
        }
      }


  }

}

function temizle()
{
  document.getElementById('tbody_id').innerHTML="";
}

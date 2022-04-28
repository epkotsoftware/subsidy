const sendDoc = (grant_c_mail,text) => {
    Email.send({       
      SecureToken : "cbe198fe-5e0d-431a-a13c-7387d1404fe7",
      To : grant_c_mail,
      From : "epkotsoftware@gmail.com",
      Subject : "Web診断のお申し込み",
      Body : text,
    }).then(
      message => alert(message)
    );
  }


const btn = document.getElementById('send_Doc');

btn.addEventListener('click', function(event) {
    const grant_c_mail = "szn0125@gmail.com"

    const company = document.getElementById("v9_1").value
    if (company === '') {
      const companyMsg = document.getElementById("company_msg");
      companyMsg.classList.add('shown');
    }else{
      const companyMsg = document.getElementById("company_msg");
      companyMsg.classList.remove('shown');
    }

    const name = document.getElementById("v9_2").value
    if (name === '') {
      const nameMsg = document.getElementById("name_msg");
      nameMsg.classList.add('shown');
    }else{
      const nameMsg = document.getElementById("name_msg");
      nameMsg.classList.remove('shown');
    }

    const email = document.getElementById("v9_3").value
    if (email === '') {
      const emailMsg = document.getElementById("email_msg");
      emailMsg.classList.add('shown');
    }else{
      const emailMsg = document.getElementById("email_msg");
      emailMsg.classList.remove('shown');
    }

    const address = document.getElementById("v9_4").value
    if (address === '') {
      const addressMsg = document.getElementById("address_msg");
      addressMsg.classList.add('shown');
    }else{
      const addressMsg = document.getElementById("address_msg");
      addressMsg.classList.remove('shown');
    }

    const tel = document.getElementById("v9_5").value
    if (email === '') {
      const telMsg = document.getElementById("tel_msg");
      telMsg.classList.add('shown');
    }else{
      const telMsg = document.getElementById("tel_msg");
      telMsg.classList.remove('shown');
    }

    const reference = document.getElementById("v9_6").value
    if (reference === '') {
      const referenceMsg = document.getElementById("reference_msg");
      referenceMsg.classList.add('shown');
    }else{
      const referenceMsg = document.getElementById("reference_msg");
      referenceMsg.classList.remove('shown');
    }

    if(document.getElementsByClassName("shown").length != 0){
      event.preventDefault();
      return
    }

    const text = '助成金診断に向けた事前ヒアリングのお申し込み<br><br><br>'
               + 'ただいまフォームよりお申し込みがありましたので通知いたします。<br><br>'
               + '========================<br>'
               + '会社名：'+ company +'<br>'
               + '担当者氏名：'+ name +'<br>'
               + 'メールアドレス：'+ email +'<br>'
               + '本社住所：'+ address +'<br>'
               + '電話番号：'+ tel +'<br>'
               + '紹介者・媒体：'+ reference +'<br>'
               + '========================<br><br>'
               + '担当からのご連絡を宜しくお願いいたします。'

    sendDoc(grant_c_mail,text)
}, false)
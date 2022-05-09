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

    //アンケートの回答1-9までをそれぞれ取得
    const formElements = document.forms.registerForm;
    const s1 = formElements.v1.value
    const s2 = formElements.v2.value
    const s3 = formElements.v3.value
    const s4 = formElements.v4.value
    const s5 = formElements.v5.value
    const s6 = formElements.v6.value

    
    if(formElements.v7_1_c.checked === true){
     var s7_1 = formElements.v7_1_c.value
    }else{
     var s7_1 = formElements.v7_1.value + '人'
    }

    
    if(formElements.v7_2_c.checked === true){
      var s7_2 = formElements.v7_2_c.value
    }else{
      var s7_2 = formElements.v7_2.value + '人'
    }    
    
    const s7_3 = formElements.v7_3.value + '人'

    var s8 = ''
    for(let i=0; i<formElements.v8.length; i++){
      if(formElements.v8[i].checked === true){
        s8 += '⇨' + formElements.v8[i].value + '<br>'
      }
    }

    //ご連絡先にバリデーションを適用して取得
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

    //メール送信の内容
    const text = '助成金診断に向けた事前ヒアリングのお申し込み<br><br><br>'
               + 'フォームよりお申し込みがありましたので通知いたします。<br><br>'
               + '================================================<br>'
               + '1.保険<br>'
               + '事業所として加入されている保険を選択して下さい。<br><br>'
               + '⇨'+ s1 +'<br><br>'
               + '================================================<br>'
               + '2.退職<br>'
               + '６ヶ月以内に会社都合で退職（解雇）をされた方はいますか？<br><br>'
               + '⇨'+ s2 +'<br><br>'
               + '================================================<br>'
               + '3.就業規則<br>'
               + '就業規則をお持ちですか？<br>'
               + '就業規則をお持ちの場合、<br>'
               + '労働基準監督署へ提出した事はございますか？<br><br>'
               + '⇨'+ s3 +'<br><br>'
               + '================================================<br>'
               + '4.社労士<br>'
               + '顧問契約を結んでいる社労士様はいますか？<br><br>'
               + '⇨'+ s4 +'<br><br>'
               + '================================================<br>'
               + '5.キャリアアップ助成金<br>'
               + 'キャリアアップ助成金を申し込まれた事はございますか？<br><br>'
               + '⇨'+ s5 +'<br><br>'
               + '================================================<br>'
               + '6.ご質問<br>'
               + '任意） ご質問等あればお気軽にご記載ください<br><br>'
               + '⇨'+ s6 +'<br><br>'
               + '================================================<br>'
               + '7.社員<br>'
               + 'それぞれの人数と状況を教えてください。<br><br>'
               + '正社員の人数（契約期間の定めが無い方）：'+ s7_1 +'<br>'
               + '有期社員（契約社員・パート）の内、<br>'
               + '雇用保険に加入している人数：'+ s7_2 +'<br>'
               + '今後１年間で採用されるであろう正社員人数：'+ s7_3 +'<br><br>'
               + '================================================<br>'
               + '8.アンケート<br>'
               + 'コストカットに関し、ご興味ある内容<br><br>'
               +  s8 +'<br><br>'
               + '================================================<br>'
               + '９.連絡先<br><br>'
               + '会社名：'+ company +'<br>'
               + '担当者氏名：'+ name +'<br>'
               + 'メールアドレス：'+ email +'<br>'
               + '本社住所：'+ address +'<br>'
               + '電話番号：'+ tel +'<br>'
               + '紹介者・媒体：'+ reference +'<br><br>'
               + '================================================<br><br>'
               + '担当からのご連絡を宜しくお願いいたします。'

    sendDoc(grant_c_mail,text)
}, false)

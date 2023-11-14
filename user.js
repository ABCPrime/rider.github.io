// 初始化
const config = {
    apiKey: "AIzaSyAA2BvQX814OOEkp6bM20ibnttwyMF_Itg",
    authDomain: "travelrider-cf3c6.firebaseapp.com",
    databaseURL: "https://travelrider-cf3c6-default-rtdb.firebaseio.com/"
  };
  firebase.initializeApp(config);
  const database = firebase.database();
  
  // 綁定註冊按鈕的點擊事件
  submit.addEventListener('click', () => {
    // 點擊註冊按鈕時，紀錄使用者輸入的帳號密碼
    let user = {
      email: email.value,
      pwd: pwd.value
    };
  
    // 透過 auth().createUserWithEmailAndPassword 建立使用者
    firebase.auth().createUserWithEmailAndPassword(user.email, user.pwd)
      .then(u => {
        // 取得註冊當下的時間
        let date = new Date();
        let now = date.getTime();
  
        // 記錄相關資訊到 firebase realtime database
        database.ref(u.uid).set({
          signup: now,
          email: user.email
        }).then(() => {
          // 儲存成功後顯示訊息
          message.innerHTML = 'User created successfully';
        });
      }).catch(err => {
        // 註冊失敗時顯示錯誤訊息
        message.innerHTML = err.message;
      });
  });
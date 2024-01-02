import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyCqYS95aLmjlgZNr6sh3I2g2nm394sU7oA",
  authDomain: "sparta-5da94.firebaseapp.com",
  projectId: "sparta-5da94",
  storageBucket: "sparta-5da94.appspot.com",
  messagingSenderId: "1095794470391",
  appId: "1:1095794470391:web:3530e85ca09d58bec5d2f2",
  measurementId: "G-NJF0FW697J"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


//---------------------------------------------------------------------------------------

// 데이터 추가
$("#addBtn").click(async function () {
  // title_input, comment_input, image_input id를 가진 HTML 요소에서 값을 가져와서 title, comment, image 변수에 저장해 주세요.
  let image = $('#image').val();
  let title = $('#title').val();
  let star = $('#star').val();
  let comment = $('#comment').val();


  try {
    const docRef = await addDoc(collection(db, "foods") {
      docRef = {
        'image': image,
        'title': title,
        'star': star,
        'comment': comment
      }
    });
    alert("음식이 추가 되었습니다!");
    window.location.reload();
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});



// 데이터 읽기 및 카드 생성
$(".row-cols-3").empty();
const querySnapshot = await getDocs(collection(db, "foods"));

querySnapshot.forEach((doc) => {

  let title = doc.data().title;
  let comment = doc.data().comment;
  let star = "⭐".repeat(doc.data().star);
  let image = doc.data().image;

  // 문서의 title, comment, image, star 필드에서 데이터를 추출한 변수명을 갖고,
  // tempHtml 문자열에 각 데이터를 포함한 카드의 HTML 코드를 생성하세요.
  console.log(doc.data());
});

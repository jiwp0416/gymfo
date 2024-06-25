const changeLanguageBtn = document.getElementById("changeLanguageBtn");

changeLanguageBtn.addEventListener('click', () => {    
  changeLanguageTo();
  changeLanguageTo2();    
});

const languageKor = document.getElementById('navKo');
const languageEng = document.getElementById('navEn');
const languageKor2 = document.getElementById('mainKo');
const languageEng2 = document.getElementById('mainEn');

function changeLanguageTo() {
  if (languageKor.value === 'navKo') {
    languageKor.style.display = "block";
    languageEng.style.display = "none";
    languageKor.value = 'navEn';
  } else {
    languageKor.style.display = "none";
    languageEng.style.display = "block";
    languageKor.value = 'navKo'
  }
  

}

function changeLanguageTo2() {
    if (languageKor2.value === 'mainKo') {
    languageKor2.style.display = "block";
    languageEng2.style.display = "none";
    languageKor2.value = 'mainEn';
  } else {
    languageKor2.style.display = "none";
    languageEng2.style.display = "block";
    languageKor2.value = 'mainKo'
  }
}





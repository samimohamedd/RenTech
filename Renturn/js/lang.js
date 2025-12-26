const btn = document.getElementById("langToggle");
const path = window.location.pathname;
const fileName = path.split("/").pop();

// اسماء الفولدرات
const englishFolder = "english";
const arabicFolder = "arabic";

// تحديد الفولدر الحالي
const isArabic = path.includes(`/${arabicFolder}/`);
const isEnglish = path.includes(`/${englishFolder}/`);

if (isArabic) {
  btn.title = "English";
} else if (isEnglish) {
  btn.title = "العربية";
}

btn.addEventListener("click", () => {
  if (isArabic) {
    // ينتقل لنفس الصفحة في فولدر الإنجليزي
    window.location.href = path.replace(`/${arabicFolder}/`, `/${englishFolder}/`).replace("-ar.html", ".html");
  } else if (isEnglish) {
    // ينتقل لنفس الصفحة في فولدر العربي
    window.location.href = path.replace(`/${englishFolder}/`, `/${arabicFolder}/`).replace(".html", "-ar.html");
  }
});



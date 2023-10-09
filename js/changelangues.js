'use strict';

document.getElementById("en").addEventListener("click", function() {
    // Thay đổi URL của trang sang phiên bản Tiếng Anh
    window.location.href = "index-en.html";
});

document.getElementById("fr").addEventListener("click", function() {
    // Thay đổi URL của trang sang phiên bản Tiếng Pháp
    window.location.href = "index-fr.html";
    console.log('fr co chi khong');
});

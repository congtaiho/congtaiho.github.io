'use strict';

// my-script.js
document.addEventListener("DOMContentLoaded", function () {
    const loadMoreButton = document.getElementById("load-more");
    const hiddenProjects = document.querySelectorAll(".loadmore[style='display: none;']");

    let visibleProjectIndex = 0;
    const projectsToShowPerClick = 1; // Số lượng dự án muốn hiển thị sau mỗi lần nhấp

    loadMoreButton.addEventListener("click", function () {
        for (let i = visibleProjectIndex; i < visibleProjectIndex + projectsToShowPerClick; i++) {
            if (hiddenProjects[i]) {
                hiddenProjects[i].style.display = "block";
            } else {
                loadMoreButton.textContent = "Sorry, No more project !"; // Thay đổi văn bản của nút
                loadMoreButton.style.backgroundColor = "orange"; // Thay đổi màu sắc của nút
                loadMoreButton.style.pointerEvents = "none"; // Tắt khả năng nhấp vào nút
                return; // Dừng vòng lặp
            }
        }
        visibleProjectIndex += projectsToShowPerClick;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const telegramLink = document.getElementById("telegram-link");
    telegramLink.addEventListener("click", function (e) {
        e.preventDefault();
        const telegramID = "RohitFSN";
        window.location.href = `https://t.me/${telegramID}`;
    });
});
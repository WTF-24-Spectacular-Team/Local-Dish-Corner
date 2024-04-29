// window.onload = function () {
//   let cookies = document.cookie.split(";");
//   let cookieHead = "We Value Your Privacy";
//   let cookie =
//     "We use cookies to provide you with the best possible experience. They also allow us to analyze user behavior in order to constantly improve the website for you.";

//   // Display cookies as an alert
//   let cookieAlert = document.createElement("div");
//   cookieAlert.classList.add("alert");
//   cookieAlert.innerHTML = `
//         <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
//         <strong>${cookieHead}</strong><br>
//         ${cookie}
//         <div class="flex w-full place-content-center p-3">
//             <button
//                 type="submit"
//                 class="btn p-3 w-40 border-solid border border-white rounded-2xl mr-6"
//             >
//                 Reject All
//             </button>
//             <button
//                 type="submit"
//                 class="btn p-3 w-40 border-solid border-white rounded-2xl"
//                 style="background-color: #233b32"
//             >
//                 Accept All
//             </button>
//         </div>
//     `;

//   // Append the cookieAlert to the document body
//   document.body.appendChild(cookieAlert);
//   cookieAlert.style.display = "block";
// };

window.onload = function () {
  let cookies = document.cookie.split(";");
  let cookieHead = "We Value Your Privacy";
  let cookie =
    "We use cookies to provide you with the best possible experience. They also allow us to analyze user behavior in order to constantly improve the website for you.";

  // Display cookies as an alert
  let cookieAlert = document.createElement("div");
  cookieAlert.classList.add("alert");
  cookieAlert.innerHTML = `
        <span class="closebtn float-right cursor-pointer rounded-full border border-gray-400 w-7 h-7" onclick="this.parentElement.style.display='none';">&times;</span>
        <div class="bg-gray-300 text-white h-28">
        <strong class="pt-2 ml-2">${cookieHead}</strong><br>
        
        <div class="flex place-content-center ml-5">
        ${cookie}
            <button
                id="rejectBtn"
                type="button"
                class="btn p-3 w-40 border-solid border border-white rounded-2xl mr-6"
            >
                Reject All
            </button>
            <button
                id="acceptBtn"
                type="button"
                class="btn p-3 w-40 border-solid border border-white rounded-2xl mr-6 focus:bg-green-950"
                style="background-color: #233b32"
            >
                Accept All
            </button>
        </div>
        </div>
    `;

  // Append the cookieAlert to the document body
  document.body.appendChild(cookieAlert);
  cookieAlert.style.display = "block";

  // Function to close the alert box
  function closeAlertBox() {
    cookieAlert.style.display = "none";
  }

  // Event listener for "Reject All" button
  document.getElementById("rejectBtn").addEventListener("click", function () {
    // Add your logic for rejecting all cookies here
    alert("All cookies rejected");
    closeAlertBox(); // Close the alert box
  });

  // Event listener for "Accept All" button
  document.getElementById("acceptBtn").addEventListener("click", function () {
    // Add your logic for accepting all cookies here
    alert("All cookies accepted");
    closeAlertBox(); // Close the alert box
  });
};

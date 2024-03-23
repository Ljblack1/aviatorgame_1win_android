// getting element for the first handle
const btn = document.querySelector('.btn_success');
const cancelContainer = document.querySelector('.cancel_btn_container');
const waiting = document.querySelector('.waiting');
const btnProgress = document.querySelector('.btn_progress');
const successBtnAmount = document.querySelector('.btn_success .place_bet_btn_amount');
const btnAmount = document.querySelector('.btn_progress .place_bet_btn_amount');
const betValue = document.querySelector('.btn_progress .btn_value');
const stakeAmount = document.querySelector('.stake_amount');
const handleOne = document.querySelector('.handles');
const alert = document.querySelector('.cashout_alert');
const alertWithdraw = document.querySelector('.alert_withdraw');
const alertOdds = document.querySelector('.alert_odds');
const alertTwo = document.querySelector('.cashout_alert_two');
const alertWithdrawTwo = document.querySelector('.alert_withdraw_two');
const alertOddsTwo = document.querySelector('.alert_odds_two');
const alertContainer = document.querySelector('.cashout_alert_container');
// getting element for the first handle ends here

// getting element for the second handle
const btnTwo = document.querySelector('.btn_success_two');
const cancelContainerTwo = document.querySelector('.cancel_btn_container_two');
const waitingTwo = document.querySelector('.waiting_two');
const btnProgressTwo = document.querySelector('.btn_progress_two');
const successBtnAmountTwo = document.querySelector('.btn_success_two .place_bet_btn_amount_two');
const btnAmountTwo = document.querySelector('.btn_progress_two .place_bet_btn_amount_two');
const betValueTwo = document.querySelector('.btn_progress_two .btn_value_two');
const stakeAmountTwo = document.querySelector('.stake_amount_two');
const handleOneTwo = document.querySelector('.handles_two');
// getting element for the first handle ends here
// working with balnce change
const balanceContainer = document.querySelector('.change_balance_container');
const balanceInputField = document.querySelector('.change_balance_input_field');
const balanceBtn = document.querySelector('.add_balance_btn');

const amount = document.querySelector('.amount');


const balance = document.querySelector('.balance');

// const video = document.querySelector('.play_ground_video');
// console.log(video);

// video.addEventListener("click", () => {
//   video.removeAttribute("muted");
//   console.log(attr);
// })

balance.addEventListener("click", () => {
  balanceContainer.style.display = "flex";
})

balanceBtn.addEventListener("click", () => {
  const balanceValue = Number(balanceInputField.value);
  mainBalance = balanceValue;
  balance.textContent = mainBalance;
  balanceInputField.value = "";
  balanceContainer.style.display = "none";
})

let mainBalance = 85278.91;

balance.textContent = mainBalance;


// =======================================================================================
// first handle code
btn.addEventListener('click', () => {
  btn.style.display = "none";
  cancelContainer.style.display = "flex";
  handleOne.classList.add("handle_1");
  
  setTimeout(() => {
    waiting.style.display = "none";
    mainBalance -= Number(stakeAmount.value);
    balance.textContent = mainBalance;
    
    setTimeout(() => {
      cancelContainer.style.display = "none";
      btnProgress.style.display = "flex";
      betValue.textContent = "CASH OUT"
      let cashoutTime = setInterval(countCashout, 100);
      handleOne.style.borderColor = "#d07206";

      btnProgress.addEventListener('click', () => {
        cancelContainer.style.display = "none";
        btn.style.display = "flex";
        btnProgress.style.display = "none";
        const cashout = btnAmount.textContent;
        const newBalance = mainBalance + Number(cashout);
        balance.textContent = newBalance.toFixed(2);
        clearInterval(cashoutTime);
        handleOne.classList.remove("handle_1");
        displayAlert(cashout);
        // setBackToDefault();
      })
    }, 4000)


  }, 3000)
})
// first handle code ends here

// first handle code
btnTwo.addEventListener('click', () => {
  btnTwo.style.display = "none";
  cancelContainerTwo.style.display = "flex";
  handleOneTwo.classList.add("handle_1_two");

  setTimeout(() => {
    waitingTwo.style.display = "none";
    mainBalance -= Number(stakeAmountTwo.value);
    balance.textContent = mainBalance;

    setTimeout(() => {
      cancelContainerTwo.style.display = "none";
      btnProgressTwo.style.display = "flex";
      betValueTwo.textContent = "CASH OUT"
      let cashoutTime = setInterval(countCashoutTwo, 100);
      handleOneTwo.style.borderColor = "#d07206";

      btnProgressTwo.addEventListener('click', () => {
        cancelContainerTwo.style.display = "none";
        btnTwo.style.display = "flex";
        btnProgressTwo.style.display = "none";
        const cashout = btnAmountTwo.textContent;
        const newBalance = mainBalance + Number(cashout);
        balance.textContent = newBalance;
        clearInterval(cashoutTime);
        handleOneTwo.classList.remove("handle_1_two");
        displayAlertTwo(cashout);
        // setBackToDefault();
      })
    }, 4000)

  }, 2500)
})
// first handle code ends here
// =======================================================================================


successBtnAmount.textContent = stakeAmount.value;
successBtnAmountTwo.textContent = stakeAmountTwo.value;

// btns.forEach((btn) => {
  //   btn.addEventListener("click", (e) => {
//     const currentBtn = e.currentTarget;
//     // const cancelBtn = e.currentTarget.nextElementSibling;
//     if (currentBtn.dataset.id === "success") {
//       currentBtn.style.display = "none";
//       cancelContainer.style.display = "flex";
//       setTimeout(() => {
//         waiting.style.display = "none";
//         setTimeout(() => {
//           currentBtn.style.display = "flex";
//           currentBtn.style.backgroundColor = "black";
//           betValue.textContent = "CASH OUT";
//           cancelContainer.style.display = "none";
//           countCashout();
//         }, 2000)
//       }, 2000)
//     } else if (currentBtn.dataset.id === "danger") {
  //       cancelContainer.style.display = "none";
  //       currentBtn.parentElement.previousElementSibling.style.display = "flex";
//      } else if (btn.classList.contains("btn_progress")) {
//       btn.classList.remove("btn_progress");
//      }
//   })
//   if (btn.classList.contains("btn_progress")) {
  //     betValue.textContent = "CASH OUT";
//   }
// })


let counter = 1.00;
let counterTwo = 1.00;
// ====================================================================================================
function countCashout() {
  
  counter += 0.01;
  setCashout(counter);
  
  if (counter > 1.5) {
    counter += 0.005;
    setCashout(counter);
    console.log("hello");
  }

  if (counter > 2) {
    counter += 0.005;
    setCashout(counter);
    console.log("hello");
  }

  if (counter > 2.5) {
    counter += 0.003;
    setCashout(counter);
    console.log("hello");
  }
  
  if (counter > 3) {
    counter += 0.0045;
    setCashout(counter);
    console.log("Tymer");
  }

  if (counter > 4) {
    counter += 0.0045;
    setCashout(counter);
    console.log("Am");
  }

  if (counter > 4.5) {
    counter += 0.0075;
    setCashout(counter);
    console.log("Am");
  }
  
  if (counter > 5) {
    counter += 0.01;
    setCashout(counter);
    console.log("Here");
  }
  
  if (counter > 6) {
    counter += 0.005;
    setCashout(counter);
    console.log("Tymer");
  }
  if (counter > 7) {
    counter += 0.005;
    setCashout(counter);
    console.log("Tymer");
  }
  if (counter > 8) {
    counter += 0.01;
    setCashout(counter);
    console.log("Tymer");
  }
  if (counter > 9) {
    counter += 0.01;
    setCashout(counter);
    console.log("Tymer");
  }
  if (counter > 10) {
    counter += 0.01;
    setCashout(counter);
    console.log("Tymer");
  }
  if (counter > 11) {
    counter += 0.01;
    setCashout(counter);
    console.log("Tymer");
  }
  if (counter > 12) {
    counter += 0.01;
    setCashout(counter);
    console.log("Tymer");
  }
  if (counter > 13) {
    counter += 0.01;
    setCashout(counter);
    console.log("Tymer");
  }
  if (counter > 14) {
    counter += 0.01;
    setCashout(counter);
    console.log("Tymer");
  }
  if (counter > 15) {
    counter += 0.01;
    setCashout(counter);
    console.log("Tymer");
  }
  if (counter > 16) {
    counter += 0.01;
    setCashout(counter);
    console.log("Tymer");
  }
  if (counter > 17) {
    counter += 0.01;
    setCashout(counter);
    console.log("Tymer");
  }
  if (counter > 18) {
    counter += 0.01;
    setCashout(counter);
    console.log("Tymer");
  }
  if (counter > 27) {
    counter += 0.015;
    setCashout(counter);
    console.log("Tymer");
  }
  if (counter > 28) {
    counter += 0.015;
    setCashout(counter);
    console.log("Tymer");
  }
  if (counter > 29) {
    counter += 0.015;
    setCashout(counter);
    console.log("Tymer");
  }
  if (counter > 30) {
    counter += 0.02;
    setCashout(counter);
    console.log("Tymer");
  }
  if (counter > 31) {
    counter += 0.02;
    setCashout(counter);
    console.log("Tymer");
  }
  if (counter > 32) {
    counter += 0.02;
    setCashout(counter);
    console.log("Tymer");
  }
}

function setCashout(counter) {
  let value = Number(stakeAmount.value);
  let cashout = value * counter;
  btnAmount.textContent = `${Math.floor(cashout.toFixed(2))}.00`;
}
// ====================================================================================================

// ====================================================================================================
function countCashoutTwo() {
  
  counterTwo += 0.01;
  setCashoutTwo(counterTwo);
  
  if (counterTwo > 1.5) {
    counterTwo += 0.005;
    setCashoutTwo(counterTwo);
    console.log("hello");
  }

  if (counterTwo > 2) {
    counterTwo += 0.005;
    setCashoutTwo(counterTwo);
    console.log("hello");
  }

  if (counterTwo > 2.5) {
    counterTwo += 0.003;
    setCashoutTwo(counterTwo);
    console.log("hello");
  }
  
  if (counterTwo > 3) {
    counterTwo += 0.0045;
    setCashoutTwo(counterTwo);
    console.log("Tymer");
  }

  if (counterTwo > 4) {
    counterTwo += 0.0045;
    setCashoutTwo(counterTwo);
    console.log("Am");
  }

  if (counterTwo > 4.5) {
    counterTwo += 0.0075;
    setCashoutTwo(counterTwo);
    console.log("Am");
  }
  
  if (counterTwo > 5) {
    counterTwo += 0.01;
    setCashoutTwo(counterTwo);
    console.log("Here");
  }
  
  if (counterTwo > 6) {
    counterTwo += 0.005;
    setCashoutTwo(counterTwo);
    console.log("Tymer");
  }
  if (counterTwo > 7) {
    counterTwo += 0.005;
    setCashoutTwo(counterTwo);
    console.log("Tymer");
  }
  if (counterTwo > 8) {
    counterTwo += 0.01;
    setCashoutTwo(counterTwo);
    console.log("Tymer");
  }
  if (counterTwo > 9) {
    counterTwo += 0.01;
    setCashoutTwo(counterTwo);
    console.log("Tymer");
  }
  if (counterTwo > 10) {
    counterTwo += 0.01;
    setCashoutTwo(counterTwo);
    console.log("Tymer");
  }
  if (counterTwo > 11) {
    counterTwo += 0.01;
    setCashoutTwo(counterTwo);
    console.log("Tymer");
  }
  if (counterTwo > 12) {
    counterTwo += 0.01;
    setCashoutTwo(counterTwo);
    console.log("Tymer");
  }
  if (counterTwo > 13) {
    counterTwo += 0.01;
    setCashoutTwo(counterTwo);
    console.log("Tymer");
  }
  if (counterTwo > 14) {
    counterTwo += 0.01;
    setCashoutTwo(counterTwo);
    console.log("Tymer");
  }
  if (counterTwo > 15) {
    counterTwo += 0.01;
    setCashoutTwo(counterTwo);
    console.log("Tymer");
  }
  if (counterTwo > 16) {
    counterTwo += 0.01;
    setCashoutTwo(counterTwo);
    console.log("Tymer");
  }
  if (counterTwo > 17) {
    counterTwo += 0.01;
    setCashoutTwo(counterTwo);
    console.log("Tymer");
  }
  if (counterTwo > 18) {
    counterTwo += 0.01;
    setCashoutTwo(counterTwo);
    console.log("Tymer");
  }
  if (counterTwo > 27) {
    counterTwo += 0.015;
    setCashout(counterTwo);
    console.log("Tymer");
  }
  if (counterTwo > 28) {
    counterTwo += 0.015;
    setCashoutTwo(counterTwo);
    console.log("Tymer");
  }
  if (counterTwo > 29) {
    counterTwo += 0.015;
    setCashoutTwo(counterTwo);
    console.log("Tymer");
  }
  if (counterTwo > 30) {
    counterTwo += 0.02;
    setCashoutTwo(counterTwo);
    console.log("Tymer");
  }
  if (counterTwo > 31) {
    counterTwo += 0.02;
    setCashoutTwo(counterTwo);
    console.log("Tymer");
  }
  if (counterTwo > 32) {
    counterTwo += 0.02;
    setCashoutTwo(counterTwo);
    console.log("Tymer");
  }
}

function setCashoutTwo(counterTwo) {
  let value = Number(stakeAmountTwo.value);
  let cashout = value * counterTwo;
  btnAmountTwo.textContent = `${Math.floor(cashout.toFixed(2))}.00`;
}
// ====================================================================================================


function displayAlert(cashout) {
  alertOdds.textContent = (Number(cashout) / Number(stakeAmount.value)).toFixed(2);
  alertWithdraw.textContent = cashout;
  alert.classList.add("show_alert");
  if (alertTwo.classList.contains('show_alert_two')) {
    alert.style.display = "flex";
  }
  setTimeout(() => {
    alert.classList.add("hide_alert");
    setTimeout(() => {
      alert.style.display = "none";
    }, 400)
  }, 2000)
}

function displayAlertTwo(cashout) {
  if (alert.classList.contains('show_alert')) {
    alertContainer.style.height = `${8}rem`;
    alertTwo.style.transform = `translateY(${-35}px)`;
    alertContainer.style.gap = `${1.5}rem`;
    alert.classList.remove('hide_alert')
  } else {
    alert.style.display = "none";
    alertTwo.style.transform = `translateY(${-20}px)`;
    alertContainer.style.gap = 0;
    alertContainer.style.height = `${6}rem`;
  }
  alertOddsTwo.textContent = (Number(cashout) / Number(stakeAmountTwo.value)).toFixed(2);
  alertWithdrawTwo.textContent = cashout;
  alertTwo.classList.add("show_alert_two");
  setTimeout(() => {
    alertTwo.classList.add("hide_alert_two");
  }, 2000)
}

// setBackToDefault();

function setBackToDefault() {
  btnAmount.textContent = 0;
}

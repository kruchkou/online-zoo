document.addEventListener("click", () => {
    let amountFixedInputs = document.querySelectorAll(".pick-amount-input");
    let anotherAmountInput = document.querySelector("#another-amount");

    anotherAmountInput.addEventListener("input", onAnotherInputChange);
    [...amountFixedInputs].forEach(element => {
        element.addEventListener("change", (e) => onFixedInputChange(e.target.value));
    });
    
    function onFixedInputChange(amount) {
        anotherAmountInput.value = amount;
    }

    function onAnotherInputChange() {
        discheckAll();
        let value = anotherAmountInput.value;
        checkValidity();

        switch(value) {
            case "5000": 
                amountFixedInputs[0].checked = true;
                break;
            case "2000": 
                amountFixedInputs[1].checked = true;
                break;
            case "1000":
                amountFixedInputs[2].checked = true;
                break;
            case "500":
                amountFixedInputs[3].checked = true;
                break;
            case "250":
                amountFixedInputs[4].checked = true;
                break;
            case "100":
                amountFixedInputs[5].checked = true;
                break;
            case "50":
                amountFixedInputs[6].checked = true;
                break;
            case "25":
                amountFixedInputs[7].checked = true;
                break;
        }

        function checkValidity() {
            if(value.length > 4) {
                anotherAmountInput.value = value.substr(0,4);
            }
        }

        function discheckAll() {
            amountFixedInputs.forEach(element => {
                element.checked = false;
            })
        }
    }
})
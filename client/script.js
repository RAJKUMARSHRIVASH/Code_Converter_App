// baseurl 
const baseURL = "http://localhost:8000"

// language setting
var language = document.getElementById("lang").value;

document.getElementById("lang").addEventListener("change", (event) => {
    language = event.target.value;
})

document.getElementById("convert-btn").addEventListener("click", function () {
    var inputCode = document.getElementById("code-input").value;
    const payload = {
        code: inputCode,
        language
    }
    convertCode(payload);
});

document.getElementById("debug-btn").addEventListener("click", function () {
    var inputCode = document.getElementById("code-input").value;
    const payload = {
        code:inputCode
    }
    debugCode(payload);
});

document.getElementById("quality-btn").addEventListener("click", function () {
    var convertedCode = document.getElementById("output").innerText;
    const payload = {
        code:convertedCode
    }
    qualityCheckCode(payload);
});

document.getElementById("copy-btn").addEventListener("click", function () {
    copyToClipboard();
});

async function convertCode(payload) {

    try {
        const fdData = await fetch(`${baseURL}/convert`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        const data = await fdData.json();
        document.getElementById("output").innerText = "Converted code is:\n" + data.result;

    } catch (error) {
        console.error(error);
        return "Something went wrong:\n" + error
    }
}

async function debugCode(payload) {

    try {
        const fdData = await fetch(`${baseURL}/debug`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        const data = await fdData.json();
        document.getElementById("output").innerText = data.result;

    } catch (error) {
        console.error(error);
        return "Something went wrong:\n" + error
    }
}

async function qualityCheckCode(payload) {

    try {
        const fdData = await fetch(`${baseURL}/checkquality`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        const data = await fdData.json();
        document.getElementById("output").innerText = data.result;

    } catch (error) {
        console.error(error);
        return "Something went wrong:\n" + error
    }
}

function copyToClipboard() {
    // var tempInput = document.createElement("textarea");
    // tempInput.value = text;
    // document.body.appendChild(tempInput);
    // tempInput.select();
    // document.execCommand("copy");
    // document.body.removeChild(tempInput);

    const code = document.querySelector("#output").innerText;
    navigator.clipboard.writeText(code);
    alert("Copied to clipboard!");
}

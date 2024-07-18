onload = init;

const c1Div = document.getElementById("introduction-to-computers-c1");
const img1Div = document.getElementById("introduction-to-computers-img1");
const p1aDiv = document.getElementById("introduction-to-computers-p1a");
const p1bDiv = document.getElementById("introduction-to-computers-p1b");

const c2Div = document.getElementById("introduction-to-computers-c2");
const img2ADiv = document.getElementById("introduction-to-computers-img2a");
const p2aDiv = document.getElementById("introduction-to-computers-p2a");
const img2BDiv = document.getElementById("introduction-to-computers-img2b");
const p2bDiv = document.getElementById("introduction-to-computers-p2b");

const c3Div = document.getElementById("introduction-to-computers-c3");
const img3Div = document.getElementById("introduction-to-computers-img3");
const p3aDiv = document.getElementById("introduction-to-computers-p3a");
const p3bDiv = document.getElementById("introduction-to-computers-p3b");

const c4Div = document.getElementById("introduction-to-computers-c4");
const img4Div = document.getElementById("introduction-to-computers-img4");
const p4aDiv = document.getElementById("introduction-to-computers-p4a");
const p4bDiv = document.getElementById("introduction-to-computers-p4b");
const p4cDiv = document.getElementById("introduction-to-computers-p4c");

const imgThankYouDiv = document.getElementById("thank-you-page");

const quizPageDiv = document.getElementById("quiz-page");

const button = document.getElementsByClassName("button");

function init() {
    var onclick = clickUpdates();
    var btn = document.getElementById("btn");
    btn.addEventListener("click", onclick, false);
    
}

function clickUpdates() {
    var count = 0;
    var next = function() {
        switch(count) {
            case 0:
            // function click 1 here
            c1Div.style.display = "block";
            btn.innerHTML = "NEXT";
            console.log("First Click: Display a block of paragraph.");
            ;
            break;
            case 1:
            // function click 2 here
            img1Div.style.display = "block";
            console.log("Second Click: Replace the current paragraph with a new one.");
            break;
            case 2:
            // function click 3 here
            p1aDiv.style.display = "block";
            console.log("Third Click: The new paragraph gets replaced with another different paragraph.");
            break;
            case 3:
            // function click 4 here
            p1bDiv.style.display = "block";
            console.log("Fourth Click: The paragraph starts rotating.");
            break;
            case 4:
            // function click 5 here
            c1Div.style.display = "none";
            img1Div.style.display = "none";
            p1aDiv.style.display = "none";
            p1bDiv.style.display = "none";
            c2Div.style.display = "block";
            console.log("Fifth Click: The paragraph disappears.");
            break;
            case 5:
            // function click 6 here
            img2ADiv.style.display = "block";
            console.log("Sixth Click: //next function.");
            break;
            case 6:
            // function click 7 here
            p2aDiv.style.display = "block";
            console.log("Seventh Click: //some other function.");
            break;
            case 7:
            // function click 8 here
            img2ADiv.style.display = "none";
            p2aDiv.style.display = "none";
            img2BDiv.style.display = "block";
            console.log("Eight Click: //some other function.");
            break;
            case 8:
            // function click 9 here
            p2bDiv.style.display = "block";
            console.log("Nine Click: The paragraph starts rotating.");
            break;
            case 9:
            // function click 10 here
            c2Div.style.display = "none";
            img2BDiv.style.display = "none";
            p2bDiv.style.display = "none";
            c3Div.style.display = "block";
            console.log("Ten Click: The paragraph starts rotating.");
            break;
            case 10:
            // function click 11 here
            img3Div.style.display = "block";
            console.log("Eleven Click: The paragraph starts rotating.");
            break;
            case 11:
            // function click 12 here
            p3aDiv.style.display = "block";
            console.log("Twelve Click: The paragraph starts rotating.");
            break;
            case 12:
            // function click 13 here
            p3bDiv.style.display = "block";
            console.log("Thirteen Click: The paragraph starts rotating.");
            break;
            case 13:
            // function click 14 here
            c3Div.style.display = "none";
            img3Div.style.display = "none";
            p3aDiv.style.display = "none";
            p3bDiv.style.display = "none";
            c4Div.style.display = "block";
            console.log("Fourteen Click: The paragraph starts rotating.");
            break;
            case 14:
            // function click 15 here
            img4Div.style.display = "block";
            console.log("Fifteen Click: The paragraph starts rotating.");
            break;
            case 15:
            // function click 16 here
            p4aDiv.style.display = "block";
            console.log("Sixteen Click: The paragraph starts rotating.");
            break;
            case 16:
            // function click 17 here
            p4bDiv.style.display = "block";
            console.log("Seventeen Click: The paragraph starts rotating.");
            break;
            case 17:
            p4cDiv.style.display = "block";
            // function click 18 here
            console.log("Eighteen Click: The paragraph starts rotating.");
            break;
            case 18:
            // function click 19 here
            c4Div.style.display = "none";
            img4Div.style.display = "none";
            p4cDiv.style.display = "none";
            p4bDiv.style.display = "none";
            p4aDiv.style.display = "none";
            imgThankYouDiv.style.display = "block"
            btn.innerHTML = "TAKE QUIZ!";
            console.log("Nineteen Click: The paragraph starts rotating.");
            break;
            default:
            // function click 20 here
            imgThankYouDiv.style.display = "none";
            quizPageDiv.style.display = "block";
            console.log("All clicks are done.");
            btn.style.display = "none";
            break;
            
            
        }
        count = count<19?count+1:19;
    }
    
    return next;
}


document.addEventListener("keydown", function(event) {
    let letra= (event.key).toLowerCase();
            switch (letra) {
            case "a":
                console.log("The 'A' key is pressed.");
                let letraA = new Audio("Audio/Teclas_blancas/A.mp3");
                letraA.play();
                break;
            case ("s"):
                console.log("The 'S' key is pressed.");
                let letraS = new Audio("Audio/Teclas_blancas/S.mp3");
                letraS.play();
                break;
            case ("d"):
                console.log("The 'D' key is pressed.");
                let letraD = new Audio("Audio/Teclas_blancas/D.mp3");
                letraD.play();
                break;
            case ("f"):
                console.log("The 'F' key is pressed.");
                let letraF = new Audio("Audio/Teclas_blancas/F.mp3");
                letraF.play();
                break;
            case ("g"):
                console.log("The 'G' key is pressed.");
                let letraG = new Audio("Audio/Teclas_blancas/G.mp3");
                letraG.play();
                break;
            case ("h"):
                console.log("The 'H' key is pressed.");
                let letraH = new Audio("Audio/Teclas_blancas/H.mp3");
                letraH.play();
                break;
            case ("j"):
                console.log("The 'J' key is pressed.");
                let letraJ = new Audio("Audio/Teclas_blancas/J.mp3");
                letraJ.play();
                break

                case ("w"):
                console.log("The 'W' key is pressed.");
                let letraW = new Audio("Audio/Teclas_negras/W.mp3");
                letraW.play();
                break
                case ("e"):
                    console.log("The 'E' key is pressed.");
                    let letraE = new Audio("Audio/Teclas_negras/E.mp3");
                    letraE.play();
                    break
                case ("t"):
                    console.log("The 'T' key is pressed.");
                    let letraT = new Audio("Audio/Teclas_negras/T.mp3");
                    letraT.play();
                    break
                case ("y"):
                    console.log("The 'y' key is pressed.");
                    let letraY = new Audio("Audio/Teclas_negras/Y.mp3");
                    letraY.play();
                    break
                case ("u"):
                    console.log("The 'U' key is pressed.");
                    let letraU = new Audio("Audio/Teclas_negras/U.mp3");
                    letraU.play();
                    break
                default: console.log("La tecla Presionada es la equivocada");
                break;
        }

})

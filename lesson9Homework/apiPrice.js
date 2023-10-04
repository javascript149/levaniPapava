async function getTokenPrices() {
    let asset1 = document.getElementById("asset1");
    let asset2 = document.getElementById("asset2");


    let selectMenuItem1 = document.getElementById("selectMenu1").value;
    let selectMenuItem2 = document.getElementById("selectMenu2").value;

    let dataFromApi = await fetch("https://api.coincap.io/v2/assets");
    dataFromApi = await dataFromApi.json();

    let bitcoinPrice = dataFromApi.data[0].priceUsd;
    let ethPrice = dataFromApi.data[1].priceUsd;
    let xrpPrice = dataFromApi.data[4].priceUsd;
    let solanaPrice=dataFromApi.data[5].priceUsd;


    if (selectMenuItem1 === "bitcoin" && selectMenuItem2 === "bitcoin") {
        asset2.value = asset1.value;
    }

    if (selectMenuItem1 === "bitcoin" && selectMenuItem2 === "eth") {
        asset2.value = (bitcoinPrice * Number(asset1.value)) / ethPrice;
    }

    if (selectMenuItem1 === "bitcoin" && selectMenuItem2 === "xrp") {
        asset2.value = (bitcoinPrice * Number(asset1.value)) / xrpPrice;
    }

    if (selectMenuItem1 === "bitcoin" && selectMenuItem2 === "sln") {
        asset2.value = (bitcoinPrice * Number(asset1.value)) / solanaPrice;
    }

    
    if (selectMenuItem1==="eth" && selectMenuItem2==="eth"){
        asset2.value=asset1.value
    }

    if(selectMenuItem1==="eth" && selectMenuItem2==="bitcoin"){
        asset2.value=ethPrice * Number(asset1.value)/bitcoinPrice
    }

    if(selectMenuItem1==="eth" && selectMenuItem2==="xrp"){
         asset2.value=(ethPrice * Number(asset1.value)/xrpPrice)
     }

     if(selectMenuItem1==="eth" && selectMenuItem2==="sln"){
        asset2.value=(ethPrice * Number(asset1.value)/solanaPrice)
    }

     if(selectMenuItem1==="xrp" && selectMenuItem2==="xrp"){
        asset2.value=asset1.value
     }

     if(selectMenuItem1==="xrp" && selectMenuItem2==="bitcoin"){
        asset2.value=xrpPrice * Number(asset1.value) / bitcoinPrice
     }

     if(selectMenuItem1==="xrp" && selectMenuItem2==="eth"){
        asset2.value=xrpPrice * Number(asset1.value) / ethPrice
     }

     if(selectMenuItem1==="xrp" && selectMenuItem2==="sln"){
        asset2.value=xrpPrice * Number(asset1.value) / solanaPrice
     }


     if(selectMenuItem1==="sln" && selectMenuItem2==="sln"){
        asset2.value=asset1.value
     }

     if(selectMenuItem1==="sln" && selectMenuItem2==="bitcoin"){
        asset2.value=solanaPrice * Number(asset1.value)/bitcoinPrice
     }
     if(selectMenuItem1==="sln" && selectMenuItem2==="eth"){
        asset2.value=solanaPrice * Number(asset1.value)/ethPrice
     }
     if(selectMenuItem1==="sln" && selectMenuItem2==="xrp"){
        asset2.value=solanaPrice * Number(asset1.value)/xrpPrice
     }
}
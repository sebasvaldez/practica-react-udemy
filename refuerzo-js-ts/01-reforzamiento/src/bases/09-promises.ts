const miPromyse = new Promise((resolve, reject) => {
  setTimeout(() => {
    //Quiero mi dinero de regreso!
    //resolve(100);
    reject(`El hdp se murio antes de pagarme.`)
  }, 2000);
});

miPromyse.then((mymoneyIsBack) => {
  console.log(`tengo mis ${mymoneyIsBack} de regreso.`);
});

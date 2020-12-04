const promiseProvider = new Promise((resolve, reject) => {
	// zrób coś synchronicznie, lub asynchronicznie
	// ponieważ mamy dostęp do resolve i reject jako callbacks:
	setTimeout(() => {
        // resolve i Reject zawsze wysyłają na 2 stronę jedną rzecz !
        resolve('OK')
		// lub:
        reject(new Error('No way !'))
	}, 200)
})


promiseProvider
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    })
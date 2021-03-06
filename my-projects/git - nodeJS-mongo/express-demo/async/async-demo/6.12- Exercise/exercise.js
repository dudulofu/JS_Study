/* 
getCustomer(1, (customer) => {
  console.log('Customer: ', customer);
  if (customer.isGold) {
    getTopMovies((movies) => {
      console.log('Top movies: ', movies);
      sendEmail(customer.email, movies, () => {
        console.log('Email sent...')
      });
    });
  }
}); */
emailMonster();

async function emailMonster(){
  try{
    const customer = await getCustomer(1);
    console.log('Customer: ', customer);
    if(customer.isGold){
      const movies = await getTopMovies();
      console.log('Top movies: ', movies);
      const email = await sendEmail(customer.email, movies);
      console.log('Email Sent: ');
    }
  }
  catch (err){console.log(err.message);}
}



function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: 'Mosh Hamedani',
        isGold: true,
        email: 'email'
      });
    }, 1000);
  });
}

function getTopMovies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['movie1', 'movie2']);
    }, 1000);
  });
}

function sendEmail(email, movies, ) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}
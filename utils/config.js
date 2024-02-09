var domain;



if (process.env.NODE_ENV === 'production') {
    domain = 'https://nextjs13-crud-ten.vercel.app/api/'
}
else {
    domain = 'http://localhost:3000/api/'
}

export default domain
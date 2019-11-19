const initState= {
    posts:[{
        intro: 'Welcome to the developer chatroom',
        references: 'Register, Login and have fun',
        description: 'This website was made using the MERN stack'
    }]
}

const sentIntro = (state = initState, action) =>{
    return state;
}

export default sentIntro;
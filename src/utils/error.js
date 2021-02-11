//Function that render the error message if its necessary

// const mountNode = document.querySelector('#app')
//<h2 id="error" class="app-error"></h2>

const errMsg = document.querySelector('#msgError')

const renderErr = () => {
    errMsg.innerText = 'Oh oH!  Something come out wrong , Check the city and try again '
} 

export default renderErr
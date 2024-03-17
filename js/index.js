const buttonIp = document.querySelector('.menu__ip-btn')

const fetchIP = async () => {
    try{
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();

        buttonIp.addEventListener('click', (e) => {
            e.preventDefault();
            buttonIp.textContent = data.ip
        })

    }catch(err){
        console.log(err)
    }       
}
fetchIP()
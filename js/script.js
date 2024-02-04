const input = document.getElementById('statusCode__form-input');

const statusInfo = document.getElementById('statusCode__info');
const submit = document.querySelector('.statusCode__form-submit')

const fetchCards = async () => {
    console.log(1)
    try{
        const response = await fetch('../json/statuses.json');
        const data = await response.json();

        submit.addEventListener('click', (e) => {
            e.preventDefault();
            const statusCode = parseInt(input.value);
            const status = data.statuses.find(s => s.name === statusCode);

            if(status){
                statusInfo.innerHTML = 
                    `<p class='statusCode__info-title'>Статус код ${status.name} - ${status.title}</p>
                     <p>${status.description}</p>
                    `
                ;
                statusInfo.style.opacity = 1;
                input.value = '';
            }else{
                statusInfo.innerHTML = "<p>К сожалению ничего не найдено. Попробуйте ввести другой статус код</p>";
                statusInfo.style.opacity = 1;
                input.value = '';
            }
        })

    }catch(err){
        console.log(err)
    }       
}
 


fetchCards()




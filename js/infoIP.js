const buttonMyIp = document.querySelector('.ip-form-show-myIP');
const IpInput = document.getElementById('ip__form-input')
const buttonSubmit = document.querySelector('.ip__form-btn');
const ipInfo = document.getElementById('ip__info');
const err = document.querySelector('.ip__error');


const fetchIP = async () => {
    try{
        buttonSubmit.addEventListener('click', async (e) =>{
            e.preventDefault();
            const response = await fetch(`https://ipinfo.io/${IpInput.value}/geo`);
            const data = await response.json();
            renderInfoIp(data);
            OutputInfoIp()
        })

    }catch(err){
        console.log(err)
    }       
}

function returnInputValue(){
    return IpInput.value
}


const RenderValueMyIp = async () =>{
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();

    buttonMyIp.addEventListener('click', (e) => {
        e.preventDefault();
        IpInput.value = data.ip
    })
}

function OutputInfoIp(){
    ipInfo.style.opacity = 1;
    IpInput.value = '';
}

function renderInfoIp(data){
    if(data.ip){
        ipInfo.style.display = 'flex';
        err.style.display = 'none'
        document.querySelector('.ip__info-ip').textContent = data.ip;
        document.querySelector('.ip__info-city').textContent = data.city;
        document.querySelector('.ip__info-region').textContent = data.region;
        document.querySelector('.ip__info-country').textContent = data.country;
        document.querySelector('.ip__info-loc').textContent = data.loc;
        document.querySelector('.ip__info-org').textContent = data.org;
        document.querySelector('.ip__info-postal').textContent = data.postal;
        document.querySelector('.ip__info-timezone').textContent = data.timezone;
    }else{
        ipInfo.style.display = 'none';
        err.style.display = 'block'
    }
} 


fetchIP()
RenderValueMyIp();
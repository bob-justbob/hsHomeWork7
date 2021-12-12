const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')





async function test() {
    try{
        const result = await axios.get('https://fakerapi.it/api/v1/books?_quantity=5');
        console.log('result', result)

        return result;

    }catch(err){
        console.log(err)
    }
}

test()

async function bigTest(){
    const ul1 = document.getElementById('ul1')
    ul1.textContent = " ";
    try{
        const value = await test();
        value.data.data.forEach(element => {
            const li = document.createElement('li')
            li.textContent = element.author;
            ul1.appendChild(li)
        })
    }catch(err) {
        const body =document.body
        const p = document.createElement('p')
        p.textContent= err;
        body.appendChild(p)
    }


}

function ding() {
    dingDong()
async function dingDong() {
    const ul2 = document.getElementById('ul2')
    ul2.textContent= '';
            try{
                const value = await  axios.get('https://fakerapi.it/api/v1/persons?_quantity=5&_gender=male&_birthday_start=2005-01-01')
                value.data.data.forEach(element => {
                    const li = document.createElement('li')
                    li.textContent = element.firstname;
                    ul2.appendChild(li)
                })
            }catch(err) {
                const body =document.body
                const p = document.createElement('p')
                p.textContent= err;
                body.appendChild(p)
            }
    
          
        }
      
    }

btn1.addEventListener('click', bigTest)

btn2.addEventListener('click', ding)

btn3.addEventListener('click', function() {
const ul3 = document.getElementById('ul3')
ul3.textContent = '';
    hello()
async function hello(){
    try{
        const value = await axios.get('https://fakerapi.it/api/v1/users?_quantity=5&_gender=male')
       value.data.data.forEach(item => {
            const li = document.createElement('li')
                li.textContent = item.email;
                ul3.appendChild(li)
            })
            
    }catch(err){
        const body =document.body
        const p = document.createElement('p')
        p.textContent= err;
        body.appendChild(p)
    }
}
  
})


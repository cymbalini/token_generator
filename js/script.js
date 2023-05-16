'use strict'
const text="aavvdef1234"
const texttab=['a','b','c']
const generatetonken=(length=8)=>{
    const string='abcdef*&^%$12345'
    const tabrand=[]
    for(let i =0;i<length;i++){
        const char=(Math.random()*(string.length-1)).toFixed(0)
        tabrand.push(string[char])
    }
    return tabrand.join('')
}
const btn=document.querySelector('button')
btn.addEventListener('click',()=>{
    document.querySelector('div').innerText=generatetonken(40)
})
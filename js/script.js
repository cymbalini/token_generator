'use strict'
const text="aavvdef1234"
const texttab=['a','b','c']
const generatetonken=(length=8)=>{
    const string='!"#$%&\()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~'
    const tabrand=[]
    for(let i =0;i<length;i++){
        const char=(Math.random()*(string.length-1)).toFixed(0)
        tabrand.push(string[char])
    }
    return tabrand.join('')
}
const btn=document.querySelector('button')
btn.addEventListener('click',()=>{
    const liczba=document.querySelector('#ilosc').value
    document.querySelector('div').innerText=generatetonken(liczba)
})
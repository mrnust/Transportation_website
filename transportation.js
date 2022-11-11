let page = document.getElementById('page');
let blog = document.getElementById('blog');
let a1 = document.querySelector('.a1');
page.addEventListener('mouseover', () => {
     a1.style.height = '70px';
    let html = `
    <p style="color:black;margin-left:10px">Service Details</P>
    <p style="color:black;margin-top:5px;margin-left:10px">Element</P>
               `;
    a1.innerHTML=html
})
page.addEventListener('mouseleave', () => {
    a1.style.height = '0px';
        a1.innerHTML = '';
})
blog.addEventListener('mouseover', () => {
    a1.style.marginLeft = '500px';
    a1.style.height = '70px';
    let html = `
    <p style="color:black;margin-left:10px;margin-top:10px">Service Details</P>
    <p style="color:black;margin-top:10px;margin-left:10px">Element</P>
               `;
    a1.innerHTML = html;
})
blog.addEventListener('mouseleave', () => {
    a1.innerHTML = ''
    a1.style.marginLeft = '380px';
    a1.style.height ='0px'
})
let count = 0;
let count1 = 0;
let count2 = 0;
let count3 = 0;
function pboxa() {
    count++;
}
function pboxb() {
    count1++;
}
function pboxc() {
    count2++;
}
function pboxd() {
    count3++;
}
    setInterval(() => {
        pboxa();
        if(count<=40)
         document.getElementById('pbox1').innerHTML = count;
    }, 100);


    setInterval(() => {
        pboxb();
        if(count1<=200)
         document.getElementById('pbox2').innerHTML = count1;
    }, 170);
    setInterval(() => {
        pboxc();
        if(count2<=1050)
         document.getElementById('pbox3').innerHTML = count2;
    }, 50);

    setInterval(() => {
        pboxd();
        if(count3<=190)
         document.getElementById('pbox4').innerHTML = count3;
    }, 90);

    

window.onscroll = () => {
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);
    let degrees = scrollPercent * 360;
    
    let horizontalBar = document.getElementById('horizontal_bar');
    let biggerCircle = document.getElementById('bigger_circle');
    let containerCircle = document.getElementById('container_circle');
    let innerCircle = document.getElementById('inner_circle');

    biggerCircle.style.background = `conic-gradient(#498 ${degrees}deg, #ddd ${degrees}deg)`;
    horizontalBar.style.background = `linear-gradient(to right, #498 ${scrollPercentRounded}%, #eee ${scrollPercentRounded}%)`;
    innerCircle.innerHTML = scrollPercentRounded + '%';
    

    if(scrollPercentRounded < 1){
        containerCircle.style.display = 'none';
        horizontalBar.style.display = 'none';
    }else{

        scrollPercentRounded += 3;
        let opacityLevel = (scrollPercentRounded / 10) < 1 ? (scrollPercentRounded / 10) : 1;

        containerCircle.style.display = 'block';
        containerCircle.style.opacity = `${opacityLevel}`;
        horizontalBar.style.display = 'block';
        horizontalBar.style.opacity = `${opacityLevel}`;
    }
 };

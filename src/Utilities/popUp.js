const popUp = () => {
    document.getElementById('popUp').style.display = 'block';
    document.getElementById('popUp').style.transition = 'all linear 0.4s';
    document.getElementById('popUp').style.transform = 'scale(1)';
    setTimeout(() => {
        document.getElementById('popUp').style.transform = 'scale(0)';
    }, 2000);
}

export default popUp;
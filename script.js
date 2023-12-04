const content = document.querySelector('#content')

const home = document.querySelector('.home')
const activities = document.querySelector('.activities')
const project = document.querySelector('.project')

home.addEventListener('click', () => {

    content.replaceChildren()

    const homeContainer = document.createElement('div')
    homeContainer.classList.add('homeContainer')

    const profilePicture = document.createElement('img')
    profilePicture.classList.add('profilePicture')
    profilePicture.src = './images/prof1.jpg'

    const homeHero = document.createElement('div')
    homeHero.classList.add('homeHero')

    const defaultText = document.createElement('h2')
    defaultText.classList.add('defaultText')
    defaultText.textContent = 'My name is Gaspar, Marie Therese S. from BSIT 3DG2 taking Bachelor of Science in Information Technology.'

    const pinyinText = document.createElement('h2')
    pinyinText.classList.add('pinyinText')
    pinyinText.textContent = 'Wǒ de míngzì shì Gaspar, Marie Therese S. cóng BSIT 3DG2 gōngdú xìnxī jìshù lǐxué xuéshì xuéwèi.'

    const hanziText = document.createElement('h2')
    hanziText.classList.add('hanziText')
    hanziText.textContent = '我的名字是 Gaspar, Marie Therese S. 从 BSIT 3DG2 攻读信息技术理学学士学位.'


    homeContainer.append(profilePicture, homeHero)
    homeHero.append(defaultText, pinyinText, hanziText)
    content.append(homeContainer)



})

activities.addEventListener('click', () => {
    
    content.replaceChildren()

    const activitiesContainer = document.createElement('div')
    activitiesContainer.classList.add('activitiesContainer')

    const leftContainer = document.createElement('div')
    leftContainer.classList.add('leftContainer')
    
    const rightContainer = document.createElement('div')
    rightContainer.classList.add('rightContainer')

    const activityOne = document.createElement('div')
    activityOne.classList.add('activityOne')
    activityOne.textContent = 'Activity 1'

    const activityTwo = document.createElement('div')
    activityTwo.classList.add('activityOne')
    activityTwo.textContent = 'Activity 2'

    const activityThree = document.createElement('div')
    activityThree.classList.add('activityThree')
    activityThree.textContent = 'Activity 3'

    const activityFour = document.createElement('div')
    activityFour.classList.add('activityFour')
    activityFour.textContent = 'Activity 4'

    const activityFive = document.createElement('div')
    activityFive.classList.add('activityFive')
    activityFive.textContent = 'Activity 5'

    const activitySix = document.createElement('div')
    activitySix.classList.add('activitySix')
    activitySix.textContent = 'Activity 6'

    leftContainer.append(activityOne, activityTwo, activityThree)
    rightContainer.append(activityFour, activityFive, activitySix)
    activitiesContainer.append(leftContainer, rightContainer)
    content.append(activitiesContainer)

    activityOne.addEventListener('click', () => {
        openModal('./videos/activity1.mp4');
    });

    activityTwo.addEventListener('click', () => {
        openModal('./videos/activity2.mp4');
    });

    activityThree.addEventListener('click', () => {
        openModal('./videos/activity3.mp4');
    });

    activityFour.addEventListener('click', () => {
        openModal('./videos/activity4.mp4');
    });

    activityFive.addEventListener('click', () => {
        openModal('./videos/activity5.mp4');
    });

    activitySix.addEventListener('click', () => {
        openModal('./videos/activity6.mp4');
    });
  
    function openModal(videoURL) {
        const modal = document.getElementById('myModal');
        const videoFrame = document.getElementById('videoFrame');
        
        videoFrame.src = videoURL; // Set the iframe src to the video URL
        modal.style.display = 'block'; // Display the modal
    
        // Close the modal when the 'x' (close) button is clicked
        const closeBtn = document.getElementsByClassName('close')[0];
        closeBtn.onclick = function() {
            modal.style.display = 'none';
            videoFrame.src = ''; // Reset the iframe src
        }
    
        // Close the modal if the user clicks outside of it
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
                videoFrame.src = ''; //Reset the iframe src
            }
        }
    }



})

project.addEventListener('click', () => {

    content.replaceChildren()

    const projectContainer = document.createElement('div')
    projectContainer.classList.add('projectContainer')

    const FLProj = document.createElement('div')
    FLProj.classList.add('FLProj')
    FLProj.textContent = 'Foreign Language 1 Project'

    projectContainer.append(FLProj)
    content.append(projectContainer)

    FLProj.addEventListener('click', () => {
        openModal('./videos/FLProj.mp4');

       
    

    });

    function openModal(videoURL) {
        const modal = document.getElementById('myModal');
        const videoFrame = document.getElementById('videoFrame');
        
        videoFrame.src = videoURL; // Set the iframe src to the video URL
        modal.style.display = 'block'; // Display the modal
    
        // Close the modal when the 'x' (close) button is clicked
        const closeBtn = document.getElementsByClassName('close')[0];
        closeBtn.onclick = function() {
            modal.style.display = 'none';
            videoFrame.src = ''; // Reset the iframe src
        }
    
        // Close the modal if the user clicks outside of it
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
                videoFrame.src = ''; //Reset the iframe src
            }
        }
    }

})
const question = document.getElementById('question');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const displayImage = document.getElementById('displayImage');

let imageIndex = 1; // 用于跟踪当前显示的图片索引
const maxImages = 3; // 假设有3张图片，文件名分别为1.jpg, 2.jpg, 3.jpg

yesButton.addEventListener('click', () => {
    if (question.textContent === "准备好回答我的问题了吗？") {
        question.textContent = "张韶斌的外表你满意吗？";
        yesButton.innerText = "比肖战帅";
        noButton.innerText = '肖战没你帅';
        displayImage.style.backgroundImage = "url('../assets/img/question/2.JPG')";
    } else if (question.textContent === "张韶斌的外表你满意吗？") {
        question.textContent = "张韶斌的性格你满意吗？";
        yesButton.innerText = "完美无暇";
        noButton.innerText = '凑活吧';
        displayImage.style.backgroundImage = "url('../assets/img/question/3.JPG')";
    } else if (question.textContent === "张韶斌的性格你满意吗？") {
        question.textContent = "张韶斌的身材你满意吗？";
        yesButton.innerText = "包的";
        noButton.innerText = '不满意';
        displayImage.style.backgroundImage = "url('../assets/img/question/4.JPG')";
    } else if (question.textContent === "张韶斌的身材你满意吗？") {
        question.textContent = "接下里要确定你是否是陈怡秀本人。请拿出身份证，对着镜头爆出身份证号码";
        yesButton.innerText = "亲亲可跳过此步骤";
        noButton.style.display = "none";
        displayImage.style.backgroundImage = "url('../assets/img/question/5.JPG')";
    } else if (question.textContent === "接下里要确定你是否是陈怡秀本人。请拿出身份证，对着镜头爆出身份证号码") {
        question.textContent = "陈怡秀，确定自己是清醒着的吗？";
        yesButton.innerText = "头脑清醒";
        noButton.innerText = '我是大聪明';
        noButton.style.display = "inline-block";
        displayImage.style.backgroundImage = "url('../assets/img/question/6.gif')";
    } else if (question.textContent === "陈怡秀，确定自己是清醒着的吗？") {
        question.textContent = "陈怡秀，你对张韶斌有好感吗？";
        yesButton.innerText = "满满的";
        noButton.innerText = '没有';
        displayImage.style.backgroundImage = "url('../assets/img/question/7.gif')";
    } else if (question.textContent === "陈怡秀，你对张韶斌有好感吗？") {
        question.textContent = "陈怡秀，你愿意跟张韶斌在一起吗？";
        yesButton.innerText = "愿意";
        noButton.innerText = '不愿意';
        displayImage.style.backgroundImage = "url('../assets/img/question/7.gif')";
    } else if (question.textContent === "陈怡秀，你愿意跟张韶斌在一起吗？") {
        alert('恭喜配对成功');
    }

    resetNoButtonPosition();



});

noButton.addEventListener('click', () => {
    if (question.textContent === "张韶斌的外表你满意吗？") {
        question.textContent = "张韶斌的性格你满意吗？";
        yesButton.innerText = "完美无暇";
        noButton.innerText = '凑活吧';
    } else if (question.textContent === "张韶斌的性格你满意吗？") {
        alert('这还凑活，你怕不是要上天');
    } else if (question.textContent === "张韶斌的身材你满意吗？") {
        alert('不满意就一起做运动');
    } else {
        // 随机移动按钮
        const randomX = Math.floor(Math.random() * 201) - 100; // 生成-100到100之间的随机数
        const randomY = Math.floor(Math.random() * 201) - 200;
        noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }
});

// 重置“不是”按钮的位置
function resetNoButtonPosition() {
    noButton.style.transform = 'translate(0, 0)'; // 重置到初始位置
}

const form = document.querySelector('.form');
const paymentDiv = document.querySelector('.payment-process');
const regItemsContainer = document.querySelector('.items');
const successModal = document.querySelector('.success-modal');
const refId = document.querySelector('.ref-id');
const referralError = document.querySelector('.referral-error');
const errorModal = document.querySelector('.error-modal');
const payNowBtn = document.querySelector('.payNow');
const payLaterBtn = document.querySelector('.payLater');
const errorBtn = document.querySelector('.error-btn');

// ---------COURSE SELECTION ---------
const selectCourse = ()=>{
    const selectCourse = document.querySelector('#select-course');
    paymentDiv.style.display = 'none';

    selectCourse.onchange = ()=>{
        course = selectCourse.value;
        if(course == "FrontEnd Web Development"){
            paymentDiv.style.display = 'block';
        }else{
            paymentDiv.style.display = 'none';
        }
        return course;
    };
}
selectCourse();


// ----------SEND MAIL ON FORM SUBMISSION----

form.onsubmit = (e)=>{
    e.preventDefault();

    let checkedOptions = [];
        Array.from(form.querySelectorAll('.check')).forEach(checkBox=>{
            if(checkBox.checked == true){
                checkedOptions.push(checkBox.value);
            }
        });

    let fullName = form['name'].value;

    let referralID = fullName.substring(0, fullName.indexOf(" ")) + "GITech_" + getRandomIds()
    refId.innerHTML = referralID

    let refereeIdValue = form["refereeId"].value;

    if(refereeIdValue.length > 30){
        referralError.style.display = "block";
    }else{
        var params = {
            name: fullName,
            email: form['email'].value,
            mobileNumber: form['mobileNo'].value,
            whatsappNo: form['whatsappNo'].value,
            gender: form['gender'].value,
            courseName: course,
            regDate: form['date'].value,
            userRefId: referralID,
            hearAbout: checkedOptions,
            referredBy: refereeIdValue,
            accountName: form['accName'].value,
            accountNumber: form['accNo'].value,
            bankName: form['bankName'].value
        }
    
        const serviceID = "service_a39e36c";
        const templateId = "template_b7sbi5r";
    
        emailjs
            .send(serviceID, templateId, params)
            .then((res) =>{
            form['name'].value = ""
            form['email'].value = ""
            form['mobileNo'].value = ""
            form['whatsappNo'].value = ""
            form['date'].value = ""
            form['gender'].value = ""
            form["refereeId"].value = ""
            form['accName'].value = ""
            form['accNo'].value = ""
            form['bankName'].value = ""
            paymentDiv.style.display = 'none';
            regItemsContainer.style.display = 'none';
            successModal.classList.add('modal-display');
            payNowBtn.onclick = ()=> window.location.href = "https://flutterwave.com/pay/yedfz9ez3zkm";
            payLaterBtn.onclick = ()=> window.location.href = "/index.html";
        })
            .catch((err) =>{
                console.log(err)
                regItemsContainer.style.display = 'none';
                errorModal.classList.add('modal-display');
                errorBtn.onclick = ()=> window.location.href = "/courseRegistration.html";
            });
            // paymentDiv.style.display = 'none';
    }
}


// --------------GENERATING REFERRAL ID--------------
const getRandomIds = ()=>{
    const alphaArray = ["A","U", "E", "B", "c", "b", "u", "c", "D", "d", "W", "T", "p", "t", "Q", "M", "a", "e","F", "g", "G", "f", "H", "K", "I", "i", "J", "j", "h","k", ];
    const shuffled = [...alphaArray].sort(()=> 0.5 - Math.random());
    
    const randomNo = Math.floor(Math.random() * 100)
    return randomAlphaId = shuffled.slice(0, 3).join("") + randomNo;
}


// -------LABEL TRANSITION ON INPUT FOCUS------------
// const inputFields = document.querySelectorAll("input[type='text'], input[type='tel'], input[type='email']");
// const labels = document.querySelectorAll('label');

// inputFields.forEach(inputField =>{
//     inputField.onfocus = ()=>{
//         labels.forEach(label=>{
//             if(label.className == inputField.name && inputField.value == ""){
//                 label.classList.add('transit');
//             }else{
//                 blurAction();
//             }
        
//         });
//     }
// });

// const blurAction = ()=>{
//     inputFields.forEach(inputField=>{
//         inputField.onblur = ()=>{
//             const activeNow = inputField.hasFocus();
//             labels.forEach(label=>{
//                 if(label.classList.contains('transit') && activeNow == true){
//                     label.classList.remove('transit');
//                 }
//             });
//         };
    //   inputField.onblur = ()=>{
    //     if(inputField.hasFocus == true){
    //         labels.forEach(label=>{
    //             if(label.classList.contains('transit') && inputField.value == ""){
    //                 label.classList.remove('transit');
    //             }
    //         });
    //     }else{
    //         console.log('none');
    //     }
    //   };

//     });
// };

// inputFields.forEach(inputField =>{
//     inputField.onblur = ()=>{
//         const activeNow = inputField.hasFocus;

//         labels.forEach(label=>{
//             if(activeNow == true && inputField.value == ""){
//                 label.classList.remove('transit');
//             }else{
//                 label.classList.add('transit');
//             }
//         });
//     };
// });

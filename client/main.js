const complimentBtn = document.getElementById("complimentButton")
const emailForm = document.querySelector(".email-sign-up")
const submit = document.getElementById('submit-date')


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getEmail = (e) => {
    e.preventDefault();
    const email = document.querySelector('input[name="email"]').value;
    axios.post("http://localhost:4000/api/sign", { email })
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

const getAppt = () => {
    const dateTime = document.getElementById('meeting-time').value;
    axios.put("http://localhost:4000/api/calendar", { dateTime })
        .then(res => {
            const data = res.data;
            alert('Selected Date and Time: ' + data);
        });
};

complimentBtn.addEventListener('click', getCompliment);
emailForm.addEventListener('submit', getEmail);
submit.addEventListener('click', getAppt);
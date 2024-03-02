const complimentBtn = document.getElementById("complimentButton")
const emailForm = document.querySelector(".email-sign-up")

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
        })
};

complimentBtn.addEventListener('click', getCompliment);
emailForm.addEventListener('submit', getEmail);
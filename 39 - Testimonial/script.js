image = document.querySelector('#image');
person = document.querySelector('#name');
comment = document.querySelector('#comment');
buttons = document.querySelectorAll('.btn');
index = 0;

const customers = [];

function Customer(img, name, comment) {
    this.img = img;
    this.name = name;
    this.comment = comment;
}

function createCustomer(img, name, comment) {
    let fullImg = `./img/customer-${img}.jpg`;
    let customer = new Customer(fullImg, name, comment);

    customers.push(customer);
}

createCustomer(0, 'John', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?')
createCustomer(1, 'Sandy', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock')
createCustomer(2, 'Amy', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.')
createCustomer(3, 'Tyrell', 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.')
createCustomer(4, 'Wanda', 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('btn-left')) {
            if (index === 0) {
                index = customers.length;
            }
            index --;
            image.src = customers[index].img;
            person.textContent = customers[index].name;
            comment.textContent = customers[index].comment;
        }
        if (button.classList.contains('btn-right')) {
            index++;
            if (index === customers.length ) {
                index = 0;
            }
            image.src = customers[index].img;
            person.textContent = customers[index].name;
            comment.textContent = customers[index].comment;
        }
    })
});
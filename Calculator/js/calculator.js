
/* Listener when the html is loaded so the element exists when called */
window.addEventListener('load', () =>
{
    /* Save elements in constants */
    const keypadButtons = document.getElementsByClassName('keypad-button'); /* no usar querySelector porque devuelve un NodeList en vez de un HTML Collection */
    const display = document.querySelector('.calculator-display'); /* usar querySelector para que nos de el elemento solo */

    /* Convert HtmlCollection to Array */
    const keypadButtonsArray = Array.from(keypadButtons);
    /* Iteration by buttton array*/
    keypadButtonsArray.forEach((button) =>
    {
        button.addEventListener('click', () =>
        {
            /* Print inside text 
            console.log(button.innerHTML)*/
            calculator(button, display);
        });
    });
});


function calculator(button, display)
{
    switch (button.innerHTML)
    {
        case 'C':
            erase(display);
            break;

        case '=':
            calculate(display);
            break;

        default:
            update(display, button);
            break;
    }

}

function calculate(display)
{
    display.innerHTML = eval(display.innerHTML);
    /* String, solve it and save it at the innerHTML of the display */
}

function update(display, button)
{

    if (display.innerHTML == 0)
    {
        display.innerHTML = '';
    }

    display.innerHTML += button.innerHTML;
}

function erase(display)
{
    if (display.innerHTML != 0)
    {
        display.innerHTML = 0;
    }
}

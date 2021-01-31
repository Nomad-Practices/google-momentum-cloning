const styled = (aElement) => {
    const el = document.createElement(aElement);
    return (args) => {
        const css = args[0];
        el.style = css;
        return el;
    };
};

const title = styled("h1")`
    color: green;
    background-color: yellow;
    border-radius: 10px;
`;

const subtitle = styled("span")`
    font-size: 50px;
`;

title.innerText = "THIS IS"
subtitle.innerText = "TAGGED TEMPLATE~!!!";

document.body.append(title, subtitle);
